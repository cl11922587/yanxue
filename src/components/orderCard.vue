<template>
  <div class="order-box" >
    <a :href="'#/orderDetail/'+orderInfo.orderNo">
    <div class="order-no"><div class="pull-left"> 订单号：{{orderInfo.orderNo}}</div> <div class="full-right tr"> 完成时间：{{orderInfo.orderCreatTime}}</div></div>
    <div  :class="'p-item'" >
      <div class="img-box">
        <img :src="orderInfo.pimg" class="img">
      </div>
      <div class="p-info">
        <h2>{{orderInfo.pname}}</h2>
        <div class="p-desc">X{{orderInfo.num}}</div>
        <div class="p-price"><span class="font12">￥</span>{{orderInfo.price | priceDoubel}}</div>
      </div>
    </div>
    <div>
      <div class="order-status mgb20"><span class="c-ff6600 font14 bold">{{orderInfo.status | orderStatus}}</span>
      </div>
    </div>
    </a>
    <mu-button  class="pull-right order-button" color="primary" v-show="orderInfo.status==1">立即支付</mu-button>
  </div>
</template>
<style scoped>
  a{color:#333; text-decoration: none; text-align: left}
  .order-box{
    position: relative;
    display: block;
  }
  .order-button{
    position: absolute;
    right: 10px ; bottom: 10px;
  }
  .order-no{
    background: #fff;
    padding: 10px;
    text-align: left;
  }
  .order-status{
    background: #fff;
    padding: 10px;
    text-align: left;
    height: 56px;
    line-height: 36px;
  }
  .p-item{
    background: #fff;
    border-bottom: 1px solid #ccc;
    padding: 10px 10px 10px 170px;
    overflow: hidden;
    zoom:1;
    clear: both;
    display: block;
    position: relative;
  }
  .img-box{
    width:150px;
    height: 100%;
    position: absolute;
    left: 10px;
    top:10px;
    overflow: hidden;
  }
  .img-box .img{
    width: 100%;
    height: auto;
  }
  .p-info{
    width:100%;
    min-height:105px;
  }
  .p-info h2{
    font-size: 14px;
    margin: 0 0 5px 0;
    line-height: 20px;
    min-height: 40px;
    width: 100%;
    overflow: hidden;
    height: 40px;
  }
  .p-price{
    position: absolute;
    bottom: 10px;
    right:10px;
    color:#ff0000;
    font-size: 18px;
  }
  .p-desc{

  }
  .p-desc .em{
    font-size: 12px;
    background: #ff6600;
    color:#fff;
    text-align: center;
    padding: 2px 5px;
    display: inline-block;
    margin: 0 3px;
    border-radius: 3px;
  }
</style>
<script>

  export default {
    name: 'orderCard',
    props:['orderInfo'],
    data () {
      return {
     //   orderInfo:this.orderInfo,
      }
    },
    methods:{
      callback:function () {

      }
    }
  }
</script>
