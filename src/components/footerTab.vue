<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="index">首页</van-tabbar-item>
    <van-tabbar-item icon="comment-o"  to="newsList" >新闻</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="person">个人中心</van-tabbar-item>
  </van-tabbar>
</template>
<style scoped>
  body{
    padding-bottom: 4rem;
  }
  .footer-nav .item{
    flex-grow: 1;
    cursor: pointer;
  }
  .footer-nav .actives{
    color:#ff6600;
  }
</style>
<script>

  export default {
    name: 'FooterTab',
    data () {
      return {
        active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0,
        goodsNum:10
      }
    },
    watch: {
    active(value){
      // console.log(value);
      let tabBarActiveIndex = value > 0 ? value : 0;
      // 缓存到本地
      sessionStorage.setItem('tabBarActiveIndex', value);
    }
  },
    created(){

    }
  }
</script>
