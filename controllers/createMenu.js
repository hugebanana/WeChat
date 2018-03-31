var data = {
    "button": [
        {
            "type": "view",
            "name": "数据统计",
            "key": "BT1",
            "url": "http://0rbms7z.hk1.mofasuidao.cn/wechart"
        },
        {
            "type": "view",
            "name": "数据详情",
            "key": "BT2",
            "url": "http://0rbms7z.hk1.mofasuidao.cn/wechart"
        },
        {
            "name": "我的",
            "sub_button": [
                {
                    "type": "view",
                    "name": "报警开关",
                    "url": "http://0rbms7z.hk1.mofasuidao.cn/wechart"
                },
                {
                    "type": "view",
                    "name": "账户",
                    "url": "http://0rbms7z.hk1.mofasuidao.cn/wechart"
                },
                {
                    "type": "view",
                    "name": "设置",
                    "url": "http://0rbms7z.hk1.mofasuidao.cn/wechart"
                }
            ]
        }
    ]
}

var fn_init = async(ctx,next)=>{
    ctx.api.createMenu(data);
    ctx.response.body ='<h1>初始化成功</h1>';
}

module.exports={
    'GET /createMenu' : fn_init,
}