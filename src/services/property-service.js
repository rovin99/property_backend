const {StatusCodes} = require('http-status-codes');

const { PropertyRepository } = require('../repositories');

const AppError = require('../utils/errors/app-error');
const propertyRepository = new PropertyRepository();

async function createProperty(data) {
    try{
        const property= await propertyRepository.create(data);
        return property;
    }
    catch(error){
        if(error.name =='SequelizeValidationError') {
            let explaination=[];
            
            error.errors.forEach((err)=>{
                explaination.push(err.message);
            });
           
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Property object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getProperties(){
    try{
        const properties= await propertyRepository.getAll();
        
        return properties;
    }
    catch(error){
        throw new AppError('Cannot get properties', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyProperty(id){
    try{
        const response= await propertyRepository.destroy(id);
        return response;
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The property you requested not found', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot delete data of the property', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateProperty(id, data){
    try{
        const response= await propertyRepository.update(id, data);
        return response;
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The property you requested not found', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot update data of the property', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getPropertyByOwnerId(ownerId) {
    try {
        const properties = await propertyRepository.getPropertyByOwnerId(ownerId);
        console.log(JSON.stringify(properties));
        return properties;
    } catch (error) {
        throw new AppError('Cannot get properties by owner ID', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

 async function getOwnnerId(id){
    try{
        const ownerId=  propertyRepository.getOwnnerId(id);
        return ownerId;
    }
    catch(error){
        throw new AppError('Cannot get owner ID', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createProperty,
    getProperties,
    destroyProperty,
    updateProperty,
    getPropertyByOwnerId,
    getOwnnerId,
}


