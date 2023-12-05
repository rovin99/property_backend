const express=require('express');
const {InfoController}=require('../controllers');
const {PropertyController} = require('../controllers');
const { UserController } = require('../controllers');
//const { AuthRequestMiddlewares } = require('../middlewares');
const propertyRoutes=require('./property-routes');
const router= express.Router();

router.get('/info', InfoController.info);
router.use('/property', propertyRoutes);
router.get('/list-properties', PropertyController.getProperties);
router.post('/signup', UserController.signup);
//router.post('/login',UserController.signin);

module.exports =router;