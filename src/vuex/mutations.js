import  {USER_INFO ,
  INIT_USER_INFO,
  RESET_USER_INFO} from './types'

import {getStore, removeStore, setStore} from './../assets/js/commonjs/main'
export default {
  // 1. 保存用户信息到本地
  [USER_INFO](state, {userInfo}){
    state.userInfo = userInfo.results;
    setStore('userInfo', state.userInfo);
  },

  // 1. 获取用户信息
  [INIT_USER_INFO](state){
    // 2.1 获取用户信息
    let userInfo = getStore('userInfo');
    // 2.2 判断
    if(userInfo){
      state.userInfo = JSON.parse(userInfo);
    }
  },

  // 1. 退出登录
  [RESET_USER_INFO](state){
    state.userInfo = {};
    removeStore('userInfo');
  }

}
