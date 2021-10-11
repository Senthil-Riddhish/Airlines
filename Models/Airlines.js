const mongoose=require('mongoose');
const PassengerSchema=mongoose.Schema({
    "id":{
        type:Number,
        required:[true,"please enter ID "]
    },
    "name":{
        type:String,
        required:[true,"please enter name "],
        trim:true,
        unique:true,
        index:true
    },
    "country":{
        type:String,
        required:[true,"please enter coutry "]
    },
    "logo":{
        type:String,
        required:[true,"please enter logo "]
    },
    "slogan":{
        type:String,
        required:[true,"please enter slogan "]
    },
    "head_quaters":[{
        type:String,
        required:[true,"please enter  head_quaters"]
    }],
    "website":{
        type:String,
        required:[true,"please enter website "],
        unique:true,
        index:true
    },
    "established":{
        type:String,
        required:[true,"please enter established"]
    }
});
module.exports=mongoose.model('Passenger_details',PassengerSchema);