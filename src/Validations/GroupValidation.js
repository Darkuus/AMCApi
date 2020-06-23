const { body, validationResult } = require('express-validator');
const GroupValidationRules = () => {
    return [
        //body('members.email').isEmail(),
        body('name').isLength({max: 60})
    ]
}

module.exports = {
    GroupValidationRules,
}