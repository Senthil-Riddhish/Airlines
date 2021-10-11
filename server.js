const express=require('express');
const app=express();
app.use(express.json());
const dotenv=require('dotenv');
dotenv.config();
const db=require('./DataBase/db');

app.use('/api.instantwebtools.net/v1',require('./Routers/index'));


app.listen('8080',()=>{
    console.log('port conneccted');
})