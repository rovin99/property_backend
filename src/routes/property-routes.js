const express = require('express');

const {PropertyController} = require('../controllers');

const {PropertyMiddleware,AuthMiddleware} = require('../middleware');

const router = express.Router();

router.post('/', PropertyMiddleware.validateCreateProperty, PropertyController.createProperty);

router.get('/', PropertyController.getOwnerProperties);

router.patch('/:id/',PropertyController.updateProperty);

router.delete('/:id/',PropertyController.destroyProperty);

module.exports = router;