<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
export default {
  name: 'App',
  mounted(){
    this.getUser();
  },
  methods:{
    ...mapMutations(["INIT_USER_INFO"]),
    getUser(){
      // 清空本地的数据
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
