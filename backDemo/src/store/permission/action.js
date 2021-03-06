import axios from 'axios'
import {LIST} from './mutation-type.js'

export const getUserPermission = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // 本地存储菜单权限
      localStorage.setItem('permission',JSON.stringify(res.data))
      // ////console.log(res)
      // commit(LIST.ADD_MENU,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getUserPermission', payload, {root: true})
  })
}
