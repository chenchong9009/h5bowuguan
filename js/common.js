//设置字体大小
var fs = calculateFontSize();
calcHeight();
//计算字体大小,返回数值大小
function calculateFontSize() {
  var baseSize = 10, // 基数
    baseWidth = 375, //量取值大小
    winw = document.documentElement.clientWidth,
    fontSize = ((winw / baseWidth) * baseSize).toFixed(2);
  document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
  return fontSize;
}

isPC();

// function isPC() {
//   if (
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       navigator.userAgent
//     )
//   ) {
//   } else {
//     window.location = "pc.html";
//   }
// }

var winh = window.innerHeight;

$(window).resize(function () {
  fs = calculateFontSize();
  winh = window.innerHeight;
  calcHeight();
  isPC();
});

function calcHeight() {
  $("#indexbody").height(winh);
  $("#sharebox").height(winh);
  $("#iframebox").height(winh);
}

$(window).resize(function () {
  calculateFontSize();
});

window.addEventListener(
  "onorientationchange" in window ? "orientationchange" : "resize",
  function () {
    isOrientation();
  },
  false
);

//判断手机横屏竖屏
function isOrientation() {
  //横屏
  if (window.orientation === 90 || window.orientation === -90) {
    alert("竖屏体验更佳。");
  }
}

$(function () {
  new WOW().init();

  isOrientation();

  calcHeight();

  // 禁止手机横屏
  if (window.onorientation == 0 || window.oritation == 180) {
    $("body").attr("class", "portrait");
    onorientation = "portrait";
    return false;
  } else if (window.onorientation == 90 || window.oritation == -90) {
    $("body").attr("class", "landscape");
    onorientation = "landscape";
    return false;
  }
});

//获取地址栏参数
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

$(function () {
  //首先将#back-to-top隐藏
  $("#totop").hide();

  //当滚动条的位置处于距顶部300像素以下时,跳转链接出现,否则消失
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $("#totop").fadeIn();
      } else {
        $("#totop").fadeOut();
      }
    });

    //当点击跳转链接后,回到页面顶部位置
    $("#totop").click(function () {
      $("body,html").stop().animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
});

(function () {
  if (
    typeof WeixinJSBridge == "object" &&
    typeof WeixinJSBridge.invoke == "function"
  ) {
    handleFontSize();
  } else {
    if (document.addEventListener) {
      document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    } else if (document.attachEvent) {
      document.attachEvent("WeixinJSBridgeReady", handleFontSize);
      document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    }
  }
  function handleFontSize() {
    WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 });
    WeixinJSBridge.on("menu:setfont", function () {
      WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 });
    });
  }
})();
