const express = require('express');
const passport = require('passport');

const router = express.Router();

const { tokenExists } = require("../../../middlewares/token.handler");
const { createNewTeam } = require("../aplication/createNewTeam");
// todas las rutas de aqui deben pasar por el middleware JWT de passport
router.post('/createNewTeam', [tokenExists, passport.authenticate('jwt', { session: false })], createNewTeam); // localhost:3000

module.exports = router;
