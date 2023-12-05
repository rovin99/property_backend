const { StatusCodes } = require('http-status-codes');

const { PropertyService } = require('../services');
const { response } = require('express');
const {errorResponse,successResponse}=require('../utils/common');

async function createProperty(req, res) {
    try {
        const property = await PropertyService.createProperty({
            name: req.body.name,
            location: req.body.location,
            price: req.body.price,
            type: req.body.type,
            amenities: req.body.amenities,
            carpetArea: req.body.carpetArea,
            ownerId: req.body.ownerId
        });

        successResponse.message = 'Property created successfully';
        successResponse.data = property;

        return res
            .status(StatusCodes.CREATED)
            .json(successResponse);
                
    } catch (error) {
        console.error('Error in createProperty:', error);

        // Set a default status code (e.g., 500 for Internal Server Error)
        const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

        errorResponse.error = error;
        return res
            .status(statusCode)
            .json(errorResponse);
    }
}

async function getProperties(req, res) {
    try {
        const properties = await PropertyService.getProperties();
        successResponse.message = 'Property fetched successfully';
        successResponse.data=properties;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
                
    } catch(error) {
        errorResponse.error=error;
        return res
            .status(error.statusCode)
            .json(errorResponse);
    }
}

async function destroyProperty(req, res) {
    try {
        const response = await PropertyService.destroyProperty(req.params.id);
        successResponse.message = 'Property deleted successfully';
        successResponse.data=response;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
                
    } catch(error) {
        errorResponse.error=error;
        return res
            .status(error.statusCode)
            .json(errorResponse);
    }
}

async function updateProperty(req, res) {
    try {
        const updateResponse = await PropertyService.updateProperty(req.params.id, req.body);
        successResponse.message = 'Property updated successfully';
        successResponse.data=updateResponse;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
                
    } catch(error) {
        errorResponse.error=error;
        return res
            .status(error.statusCode)
            .json(errorResponse);
    }
}

module.exports = {
    createProperty,
    getProperties,
    destroyProperty,
    updateProperty
}