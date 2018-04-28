import {LIST} from './mutation-type.js'

export default {
  [LIST.GET_DOCTOR] (state, res) {
    console.log(state);
    state.userList = res;
  },
  [LIST.DOCTORDETAIL] (state,res) {
    state.doctorDetail = res
  },
  [LIST.GET_CHANNEL] (state) {
  },
  [LIST.GET_FOUNT] (state) {
  }
}
