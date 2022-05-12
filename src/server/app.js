const express = require('express');

const router = express.Router();

// User route
router.use('/auth', require('./user/infraestructure/userRoutes')); // localhost:3000/user
router.use('/team', require('./team/infraestructure/teamRoutes')); // localhost:3000/team

module.exports = router;
