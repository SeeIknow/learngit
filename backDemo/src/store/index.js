import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);


import {state} from './state'
import getters from './getters'
import mutations from './mutations'

import user from './user'
import order from './order'

export default new vuex.Store({
  state,
  getters,
  mutations,
  modules:{
    user,
    order
  }
})