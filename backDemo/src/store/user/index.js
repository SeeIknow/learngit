import * as getters from './getters'
import mutations from './mutations'
import * as actions from './action'

const state = {
  userList:'',
  doctorDetail:'',
  doctorOffice:'',
  doctorLevel:'',
  medicalAssitant:'',
  server1:'http://172.16.4.10:8080/ccyl'
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
