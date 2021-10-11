const express=require('express');
const PassengerSchemaModel=require('../Models/Airlines');
/**
 * 
 * REQUEST     :post
 * PARAMS      :ROUTER
 * DESCRIPTION :Creating_Airlines
 * RETURN_TYPE :JSON 
 */
const Creating_Airlines=async(req,res)=>{
    console.log("insiew post");
    const{
        id,
        name,
        country,
        slogan,
        head_quaters,
        website,
        established
    }=req.body;
    console.log(req.file);
    req.file.map={
        img:req.file.originalname
    }
    const result=new PassengerSchemaModel({
        id,
        name,
        country,
        slogan,
        head_quaters,
        website,
        established,
        "logo":`${req.file.path}`
    });
    result.save((err,res)=>{
        if(err){
            res.json({
                success:"false",
                message:err
            })
        }
        if(res){
            res.json({
                success:"true",
                message:"succesful"
            })
        }
    })
};
/**
 * 
 * REQUEST     :get
 * PARAMS      :ROUTER
 * DESCRIPTION :display_airlines
 * RETURN_TYPE :JSON 
 */
const display_airlines=async(req,res)=>{
    let models=await PassengerSchemaModel.find();
    res.json({
        success:"true",
        data:models
    })
}
/**
 * 
 * REQUEST     :get
 * PARAMS      :ROUTER
 * DESCRIPTION :dget_airline_by_id
 * RETURN_TYPE :JSON 
 */
const get_airline_by_id=async(req,res)=>{
    const{
        id
    }=req.params;
    let result=await PassengerSchemaModel.findOne({
        id:id
    });
    res.json({
        success:"true",
        data:result
    })
}
module.exports={
    Creating_Airlines,
    display_airlines,
    get_airline_by_id
}