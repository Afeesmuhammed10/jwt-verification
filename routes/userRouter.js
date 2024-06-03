const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller')
const usermiddleware = require('../middlewares/usermiddleware')

router.get('/',usermiddleware.verifyUser,userController.getHome)
router.get('/login',userController.geLogin)
router.post('/login',userController.verifyLogin)


module.exports = router