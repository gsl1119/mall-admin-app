import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/layout/HomeView.vue';
import Login from '../views/layout/Login.vue';
import store from '@/store';
import {getMenuRouter} from '@/utils/permission'
Vue.use(VueRouter);

const asyncRoutes = [
  {
    path:'/product',
    name:'Product',
    meta:{
      title:'商品',
      hidden:false
    },
    component:HomeView,
    children:[
      {
        path:'list',
        name:'ProductList',
        meta:{
          title:'商品列表',
          hidden:false
        },
        component:()=>import('@/views/page/productList.vue')
      },
      {
        path:'add',
        name:'ProductAdd',
        meta:{
          title:'类目管理',
          hidden:false
        },
        component:()=>import('@/views/page/addProduct.vue')
      },
      {
        path:'category',
        name:'Category',
        meta:{
          title:'类目管理',
          hidden:false
        },
        component:()=>import('@/views/page/category.vue')
      },
    ]
  }
]

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页',
      hidden: false,
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: {
          title:'统计',
          hidden:false
        },
        component:()=>import('@/views/page/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      title:'登录',
      hidden:true
    },
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});
let isAddRoutes = false
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if (store.state.user.appkey && store) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRouter(store.state.user.role, asyncRoutes)
        router.addRoutes(menuRoutes)
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes))
        isAddRoutes = true
      }
        
      }
      next()
    } else {
      next('/login')
    }
  }
  return next()
})

export default router;
