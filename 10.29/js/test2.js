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

console.log(imagesA);
//------行内样式换显示样式
// //隐藏
// imagesA[0].style.display="none";
// //显示
// imagesA[4].style.display="block";
// imagesA[4].style.border="1px soild red";


//-----------类名更换样式
//隐藏
// imagesA[0].className="hiddenImg";
//显示
// imagesA[0].className="displayImg";


//----------利用计时器间隔1s,显示1张图像，其余图像隐藏。
var currentNo=0;
function changImg(){
    //排他原理，去掉同类，突出自己。
    for(var i=0; i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
    }
    //或者
// for(const item of imagesA){
//     item.className="hiddenImg";
// }
     //再突出自己
    imagesA[currentNo].className="displayImg";
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

var imagesdiv=document.getElementById("images");
console.log(imagesdiv);
imagesdiv.addEventListener('mouseover',stopChange);
imagesdiv.addEventListener('mouseout',starChange);


