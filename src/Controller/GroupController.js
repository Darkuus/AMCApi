const Group = require('../Models/Group');
const Pessoa = require('../Models/Pessoa');

module.exports = {
    async getAll(request, response){
        console.log('shinenigan has entered');
        const result = await Group.find();
        return response.json(result);
    },

    async save(request, response){
        const { title, administrator, revealDate, minValue, maxValue, revealPlaceLatitude, revealPlaceLongetude, members } = request.body;

        const result = await Group.create({
            title,
            administrator,
            revealDate,
            minValue, 
            maxValue, 
            revealPlaceLatitude, 
            revealPlaceLongetude, 
            members
        });
        return response.json(result);
    },

    async delete (request, response){

        const { id } = request.body;

        await Group.findByIdAndDelete(id);

        return response.json({status: 200});
    },

    async getOne (request, response) {
        const { id } = request.params;
        const group = await Group.findById(id);
        const newGroup = {
            administrator: {
                name: group.administrator.name,
                username: group.administrator.username,
                email: group.administrator.email
            },
            _id: group._id,
            title: group.title,
            revealDate: group.revealDate,
            minValue: group.minValue,
            maxValue: group.maxValue,
            revealPlaceLatitude: group.revealPlaceLatitude,
            revealPlaceLongetude: group.revealPlaceLongetude,
            members: group.members
        }
        return response.json(newGroup);
    },

    async getAllByUsername (request, response) {
        const { username } = request.params;
        await Group.find({ 'members.username': username})
        .then((groups) => {
            return response.json(groups);
        })
        .catch((err) => {
            return response.json('You aren`t part of any groups right now.');
        });
    },

    async getNonMembers (request, response) {
        const { id } = request.params;
        const usernames = await Group.findOne({_id: id},'-_id').select('members.username');
        var aray = new Array();
        usernames.members.map(x => {
            aray.push(x.username);
        });
        const members = await Pessoa.find({username : {$nin: aray}})
        .then((members) => {
            return response.json(members);
        })
        .catch((err) => {
            return response.json(err);
        });
    },

    async saveMember(request, response){
        const { groupId, memberSelected } = request.body;

        const group = await Group.findById(groupId);
        group.members.push(memberSelected);
        group.save().then(result => {
            console.log("oh heeeeeey", result);
        });

        return response.json(result);
    },
}