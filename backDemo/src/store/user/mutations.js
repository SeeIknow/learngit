import {LIST} from './mutation-type.js'

export default {
  [LIST.GET_MEMEBER] (state, res) {
    console.log(state);
    state.members = res;
  },
  [LIST.GET_DOCTOR] (state) {
  },
  [LIST.GET_CENTER] (state) {
  },
  [LIST.GET_CHANNEL] (state) {
  },
  [LIST.GET_FOUNT] (state) {
  }
}
