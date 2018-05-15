import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const state = {
  payload: {
    param: {},
    status: 200,
    callback: () => {},
    error: (res) => {}
  },
  server: {
    server1: 'http://172.16.4.10:8080/ccyl'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
