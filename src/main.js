// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './components/global';
// import MuseUI from 'muse-ui';
// import Message from 'muse-ui-message';
// import 'muse-ui-message/dist/muse-ui-message.css';
// import Toast from 'muse-ui-toast';
// import 'muse-ui/dist/muse-ui.css';
// import  Loading from 'muse-ui-loading';
// import 'muse-ui-loading/dist/muse-ui-loading.css'
import filters from './filter/filter.js'
import '@/assets/css/main.css'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import directives from './directives/index.js';

import Vuex from 'vuex'
import store from './vuex/store'
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
// Vue.use(MuseUI);
// Vue.use(Loading);
// Vue.use(Toast);
// Vue.use(Message);
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
