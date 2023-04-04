var express = require('express');
const { getUsers, createUser, signinUser } = require('../controllers/userController');
var router = express.Router();

router.get('/getUsers', getUsers);
router.post('/createUser', createUser);
// router.get('/getUserById/:id', getUserById)
router.post('/signinUser', signinUser)

module.exports = router;
