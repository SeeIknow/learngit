import {LIST} from './mutation-type.js'

export default {
  [LIST.GET_DOCTOR] (state, res) {
    console.log(state);
    state.userList = res;
  },
  [LIST.DOCTORDETAIL] (state,res) {
    state.doctorDetail = res
  },
  [LIST.DOCTORLEVEL] (state,res) {
    state.doctorLevel = res
  },
  [LIST.DOCTOROFFICE] (state,res) {
    state.doctorOffice = res
  },
  [LIST.MEDICALASSITANT] (state,res) {
    state.medicalAssitant = res
  },
  [LIST.GET_CHANNEL] (state) {
  },
  [LIST.GET_FOUNT] (state) {
  }
}
