const Pessoa = require('../Models/Pessoa');

module.exports = {
    async getAll(request, response){
        console.log('hey');
        const result = await Pessoa.find();
        return response.json(result);
    },

    async save(request, response){
        const { name, email, birthdate, username, password } = request.body;

        const result = await Pessoa.save({
            name,
            email,
            birthdate,
            username,
            password
        });

        return response.json(result);
    },

    async getOneByUsername(request, response){
        const {username} = request.query;
        const result  = await Pessoa.find({username : username});
        
        return response.json(result);
    }
}