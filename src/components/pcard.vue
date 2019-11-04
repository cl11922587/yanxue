<template>
  <div  >
    <a  class="p-item" :href="'#/product/'+item.id" :key="item.id">
      <div class="img-box">
        <img :src="item.img" class="img"  v-lazy="item.img">
      </div>
      <div class="p-info">
        <h2>{{item.name}}</h2>
        <div class="p-desc"><span class="em" v-for="(pds,key) in JSON.parse(item.desc||'{}')">{{pds}}</span></div>
        <div class="p-price"><span class="font12">￥</span>{{item.price | priceDoubel}}</div>
      </div>
    </a>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import {swiper,swiperSlide } from "vue-awesome-swiper";
  export default {
    name: 'pcard',
    props:['guoneiData'],
    mounted(){

    },
    data () {
      return {
        item:this.guoneiData
      }
    },
    methods:{
      callback:function () {

      }
    }
  }
</script>
<style scoped>
  a{color:#333; text-decoration: none; text-align: left}
  .p-item{
    margin: 10px;
    border:1px solid #ccc;
    background: #fff;
    padding: 10px 10px 10px 170px;
    overflow: hidden;
    zoom:1;
    clear: both;
    display: block;
    position: relative;
  }
  .p-item-one{
    border-bottom:1px solid #ccc;
    background: #fff;
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
