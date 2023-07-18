import Vue from 'vue';
import Vuex from 'vuex';
import {setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态
    collapsed: false,

    // 用户信息
    user:getUserCookie(),

    // 存储菜单的路由
    menuRoutes:[]
  },
  getters: {
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },

    // 设置用户信息
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout(state){
      state.user= {
        username:'',
        appkey:'',
        role:'',
        emailL:''
      }
    },
    changeMenuRoutes(state, routes){
      state.menuRoutes = routes
    }
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({commit}, userInfo){
      commit('setUserInfo', userInfo); 
      setCookie(userInfo);
    },
    logout({commit}){
      commit('logout');
      removeUserCookie()
    },
    changeMenuRoutes({commit}, routes){
      commit('changeMenuRoutes', routes)
    }
  },
  modules: {
  },
});
