<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <FooterTab v-if="$route.meta.showFooter"></FooterTab>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: 'App',
    mounted() {
      this.getUser();
    },
    methods: {
      ...mapMutations(["INIT_USER_INFO"]),
      getUser() {
        // 获取登录信息
        this.INIT_USER_INFO();
      }
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
