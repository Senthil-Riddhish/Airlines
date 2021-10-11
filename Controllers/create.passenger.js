const express=require('express');
const PassengerSchemaModel=require('../Models/Airlines');
const PassengerSchema_model=require('../Models/passenger.model');
/**
 * 
 * REQUEST     :POST
 * PARAMS      :ROUTER
 * DESCRIPTION :create_passenger
 * RETURN_TYPE :JSON 
 */
const create_passenger=async(req,res)=>{
    const{
            name,
            trips,
            airline_id
        }=req.body;
    if(trips==null || trips==undefined){
        res.json({
            message:"trip is not valid , it should a numeric number"
        })
    }
    let result=await PassengerSchemaModel.findOne({
        airline_id:airline_id
    });
    if(result){
        let passenger=new PassengerSchema_model({
            name,
            trips,
            airline_id
        });
        try{
            passenger.save();
            res.json({
                success:"true",
                data:passenger
            });
        }catch(error){
            res.json({
                success:"false",
                data:err
            })
        }
    }
};
/**
 * 
 * REQUEST     :GET
 * PARAMS      :ROUTER
 * DESCRIPTION :get_passenger_by_id
 * RETURN_TYPE :JSON 
 */
const get_passenger_by_id=async(req,res)=>{
    const{
        id
    }=req.params;
    let result=await PassengerSchema_model.findOne({
        id:id
    })
    let airline=[];
    if(result){
        airline.push(await PassengerSchemaModel.findOne({
            id:result.airline_id
        }));
    }
    try{
        res.json({
            success:"true",
            passenger:result
        });
    }catch(error){
        res.json({
            success:"true",
            data:error
        })
    }
}
/**
 * 
 * REQUEST     :DELETE
 * PARAMS      :QUERY , ROUTE
 * DESCRIPTION :delete_passenger_by_id
 * RETURN_TYPE :JSON 
 */
const delete_passenger_by_id=async(req,res)=>{
    console.log('delete');
    const{
        id
    }=req.params;
    try{
    let result=PassengerSchema_model.deleteOne({
        id:id
    });
    result.exec((err,result)=>{
        if(result){
            res.json({
                success:"true",
                data:result
            })
        }
    })
    }catch(error){
        res.json({
            success:"false",
            data:error
        })
    }
};
/**
 * 
 * REQUEST     :PATCH
 * PARAMS      :QUERY , ROUTE
 * DESCRIPTION :change_name_passenger
 * RETURN_TYPE :JSON 
 */
const change_name_passenger=async(req,res)=>{
    const{
        id
    }=req.params;
    const{
        name
    }=req.body;
    console.log(id,name);
    let result=await PassengerSchema_model.findOneAndUpdate({
        id:id
    },{
        "name":name
    })
    if(result){
        res.json({
            success:"true",
            data:result
        })
    }
    else{
        res.json({
            success:"false"
        })
    }
};
/**
 * 
 * REQUEST     :PUT
 * PARAMS      :QUERY , ROUTE
 * DESCRIPTION :update_passenger
 * RETURN_TYPE :JSON 
 */
const update_passenger=async(req,res)=>{
    const{
        id
    }=req.params;
    const{
        name,
        trips,
        airline_id
    }=req.body;
    console.log(id,req.body);
    let result=await PassengerSchema_model.findOneAndUpdate({
        id:id
    },{
        "name":name,
        "trips":trips,
        "airline_id":airline_id
    });
    if(result){
        res.json({
            success:"true",
            data:result
        })
    }
    else{
        res.json({
            success:"false"
        })
    }
}
/**
 * 
 * REQUEST     :GET
 * PARAMS      :QUERY , ROUTE
 * DESCRIPTION :pagination
 * RETURN_TYPE :JSON 
 */
const pagination=async(req,res)=>{
    const{
        page,
        size
    }=req.query;
    let passengr_array=await PassengerSchema_model.find({});
    let airlines_array=await PassengerSchemaModel.find({});
    
    let pagelimit=(page-1)*size;
    let endlimit=page*size;
    let no_of_pages=null;
    if(typeof((passengr_array.length) /size) == typeof(integer)){
        no_of_pages=(passengr_array.length) /size;
    }
    else{
        no_of_pages=Math.floor((passengr_array.length) /size)+1;
    }
    
    console.log(passengr_array.slice(pagelimit,endlimit));
    let result=[];
    for(let i=pagelimit;i<endlimit;i++){
        let person=passengr_array[i].airline_id;
        let airway=await PassengerSchemaModel.find({
            "id":person
        });
        console.log("airway",airway);
        let pass={
            "passenger_id":passengr_array[i].id,
            "passenger_name":passengr_array[i].name,
            "passenger_trips":passengr_array[i].trips,
            "passenger_airline_id":passengr_array[i].airline_id,
            "airline_details":JSON.stringify(airway[0],null,4),

        }
        result.push(pass);
        console.log("pass",pass);
        if(passengr_array[i+1]==undefined){
            break
        }
    }
    res.json({
        "Total passenger":passengr_array.length,
        "Total pages":no_of_pages,
        "data":result
    });
}
module.exports={
    create_passenger,
    get_passenger_by_id,
    delete_passenger_by_id,
    change_name_passenger,
    update_passenger,
    pagination
}