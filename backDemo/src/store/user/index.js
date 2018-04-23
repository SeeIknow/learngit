import * as getters from './getters'
import mutations from './mutations'
import { actions }from './action'

const state = {
  role: [],
  members:''
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
