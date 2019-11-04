// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './components/global';
import filters from './filter/filter.js'
import '@/assets/css/main.css'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import directives from './directives/index.js';
import Vuex from 'vuex'
import store from './vuex/index'
Vue.config.productionTip = false;
//全局注册所有过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

//全局指令注册
Object.keys(directives).forEach((k)=>{
  Vue.directive(k, directives[k])
});
Vue.use(Vuex);
Vue.use(Vant);
Vue.use(Lazyload)//引入图片懒加载
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
