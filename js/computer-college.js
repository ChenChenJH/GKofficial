 /*图片滚动效果*/
var speedpic = 40;//速度数值越大速度越慢
document.getElementById("list2").innerHTML = document.getElementById("list1").innerHTML;
function Marqueepic() {
    if (document.getElementById("list2").offsetWidth
            - document.getElementById("xlist").scrollLeft <= 0) {
        document.getElementById("xlist").scrollLeft -= document
                .getElementById("list1").offsetWidth;
    } else {
        document.getElementById("xlist").scrollLeft++;
    }
}
var MyMarpic = setInterval(Marqueepic, speedpic);
document.getElementById("xlist").onmouseover = function() {
    clearInterval(MyMarpic);
}
document.getElementById("xlist").onmouseout = function() {
    MyMarpic = setInterval(Marqueepic, speedpic);
}

 /*招聘信息滚动效果*/
var speed=80;
var xmessgae=document.getElementById("xmessgae");
var message2=document.getElementById("message2");
var message1=document.getElementById("message1");
message2.innerHTML=message1.innerHTML
function Marquee(){
    if(message2.offsetHeight-xmessgae.scrollTop<=0)
        xmessgae.scrollTop-=message1.offsetHeight;
    else{
        xmessgae.scrollTop++;
    }
}
var MyMar=setInterval(Marquee,speed)
xmessgae.onmouseover=function() {clearInterval(MyMar)}
xmessgae.onmouseout=function() {MyMar=setInterval(Marquee,speed)}