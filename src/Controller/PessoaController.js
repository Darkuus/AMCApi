const Pessoa = require('../Models/Pessoa');
const mongoose = require('mongoose');

module.exports = {
    async getAll(request, response){
        const result = await Pessoa.find();
        return response.json(result);
    },

    async save(request, response){
        try{
            const { name, username, profilePic, email, birthdate, password } = request.body;

            var ent = new Pessoa({
                name,
                birthdate,
                profilePic,
                email,
                username,
                password,
            });

            ent.save()
                .then((user) => {
                    return response.json(result = {data : user, message : "Some fields are not filled."});
                })
                .catch((err) => {
                    return response.json(result = {message : err.message});
                });
        }
        catch(err){
           return("damn");
        }
    },

    async getOneByUsername(request, response){
        const {username} = request.query;
        const result  = await Pessoa.findOne({username : username});
        return response.json(result);
    }
}