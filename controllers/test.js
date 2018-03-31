var fn_test = async(ctx,next)=>{
    ctx.response.body ='<h1>hello world</h1>';
}
var post_test = async(message,ctx,next)=>{
    console.log(message);
    console.log(ctx);
}

module.exports={
    'GET /wechart' : fn_test,
}