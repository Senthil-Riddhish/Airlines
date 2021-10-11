const express=require('express');
const app=express();


app.use('/airlines',require('./Create_Airlines'));
app.use('/passenger',require('../Routers/passenger.router'));
module.exports=app;