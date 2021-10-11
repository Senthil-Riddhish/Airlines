const express=require('express');
const path=require('path');
const router=express.Router();
const{
    create_passenger,
    get_passenger_by_id,
    delete_passenger_by_id,
    change_name_passenger,
    update_passenger,
    pagination
}=require('../Controllers/create.passenger');
router.post('/',create_passenger);
router.get('/:id',get_passenger_by_id);
router.delete('/:id',delete_passenger_by_id);
router.patch('/:id',change_name_passenger);
router.put('/:id', update_passenger);
router.get('/',pagination);
module.exports=router;