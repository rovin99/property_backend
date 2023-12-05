const CrudRepository=require('./crud-repository');
const {Property}=require('../models');

class PropertyRepository extends CrudRepository{
    constructor(){
        super(Property);
    }
}

module.exports = PropertyRepository;