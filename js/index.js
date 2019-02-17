var tabs = document.getElementById("tabs").getElementsByTagName("li")
var lists =document.getElementById("lists").getElementsByTagName("ul")
// console.log(tabs);
// console.log(lists);
// var scrollTop = document.documentElement.scrollTop;
// console.log(scrollTop);

for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick = showlist;
    // 获取每一个li,绑定onclick事件，调用showlist方法。
}
function showlist() {
    for(var i = 0; i < tabs.length; i++)
    if(tabs[i] === this){
        tabs[i].className ="active";
        lists[i].className ="clearfix active"
    }
    else {
        tabs[i].className = "";
        lists[i].className = "clearfix"
    }
    // 定义一个函数。
    // 遍历每一个li，当li等于所点击的li时，给与li一个类名，否则类名为空。
    // ul的下标保持与li一致，当banner切换的时候，goods跟着切换。
}

var seckillBanner = document.getElementById("seckillBanner");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || Window.pageYOffset || document.bodyscrollTop || 0;
    // 用或|| 来兼容苹果浏览器和老版本ie，都没有就直接给0.
    if(scrollTop >=300 ){
        seckillBanner.className = "seckill-banner bannerfixed";
    }
    else {
        seckillBanner.className = "seckill-banner";
    }
   
} 


