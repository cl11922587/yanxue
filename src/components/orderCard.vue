<template>
  <div class="order-box" >
    <a :href="'#/orderDetail/'+orderInfo.id">
    <div class="order-no"><div class="pull-left"> 订单号：{{orderInfo.id}}</div> <div class="full-right tr"> 完成时间：{{orderInfo.createTime  | forMat}}</div></div>
    <div  :class="'p-item'" >
      <div class="img-box">
        <img :src="orderInfo.pimg" class="img">
      </div>
      <div class="p-info">
        <h2>{{orderInfo.pname}}</h2>
        <div class="p-desc">*{{orderInfo.num}}</div>
        <div class="p-price"><span class="font12">￥</span>{{orderInfo.total | priceDoubel}}</div>
      </div>
    </div>
    <div>
      <div class="order-status mgb20">
        <span class="c-ff6600 font14 bold">{{orderInfo.state | orderStatus}}</span>
        <van-button  class="pull-right order-button" color="red" size="small " v-show="orderInfo.state==1">立即支付</van-button>
      </div>
    </div>
    </a>

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
    right: 10px ; bottom: 12px;
  }
  .order-no{
    font-size: 12px;
    background: #1989fa;
    padding: 10px;
    text-align: left;
    color:#fff;
  }
  .order-status{
    background: #fff;
    padding: 10px;
    text-align: left;
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
    font-size: 12px;
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
