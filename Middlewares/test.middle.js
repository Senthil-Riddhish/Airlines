const test_mid=(req,res,next)=>{
    console.log('Passed');
    next();
};
console.log('test');
module.exports={
    test_mid
}