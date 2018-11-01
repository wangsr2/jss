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
//左向换片/文本
function leftImgGo(){
    leftImg();
    changeImg();
}
//右向换片/文本
function rightImgGo(){
    rightImg();
    changeImg();
}


//网页加载后启动定时器，每隔1秒调用changeImgGo（）换片
var timer = window.setInterval(rightImgGo, 1000);

//获取sliderDIV以注册移入移出事件
var sliderDiv = document.querySelector(".slider");


// 匿名函数
sliderDiv.addEventListener('mouseover', function stopChange(){window.clearInterval(timer);});
sliderDiv.addEventListener('mouseout', function startChange(){timer = window.setInterval(rightImgGo, 1000);});

// 为所有文本Li注册鼠标移入事件
for (var i = 0; i < txtList.length; i++) {
    txtList[i].addEventListener('mouseover', gotoImg);
    //添加自定义属性no 记录当前li的编号
    txtList[i].no = i;
}
//切换到编号文本/图片
function gotoImg() {
    currentNo = this.no;
    changeImg();
}
var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');

//上下一张注册事件
leftButton.addEventListener('click', leftImgGo);
rightButton.addEventListener('click', rightImgGo);





