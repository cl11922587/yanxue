import Vue from 'vue'
import Vuex from 'vuex'
//引入不同模块需要的共享变量：
import index from './modules/index'
//使用vuex
Vue.use(Vuex)
//对外暴露
export default new Vuex.Store({
  modules: {
    index
  }
})
