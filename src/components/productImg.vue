<template>
  <div class="bc-fff">
    <swiper :options="swiperOption" ref ="mySwiper" @someSwiperEvent="callback" v-if="imgdata">
      <swiper-slide v-for="(item,index) in imgdatas" :key="index" >
        <img :src="item" alt="" />
      </swiper-slide>
      <!-- 常见的小圆点 -->
        <div class="swiper-pagination"  v-for="(item,index) in imgdatas" :key="index" slot="pagination" ></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import {swiper,swiperSlide } from "vue-awesome-swiper";
  export default {
    name: 'productImg',
    props:['imgdata'],
    components:{
      swiper,
      swiperSlide
    },
    created(){
    },
    watch: {
      imgdata(val) {
        this.imgdatas = JSON.parse(val);
      }
    },
  data () {
      return {
       imgdatas:[],
        swiperOption:{
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          //循环
          loop: true,
          //设定初始化时slide的索引
          initialSlide: 0,
          //自动播放
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            /* 触摸滑动后是否继续轮播 */
            disableOnInteraction: false
          },
          //滑动速度
          speed: 1500,
          //滑动方向
          direction: "horizontal",
          //小手掌抓取滑动
          grabCursor: true,
          on: {
            //滑动之后回调函数
            slideChangeTransitionStart: function() {

            },
          },
          //分页器设置
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
          //  bulletClass:'bullet-class',
          //  bulletActiveClass:'bullet-class-active'
          }
        }
      }
    },
    methods:{
      callback(){

      }
    }
  }
</script>
<style scoped>
  .swiper-slide{
    width: auto;
  }
  .swiper-slide img{
    width: 100%;
    height: auto;
  }
  .swiper-pagination{

  }
  .swiper-pagination-bullet{
    background: #fff;
  }
  .swiper-pagination-bullet-active{
    background: #333;
  }
</style>
