const { body, validationResult } = require('express-validator');
const PessoaValidationRules = () => {
    return [
        body('email').isEmail(),
        body('password').isLength({min: 6})
    ]
}

module.exports = {
    PessoaValidationRules,
}