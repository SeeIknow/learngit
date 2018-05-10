import * as getters from './getters'
import mutations from './mutations'
import * as actions from './action'

const state = {
  userList:'',
  doctorDetail:'',
  doctorOffice:'',
  doctorLevel:'',
  medicalAssitant:'',
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
