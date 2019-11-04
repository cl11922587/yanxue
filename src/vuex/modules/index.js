//引入一个常量，保证 action 和 mutations 的统一。
import * as types from '../types'
/**
 * App通用配置
 */
const state = {
  //vuex初始化值
  count : 0
}
const actions = {
  increment({ commit }, n){
    commit(types.TEST_INCREMENT, n)
  },
  decrement({ commit }, state){
    commit(types.TEST_DEREMENT, state)
  }
}
const getters = {
  count: state => state.count
}
const mutations = {
  [types.TEST_INCREMENT](state, n) {
    state.count = state.count + 5
  },
  [types.TEST_DEREMENT](state, status) {
    state.count = state.count - 3
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
