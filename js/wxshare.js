/**
 * Created by simon on 16/12/20.
 */

function wxInit(_appId,_timestamp,_nonceStr,_signature){
    //分享标题
    var _title = '正定博物馆';
    //分享描述
    var _desc = '正定博物馆馆藏文物精品';

    var _link = window.location.href;
    //分享图片 图片大小为640*640
    var _img = 'https://project.ttge.com/bowu/bw/images/share.jpg';

   wx.config({
        debug: false,
        appId: _appId,
        timestamp: _timestamp,
        nonceStr: _nonceStr,
        signature: _signature,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'startRecord',
             'stopRecord',
             'translateVoice',
        ]
    });
    wx.ready(function(){
        //分享到朋友圈
        wx.onMenuShareTimeline({
            title: _desc, // 分享标题
            link: _link, // 分享链接
            imgUrl: _img, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                //alert(_link);
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        //分享给好友
        wx.onMenuShareAppMessage({
            title: _title, // 分享标题
            desc: _desc, // 分享描述
            link: _link, // 分享链接
            imgUrl: _img, // 分享图标
            success: function () {
               // alert(_link);
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        //分享到QQ
        wx.onMenuShareQQ({
            title: _title, // 分享标题
            desc: _desc, // 分享描述
            link: _link, // 分享链接
            imgUrl: _img, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        //分享到腾讯微博
        wx.onMenuShareWeibo({
            title: _title, // 分享标题
            desc: _desc, // 分享描述
            link: _link, // 分享链接
            imgUrl: _img, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

    });
}

//实例化分享

function sharef(){
    $.ajax({
        url:'//zzb.ttge.com/wechat/api/share?t='+ new Date().getTime(),
        data: {url: encodeURIComponent(window.location.href)},
        dataType:"jsonp",
        success:function(data){
            console.log(data)
            var json = data;
			var jsonData = (json.data);
            if(json.code == 1000){
                wxInit(jsonData.appId,jsonData.timestamp,jsonData.nonceStr,jsonData.signature);
            }
        },
        error:function(data){
            console.log(data);
        }
    });
}


