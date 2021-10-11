const express=require('express');
const path=require('path');
const router=express.Router();
const multer=require('multer');
const storage=multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "uploads")),
        console.log(path.dirname(__dirname));
        console.log(path.join(__filename));
        console.log(path.join(path.dirname(__dirname), "uploads"))
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    },
})
const upload=multer({storage:storage});
const{
    Creating_Airlines,
    display_airlines
}=require('../Controllers/Create.controller.airlines');
const{
    get_airline_by_id
}=require('../Controllers/Create.controller.airlines');
router.post('/',upload.single('logo'),Creating_Airlines);
router.get('/',display_airlines);
router.get('/:id',get_airline_by_id);
module.exports=router;