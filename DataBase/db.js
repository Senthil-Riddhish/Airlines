const mongoose=require('mongoose');
const password=encodeURIComponent(`Mayurie`);
const URL=`mongodb+srv://riddhishwar:Mayurie@cluster0.son3w.mongodb.net/Airlines?retryWrites=true&w=majority`;
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
