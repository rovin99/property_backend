const { StatusCodes } = require('http-status-codes');
//const { validationResult } = require('express-validator');
const { errorResponse } = require('../utils/common');

function validateCreateProperty(req, res, next) {
  console.log('Request Body:', req.body);
  if(!req.body.name){
    errorResponse.message='Something went wrong while creating a new Property'
    errorResponse.error={
        explanation: 'Name not found in the request in correct format'
    };
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
  }

  if(!req.body.location){
    errorResponse.message='Something went wrong while creating a new Property'
    errorResponse.error={
        explanation: 'Location not found in the request in correct format'
    };
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
  }

  if(!req.body.price){
    errorResponse.message='Something went wrong while creating a new Property'
    errorResponse.error={
        explanation: 'Price not found in the request in correct format'
    };
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
  }

  if(!req.body.type){
    errorResponse.message='Something went wrong while creating a new Property'
    errorResponse.error={
        explanation: 'Type not found in the request in correct format'
    };
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
  }

  if(!req.body.amenities){
    errorResponse.message='Something went wrong while creating a new Property'
    errorResponse.error={
        explanation: 'Amenities not found in the request in correct format'
    };
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
  }

  if(!req.body.carpetArea){
    errorResponse.message='Something went wrong while creating a new Property'
    errorResponse.error={
        explanation: 'CarpetArea not found in the request in correct format'
    };
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
  }

  // if(!req.body.ownerId){
  //   errorResponse.message='Something went wrong while creating a new Property'
  //   errorResponse.error={
  //       explanation: 'OwnerId not found in the request in correct format'
  //   };
  //   return res
  //           .status(StatusCodes.BAD_REQUEST)
  //           .json(errorResponse);
  // }


 
  next();
}
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
module.exports = {
    validateCreateProperty, 
    isAuthenticated
}
