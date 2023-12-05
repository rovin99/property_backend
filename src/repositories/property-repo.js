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

}

module.exports = PropertyRepository;