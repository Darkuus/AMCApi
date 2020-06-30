const jwt = require('jsonwebtoken')
const Pessoa = require('../Models/Pessoa');

module.exports = {

    async login(request, response){
        let { username, password } = request.body;
        
        const PessoaRetorno = await Pessoa.findOne({ username : username, password: password});

        if(PessoaRetorno){
            const token = jwt.sign({_id: PessoaRetorno._id}, process.env.JWT_KEY, { expiresIn: "1 days" });
            return response.send({status : 1, result : {auth : true,  token : token, message : "Success!", username : PessoaRetorno.username}});
        }
        return response.send({status: 0, result: {message : "Username or password may be incorrect."}});
    }
}