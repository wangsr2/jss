//初始化


// 获取一组带图像的超链接
var imagesA = document.getElementById("images").children;
//获取一组li文本
var txtList = document.querySelector(".txt-box").children;

//初始化当前显示的图片/文本编号
var currentNo = 0;
const nodeLength = 8;

//计时器换片函数，间隔1S被调用,显示1张图像，其余图像隐藏文本轮流高亮
function changeImg() {


    // 排他原理将同类设置为统一状态，
    for (var i = 0; i < nodeLength; i++) {
        // 同类图片透明度
        imagesA[i].className = "hiddenImg";
        //同类文本设置正常非高亮
        txtList[i].className = "txtItem normalColor";
    }
    //排他原理2，突出自己，当前图片透明度
    imagesA[currentNo].className = "displayImg";
    // 排他原理2，文本高亮
    txtList[currentNo].className = "txtItem heighlightColor";

}

function leftImg() {     
    if (currentNo > 0) { currentNo--; }
    else {
        currentNo = 7;
    } 
}


function rightImg() {
    if (currentNo < 7) { currentNo++; }
    else {
        currentNo = 0;
    }  
}
function leftImgGo(){
    leftImg();
    changeImg();
}

function rightImgGo(){
    rightImg();
    changeImg();
}


//网页加载后启动定时器，每隔1秒调用changeImgGo（）换片
var timer = window.setInterval(rightImgGo, 1000);

//鼠标移出后移除定时器
function stopChange() {
    window.clearInterval(timer);
    
}
//鼠标移入后重设定时器
function startChange() {
    timer = window.setInterval(rightImgGo, 1000);
}

//获取sliderDIV以注册移入移出事件
var sliderDiv = document.querySelector(".slider");

//为sliderDIV注册移入移出事件
sliderDiv.addEventListener('mouseover', stopChange);
sliderDiv.addEventListener('mouseout', startChange);


// 为所有文本Li注册鼠标移入事件
for (var i = 0; i < txtList.length; i++) {
    txtList[i].addEventListener('mouseover', gotoImg);
    //添加自定义属性no 记录当前li的编号
    txtList[i].no = i;
}
//移入之后，当前li高亮,跳转到对应图片
function gotoImg() {
    
    // 获得当前显示图像的编号/文本编号  this 是当前事件发生的本体
    
    currentNo = this.no;
    //调用更换图片/文本函数
    changeImg();
}
var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');


leftButton.addEventListener('click', leftImgGo);
rightButton.addEventListener('click', rightImgGo);





