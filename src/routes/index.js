const express=require('express');
const {InfoController}=require('../controllers');
const {PropertyController} = require('../controllers');
const { UserController } = require('../controllers');
const { AuthMiddleware} = require('../middleware');
const propertyRoutes=require('./property-routes');
const router= express.Router();

router.get('/info', AuthMiddleware.checkAuth,InfoController.info);
router.use('/property', AuthMiddleware.checkAuth,propertyRoutes);
router.get('/list-properties', PropertyController.getProperties);
router.post('/signup', AuthMiddleware.validateAuthRequest,UserController.signup);
router.post('/login',AuthMiddleware.validateAuthRequest,UserController.signin);

module.exports =router;