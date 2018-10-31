// // css选择器--document.querySelector()
// var img4=document.querySelector('#images>a:nth-child(4)');
// //ID--document.getElementById()
// var img4=document.getElementById('images').children[4];
// // 类名 --document.getElementsByClassName()
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名--document.getElementsByTagName()
// var img4=document.getElementsByTagName('a')[4];


// console.log(img4);
// img4.style.display="block";
// img4.style.display="none";

//获取一组带超链接的图像

var imagesA=document.getElementById("images").children;

//获取一组li文本
var txtList=document.querySelectorAll(".txtItem");



// console.log(txtlist);


//----------利用计时器间隔1s,显示1张图像，其余图像隐藏。
var currentNo=0;
function changImg(){
    //获取图片/文本总量
    var nodeLength=txtList.length
    //排他原理，去掉同类，突出自己。
    for(var i=0; i<imagesA.length;i++){
        //同类图片透明度
        imagesA[i].className="hiddenImg";
        //同类文本设置正常非高亮
        txtList[i].className="txtItem normalColor";
        // console.log(imagesA[i]);
    }
     //再突出自己 当前图片透明度
    imagesA[currentNo].className="displayImg";
    //排他原理2，设置文本高亮
    txtList[currentNo].className="txtItem heighlightColor";
    //换个元素，为下一次计时器调用做准备
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    // console.log(currentNo);
}


var timer=window.setInterval(changImg,1000);

//为按钮添加鼠标移入移出暂停事件
function stopChange(){
    window.clearInterval(timer);
    
}
function starChange(){
     timer=window.setInterval(changImg,1000)
}

var sliderdiv=document.querySelector(".slider");
// console.log(imagesdiv);
//为sliderDIV注册移出事件
sliderdiv.addEventListener('mouseover',stopChange);
sliderdiv.addEventListener('mouseout',starChange);

//为所有文本li注册鼠标移出事件，移入以后当前高亮，跳抓到对应图片
for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener("mouseover",gotoImg);
    txtList[i].no=i;
}
function gotoImg(){
    //获得当前显示图像的编号/文本编号 this 是当前发生的本体
    console.log(this.no);
    currentNo=this.no;
    //调用更换图片/文本函数
    changImg();
}
// var leftButton=document.querySelector(" .leftButton");
// var rightButton=document.querySelector(" .rightButton");

// leftButton.addEventListener('click',leftImg);
// rightButton.addEventListener('click',rightImg);

function leftImgGo(){
    leftImg();
    changImg();
}
function rightImgGo(){
    
}