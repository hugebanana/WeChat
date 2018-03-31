//app.js
const Koa = require('koa');
const wechat = require('co-wechat');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const API = require('co-wechat-api');
const OAUTH = require('co-wechat-oauth')
const config = require('./config')
const msg = require('./wechart/welcomeMsg');


var api = new API(config.mp.appid, config.secret);
var oauth = new OAUTH(config.mp.appid, config.secret);
const app = new Koa();


// log request URL:
app.use(async (ctx, next) => {
    ctx.oauth = oauth;
    ctx.api = api;
    ctx.app = app;
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.use(wechat(config.mp).middleware(async (message, ctx, next) => {
    //初次关注
    if (message.MsgType === 'event' && message.Event === 'subscribe' && message.EventKey===''){
        return msg;
    }
    console.log(message);
    console.log("____________________")
    console.log(ctx);
    // await next();
}));

app.listen(config.port);

console.info("start..")