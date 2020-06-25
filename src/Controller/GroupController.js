const Group = require('../Models/Group');

module.exports = {
    async getAll(request, response){
        console.log('shinenigan has entered');
        const result = await Group.find();
        return response.json(result);
    },

    async save(request, response){
        const { title, administrator, revealDate, minValue, maxValue, revealPlaceLatitude, revealPlaceLongetude, members } = request.body;
        
        console.log(administrator);

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

        return response.json({status: 1});
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
    }
}