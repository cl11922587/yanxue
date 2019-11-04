<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="index">首页</van-tabbar-item>
    <van-tabbar-item icon="search"  to="newsList">新闻</van-tabbar-item>
    <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>
<style>
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
    props: ['activeItem'],
    data () {
      return {
        active:parseInt(this.activeItem)
      }
    },
    created(){

    }
  }
</script>
