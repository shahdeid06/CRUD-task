const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/uploadAvatar');
const validateUser = require('../middlewares/userValidation');


// router.post('/', upload.single('profilePicture'), validateUser, userController.createUser);

router.post('/register', validateUser, userController.registerUser);

router.post('/login', userController.loginUser);


router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

// router.put('/:id', upload.single('profilePicture'), validateUser, userController.updateUser);

router.put('/:id', validateUser, userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;