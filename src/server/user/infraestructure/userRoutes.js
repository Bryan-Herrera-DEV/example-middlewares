const express = require('express');
const passport = require('passport');

const router = express.Router();

const { userRegister } = require("../aplication/userRegister");
const { userLogin } = require('../aplication/userLogin');

router.post('/register', userRegister); // localhost:3000/user/register
router.post('/login', [passport.authenticate('local', { session: false })], userLogin); // localhost:3000/user/login  ~ middleware para la autenticacion

module.exports = router;
