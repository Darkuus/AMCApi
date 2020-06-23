const jwt = require('jsonwebtoken')
const Pessoa = require('../Models/Pessoa');

module.exports = {

    async login(request, response){
        let { username, password } = request.body;
        
        const PessoaRetorno = await Pessoa.findOne({ username : username, password: password});
        const token = jwt.sign({_id: PessoaRetorno._id}, process.env.JWT_KEY, { expiresIn: "1 days" });

        return response.send({auth : true,  token : token});
    }
}