const express=require('express');
const {InfoController}=require('../controllers');
const {PropertyController} = require('../controllers');
const propertyRoutes=require('./property-routes');
const router= express.Router();

router.get('/info', InfoController.info);
router.use('/property', propertyRoutes);
router.get('/list-properties', PropertyController.getProperties);

module.exports =router;