const CrudRepository=require('./crud-repository');
const {Property}=require('../models');

class PropertyRepository extends CrudRepository{
    constructor(){
        super(Property);
    }

    async getPropertyByOwnerId(ownerId) {
        const ownerproperty = await Property.findAll({ where: { ownerId: ownerId } });
        console.log(ownerproperty);
        return ownerproperty;
    }

    async getOwnnerId(id){
        const property = await Property.findByPk(id);
        return property.ownerId;
    }
     
}

module.exports = PropertyRepository;