const express = require('express');
const passport = require('passport');

const router = express.Router();

const { tokenExists } = require("../../../middlewares/token.handler");
const { createNewTeam } = require("../aplication/createNewTeam");

router.post('/createNewTeam', [tokenExists, passport.authenticate('jwt', { session: false })], createNewTeam); // localhost:3000

module.exports = router;
