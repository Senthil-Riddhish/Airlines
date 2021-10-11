const mongoose=require('mongoose');
const PassengerSchema_model=mongoose.Schema({
    "name":{
        type:String,
        required:[true,"please provide name of the passenger"]
    },
    "trips":{
        type:Number,
        required:[true,"please provide trips"]
    },
    "airline_id":{
        type:Number,
        required:[true,"please provide airline_id"]
    }
});
module.exports=mongoose.model('Passenger',PassengerSchema_model);