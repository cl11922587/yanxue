import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'

//todo 需优化
const product = () => import('@/pages/product/product');
const newsList = () => import('@/pages/news/newsList');
const order = () => import('@/pages/product/order');
const news = () => import('@/pages/news/news');
const person = () => import('@/pages/person/person');
const orderList = () => import('@/pages/person/orderList');
const orderDetail = () => import('@/pages/person/orderDetail');
const login = () => import('@/components/login');
Vue.use(Router);



// const routerList =[];
// function importAll(r){
//   // r.keys.forEach(
//   //   (key)=>routerList.push(r(key).default)
//   // )
// }
// importAll(require.context('./pages/',true,'/\.vue/'));
// //console.log(require.context('./pages',true,''));

//todo 需优化
const router= new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Index'
      },
      meta: { title: "研学首页" ,  keepAlive: true,showFooter:true},
      // beforeEnter:function(to,from,next){
      //     console.log(444);
      //
      // },
      // children:[
      //   {
      //     path:'newsList',
      //     component:newsList
      //   }
      // ]
    },{
      path: '/index',
      name: 'Index',
      component: Index,
      meta: { title: "研学首页",  keepAlive: true,showFooter:true },
      // beforeEnter:function(to,from,next){
      //   next();
      // },
      // beforeRouteEnter:function(to,from,next){
      //   next();
      // }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: product ,
      meta: { title: "研学产品详情",  keepAlive: false ,showFooter:false },
    },{
      path: '/order/:id',
      name: 'order',
      component: order,
       meta: { title: "研学提交订单",  keepAlive: false,showFooter:false },
    },{
      path: '/newsList',
      name: 'newsList',
      component: newsList,
      meta: { title: "研学新闻列表" ,  keepAlive: true,showFooter:true},
    },
    {
      path: '/news/:id',
      name: 'news',
      component: news,
      meta: { title: "研学新闻详情",  keepAlive: false,showFooter:false},
    },{
      path: '/person',
      name: 'person',
      component: person,
      meta: { title: "研学个人中心",  keepAlive: false ,showFooter:true},
    },{
      path: '/orderList',
      name: 'orderList',
      component: orderList,
      meta: { title: "研学订单列表" ,  keepAlive: false,showFooter:false },
    },{
      path: '/orderDetail/:id',
      name: 'orderDetail',
      component: orderDetail,
      meta: { title: "研学订单详情" ,  keepAlive: false,showFooter:false},
    }
    ,{
      path: '/login',
      name: 'login',
      component: login,
      meta: { title: "登录" ,  keepAlive: false,showFooter:false},
    }
  ]
});

//全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next()
});

//全局守卫
// router.beforeRouteUpdate((to, from, next) => {
//   console.log(a);
//   next()
// })


//全局解析守卫
router.beforeResolve((to,from,next)=>{

  next()

});

//全局后制钩子
router.afterEach((to,from)=>{

});




export default router;
