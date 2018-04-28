import axios from 'axios'
import {LIST} from './mutation-type.js'

export const getUserList = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // console.log(res)
      commit(LIST.GET_DOCTOR,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getUserList', payload, {root: true})
  })
}
/**
 * 医生管理 添加 编辑
 */

 export const doctorEdit = ({state, commit, dispatch, getters, rootGetters}, data) => {
   const payload = rootGetters['api/payload']
   payload.param = data
   return new Promise((resolve, reject) => {
     payload.callback = res => {
       resolve(res)
       // console.log(res)
       commit(LIST.GET_DOCTOR,res.data)
     }
     payload.error = err => {
       reject(error)
     }
     dispatch('api/getUserList', payload, {root: true})
   })
 }

 /**
  * 医生管理 医生详情
  */

  export const doctorDetail= ({state, commit, dispatch, getters, rootGetters}, data) => {
    const payload = rootGetters['api/payload']
    payload.param = data
    return new Promise((resolve, reject) => {
      payload.callback = res => {
        resolve(res)
        // console.log(res)
        commit(LIST.DOCTORDETAIL,res.data)
      }
      payload.error = err => {
        reject(error)
      }
      dispatch('api/doctorDetail', payload, {root: true})
    })
  }
