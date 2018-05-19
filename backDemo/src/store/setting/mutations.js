import {LIST} from './mutation-type.js'

export default {
  [LIST.USERLIST] (state, res) {
    //console.log(state);
    state.userList = res;
  },
  [LIST.BMLIST] (state, res) {
    //console.log(state);
    state.bmList = res;
  },
  [LIST.ROLELIST] (state, res) {
    //console.log(state);
    state.roleList = res;
  },
  [LIST.ROLETABLE] (state, res) {
    //console.log(state);
    state.roleTable = res;
  },
  [LIST.DEPLIST] (state, res) {
    //console.log(state);
    state.depList = res;
  },
  [LIST.DEPMANLIST] (state, res) {
    //console.log(state);
    state.depManList = res;
  },
  [LIST.LIMITSLISTBYLOGIN] (state, res) {
    //console.log(state);
    state.limitsListByLogin = res;
  },
  [LIST.LIMITSLISTBYSELECT] (state, res) {
    //console.log(state);
    state.limitsListBySeletc = res;
  },
}
