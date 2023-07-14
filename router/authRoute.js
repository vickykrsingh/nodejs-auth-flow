const {signup} = require('../controllers/authControllers/signUpController.js')
const {signIn} = require('../controllers/authControllers/signInController.js')
const {getUser} = require('../controllers/authControllers/getUserController')
const express = require('express')
const jwtAuth = require('../middleware/JwtToken.js')
const logout = require('../controllers/authControllers/logoutUser.js')
const authRouter = express.Router()


authRouter.post('/signup',signup)
authRouter.post('/signin',signIn)
authRouter.get('/get-user',jwtAuth,getUser)
authRouter.get('/logout',jwtAuth,logout)


module.exports = authRouter;