import {LIST} from './mutation-type.js'

export default {
  // 列表
  [LIST.GET_LIST] (state, res) {
    console.log(state);
    state.list = res;
  },
  // 列表详情
  [LIST.GET_LISTITEM] (state, res) {
    console.log(state);
    state.listItem = res;
  },
}
