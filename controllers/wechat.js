var fn_wechat = async(ctx,next)=>{
    await next();
}
var fn_wechat_post = async(ctx,next)=>{
    await next();
}

module.exports={
    'GET /' : fn_wechat,
    'POST /' : fn_wechat_post
}