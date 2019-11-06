<template>
  <div  >
    <a class=""  v-for="item in guoneiDatas" class="news-item mgb20" :href="'#/news/'+item.id">
      <div class="img-box ">
        <img :src="item.img" class="img" :alt="item.name">
      </div>
      <div class="news-info">
        <h2 class="">{{item.name}}</h2>
        <div class="font14"><span class="pull-right">{{item.creatTime | forMat}}</span>阅读（{{item.read}}） </div>
      </div>
    </a>
  </div>
</template>
<style scoped>
  a{color:#333; text-decoration: none; text-align: left}
  .news-item{
    border-bottom:1px solid #ccc;
    background: #fff;
    padding: 0px 0px 10px 0px;
    overflow: hidden;
    zoom:1;
    clear: both;
    display: block;
    position: relative;
  }
  .img-box{
    width:100%;
    height: auto;
    overflow: hidden;
  }
  .img-box .img{
    width: 100%;
    height: auto;
  }
  .news-info{
    padding: 0 10px;
  }
  .news-info h2{
     font-size: 14px;
    margin: 0 0 5px 0;
     line-height: 20px;
    max-height: 40px;
    width: 100%;
    overflow: hidden;
    padding-bottom: 5px;
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
import "swiper/dist/css/swiper.css";
import {swiper,swiperSlide } from "vue-awesome-swiper";
  export default {
    name: 'newsCard',
    props:['guoneiData','pone'],
    data () {
      return {
        guoneiDatas:this.guoneiData,
      }
    },
    methods:{
      callback:function () {

      }
    }
  }
</script>
