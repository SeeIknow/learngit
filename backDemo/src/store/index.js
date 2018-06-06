import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);


import {state} from './state'
import getters from './getters'
import mutations from './mutations'

import user from './user'
import order from './order'
import setting from './setting'
import api from './api'
import permission from './permission'//权限

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions:{
    getTradeStatic({state, commit, dispatch, getters, rootGetters}, data){
      const payload = rootGetters['api/payload']
      payload.param = data
      return new Promise((resolve, reject) => {
        payload.callback = res => {
          resolve(res)
          ////console.log(res.data)
          // commit('tradeStatistics',res.data)
        }
        payload.error = err => {
          reject(error)
        }
        dispatch('api/tradeStatistics', payload, {root: true})
      })
    },
    getOrderStatic({state, commit, dispatch, getters, rootGetters}, data){
      const payload = rootGetters['api/payload']
      payload.param = data
      return new Promise((resolve, reject) => {
        payload.callback = res => {
          resolve(res)
          ////console.log(res.data)
          // commit('tradeStatistics',res.data)
        }
        payload.error = err => {
          reject(error)
        }
        dispatch('api/orderStatistics', payload, {root: true})
      })
    }
  },
  modules:{
    api,
    user,
    order,
    setting,
    permission
  }
})
