const express = require('express');

const {PropertyController} = require('../controllers');

const {PropertyMiddleware} = require('../middleware');

const router = express.Router();

router.post('/', PropertyMiddleware.validateCreateProperty, PropertyController.createProperty);

router.get('/', PropertyController.getOwnerProperties);

router.patch('/:id/',PropertyMiddleware.authenticateOwner,PropertyController.updateProperty);

router.delete('/:id/',PropertyMiddleware.authenticateOwner,PropertyController.destroyProperty);

module.exports = router;