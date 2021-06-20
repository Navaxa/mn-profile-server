const { Router } = require('express');
const { check } = require('express-validator');
const { sendMail } = require('../controllers/index.controller');
const { secureCode } = require('../middlewares/secure');
const { validator } = require('../middlewares/validator');
const router = Router();

router.get('/send',[
    check('code', 'Please add a secure code!').isString().notEmpty(),
    check('email', 'Please add an emai!').isEmail().notEmpty(),
], validator, secureCode, sendMail);

module.exports = router;