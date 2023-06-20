const express = require('express');
const router = express.Router();

const usersController = require('../../controllers/api/v1/user_controller');

router.post('/sign-up', usersController.createUser);      //Route for Creating User
router.post('/sign-in', usersController.signInUser);      //Route for Sign-In User

module.exports = router;