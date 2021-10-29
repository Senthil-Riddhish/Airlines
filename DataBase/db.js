const mongoose=require('mongoose');
const URL=//
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
        console.log('connected');
});
const dbConn=mongoose.connection;
module.exports={
    dbConn
}
