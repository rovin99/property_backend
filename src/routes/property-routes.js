const express = require('express');

const {PropertyController} = require('../controllers');

const {PropertyMiddleware} = require('../middleware');

const router = express.Router();

router.post('/', PropertyMiddleware.isAuthenticated,PropertyMiddleware.validateCreateProperty, PropertyController.createProperty);

router.get('/', PropertyMiddleware.isAuthenticated,PropertyController.getProperties);

router.patch('/:id/',PropertyMiddleware.isAuthenticated,PropertyController.updateProperty);

router.delete('/:id/',PropertyMiddleware.isAuthenticated,PropertyController.destroyProperty);

module.exports = router;