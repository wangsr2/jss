localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量
// 商品类
class product{
    constructor(id,title,imgSrc,price){
        this .id=id;
        this .title=title;
        this.imgSrc=imgSrc;
        this.price=price;
    }
}

// 订单类
class Order{
    constructor(product,qty,selectStatus){
        this.id=product.id;
        this.title=product.title;
        this.imgSrc=product.imgSrc;
        this.price=product.price;
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
        let RNG = localStorage.getItem('RNG');
        // 判断购物车是否为空
        if (RNG == null || RNG == '') {
            return new CartData();
        }
        else {
            return JSON.parse(RNG);
        }	
    }
    // 加入购物车
    addToCart(order) {
        // 从本地存储中获取购物车的数据
        let cartData = this.getDataFromLocalStorage();
        // 获取购物车json数据中的订单列表            
        let orderList = cartData.orderList;
        //设置标志位判断是否为购物车新商品，默认为是新商品
        let isNewProduct = true;
        // 遍历订单列表，判断新加入商品是否在购物车中
      
        for (let i in orderList) {
            if (order.id == orderList[i].id) {
                // 若新加入订单商品已经在购物车中，则变更订单列表中对应商品数量，且变更新商品标志位
                orderList[i].qty += order.qty;
                isNewProduct = false;
                break;
            }
        }
        //如果是新商品
        if (isNewProduct) {
            // 购物车总样本+1
            cartData.units++;
            // 导入新商品置入购物车
            orderList.push(order);
        }
        //修改购物车总金额及商品总数量
        cartData.totalAmount += order.qty * order.price;
        cartData.totalQty += order.qty;

        // 写入localStorage
        this.setDataToLocalSatorge(cartData);
    }
    // 清空购物车 

    // 获取选中对象的订单列表
    getSelectedList(){

    }
    //获取选中对象的列表总数量
    getSelectedQty(){
        let cartData=this.getDataFromLocalStorage();
        let orderList=cartData.orderList;
        let getSelectedQty=0;

        for(let i in orderList){
            if(orderList[i].selectStatus){
                getSelectedQty+=order[i].qty;
            }
        }
        return getSelectedQty;

    }
    //获取选中对象的列表的总价格
    
    
}

