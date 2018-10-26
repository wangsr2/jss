var timer;//设计定时器变量

//启动定时器函数定义--若在启动器时有很多附加操作可以一并写入该函数。
//若启动定时器动作单一，可以直接调用window定时器
function startimer(speed){
    timer=window.setInterval(changeNum,speed);
}
//调用定时器，使从一开始执行变化
startimer(200);

//获取h2元素
var h2Obj=document.querySelector('h2');
console.log(h2Obj);
//设置当前变化的好吗变量初始值
var currentNo=0;
//定义变化数字函数，0--》9到达9后变化到0
function changeNum(){
h2Obj.textContent=currentNo;
if(currentNo<8) currentNo++;
else currentNo=0;
h2Obj.innerHTML='<img src="images/0'+currentNo+'.jpg" alt""></img>';

// console.log(currentNo);
}
//获取控制按钮
var btnObj=document.getElementById('btnOjb')

//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function starChange(){
    startimer(500);
    btnObj.textContent="停止";
}
//定义停驶定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange(){
    window.clearInterval(timer);
    btnObj.textContent="启动"
}
//为按钮添加鼠标移入移出事件
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',starChange);





