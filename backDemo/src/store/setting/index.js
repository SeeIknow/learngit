import * as getters from './getters'
import mutations from './mutations'
import * as actions from './action'

const state = {
  userList:'',
  bmList:'',
  roleList:'',
  roleTable:'',
  depList:'',
  depManList:'',
  limitsListByLogin:'',
  limitsListBySeletc:'',
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
