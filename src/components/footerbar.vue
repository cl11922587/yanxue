<template>
  <div>
  <div class="footer-nav" v-if="!submitorder">
    <a class="item-first item" href="tel:1324907896" >
      <i class="ico"></i>
      客服
    </a>
    <a class="item bc-ff6600 font14"  :href="'#/order/'+pid">
      <i class="ico"></i>
      预约报名
    </a>
  </div>
  <div class="footer-nav" v-if="submitorder">
    <a class="item-first item">
      合计价格：<span class="c-ff6600" ><span class="font12">￥</span><span class="bold">{{allprice | priceDoubel}}</span></span>
    </a>
    <a class="item bc-ff6600 font14"  :href="'#/order/'+pid">
      <i class="ico"></i>
      提交订单
    </a>
  </div>
  </div>
</template>
<style>
  body{
    padding-bottom: 40px;
  }
  .footer-nav{
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 0;
    border-top:1px solid #ccc;
    height: 40px;
    width: 100%;
    display:flex;
    display:-webkit-flex;
    flex-direction:row;
    background: #fff;
    font-size: 14px;

  }

  .footer-nav .item{
    flex-grow: 1;
    cursor: pointer;
     line-height: 40px;
  }
  .footer-nav .item-first{
      flex-grow: 2;
      cursor: pointer;
      border-right:1px solid #ccc;
    }
  .footer-nav .actives{
    color:#ff6600;
  }
</style>
<script>

  export default {
    name: 'FooterBar',
    props: ['pid','submitorder','allprice'],
    mounted(){
      
    },
    data () {
      return {
     //   activeItem:this.props.active-item
      }
    }
  }
</script>
