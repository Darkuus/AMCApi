const { Router } = require('express');

//#region Controllers
const PessoaController = require('./Controller/PessoaController');
const AuthenticationController = require('./Controller/AuthenticationController');
const GroupController = require('./Controller/GroupController');
//#endregion

//#region Validations
const {validate} = require('./middleware/validator');

const {PessoaValidationRules} = require('./Validations/PessoaValidation');

const {GroupValidationRules} = require('./Validations/GroupValidation');

//#endregion

const auth = require('./middleware/auth');
const routes = Router();

//#region Routes
routes.get('/Pessoa/getAll', auth, PessoaController.getAll);
routes.post('/Pessoa/save', PessoaValidationRules(), validate, PessoaController.save);
routes.get('/Pessoa/getOneByUsername', PessoaController.getOneByUsername);
routes.get('/Pessoa/getNonMembers/:id', auth, GroupController.getNonMembers);

routes.post('/Authentication/Login', AuthenticationController.login);
routes.post('/Authentication/LoginM', AuthenticationController.loginM);

routes.get('/Group/getAll', auth, GroupController.getAll);
routes.get('/Group/getAllByUsername/:username', auth, GroupController.getAllByUsername);
routes.get('/Group/getOne/:id', validate, GroupController.getOne);
routes.post('/Group/Save', GroupValidationRules(), validate, GroupController.save);
routes.post('/Group/saveMember', auth, GroupController.saveMember);
routes.post('/Group/delete', validate, GroupController.delete);
//#endregion

module.exports = routes;

