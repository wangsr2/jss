localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量
// 商品类
class porduct{
    constructor(id,title,imgSrc,price){
        this .id=id;
        this .title=title;
        this.imgSrc=imgSrc;
        this.price=price;
    }
}
// var p=new porduct("011","兔子","22.jpg","55.22");

// 订单类
class Order{
    constructor(porduct,qty,selectStatus){
        this.id=porduct.id;
        this.title=porduct.title;
        this.imgSrc=porduct.imgSrc;
        this.price=porduct.price;
        this.qty=qty;
        this.selectStatus=selectStatus;
    }
}
// ------------------------------------------------------
// 购物车数据类，用来记录购物车数据
class CartData{
    constructor(){
        this.orderList=new Array();
        this.totalQty=0;
        this.totalAmoount=0;
        this.units=0;
    }
}
// 购物车操作类
class ShoppingCart{
     // 将购物车数据写入本都存储
     setDataToLocalSatorge(CartData){
         var CartDataString=JSON.stringify(CartData);
         localStorage.setItem('RNG',CartDataString);

    }
    //从本地存储中获取购物车数据
    getDataFromLocalStorage(){
        return localStorage.getItem('RNG');
    }
   
    // 获取选中对象的订单列表
    getSelectedList(){

    }
    //获取选中对象的列表总数量
    getSelectedQty(){

    }
    //获取选中对象的列表的总价格
    
    

}