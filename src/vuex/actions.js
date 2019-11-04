import {USER_INFO} from './types'
import  getDate from '../../src/server/getDate'

export default {
// 1. 同步用户信息
  syncUserInfo({commit}, userInfo) {
    commit(USER_INFO, {userInfo})
  },

  // 2. 自动登录
  async reqUserInfo({commit}){
    // 2.1 从本地获取数据
    let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
    if(userInfo){
      commit(USER_INFO, {userInfo});
    }else {
      // 2.2 从服务器端验证
      let result = await getDate.postLogin({userName:'chenjunliang',pwd:'1234'});
      // console.log(result);
      if(result.response.success){
        commit(USER_INFO, {userInfo: result.data});
      }
    }
  }
}
