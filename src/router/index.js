import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'

//todo 需优化
var product = () => import('@/pages/product/product');
var newsList = () => import('@/pages/news/newsList');
var order = () => import('@/pages/product/order');
var news = () => import('@/pages/news/news');
var person = () => import('@/pages/person/person');
var orderList = () => import('@/pages/person/orderList');
var orderDetail = () => import('@/pages/person/orderDetail');

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
      name: 'Index',
      component: Index,
      meta: { title: "研学首页" },
      beforeEnter:function(to,from,next){
          console.log(444);
          next();
      },
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
      meta: { title: "研学首页" },
      beforeEnter:function(to,from,next){
        next();
      },
      beforeRouteEnter:function(to,from,next){
        next();
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: product ,
      meta: { title: "研学产品详情" },
    },{
      path: '/order/:id',
      name: 'order',
      component: order,
       meta: { title: "研学提交订单" },
    },{
      path: '/newsList',
      name: 'newsList',
      component: newsList,
      meta: { title: "研学新闻列表" },
    },
    {
      path: '/news/:id',
      name: 'news',
      component: news,
      meta: { title: "研学新闻详情" },
    },{
      path: '/person',
      name: 'person',
      component: person,
      meta: { title: "研学个人中心" },
    },{
      path: '/orderList',
      name: 'orderList',
      component: orderList,
      meta: { title: "研学订单列表" },
    },{
      path: '/orderDetail/:id',
      name: 'orderDetail',
      component: orderDetail,
      meta: { title: "研学订单详情" },
    }
  ]
})

//全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }

  next()
})

//全局守卫
// router.beforeRouteUpdate((to, from, next) => {
//   console.log(a);
//   next()
// })


//全局解析守卫
router.beforeResolve((to,from,next)=>{

  next()

})

//全局后制钩子
router.afterEach((to,from)=>{

})




export default router;
