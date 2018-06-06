import axios from 'axios'
import {LIST} from './mutation-type.js'

export const getOrderList = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
      commit(LIST.GET_LIST,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderList', payload, {root: true})
  })
}
// 图文咨询 》》编辑》》详情页
export const getOrderListDetial = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
      commit(LIST.GET_LISTITEM,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderListDetial', payload, {root: true})
  })
}

// 图文咨询 》》编辑》》详情页>>疾病类型
export const getOrderDiseaseType = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
      commit(LIST.GET_DISEASELIST,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderDiseaseType', payload, {root: true})
  })
}

// 图文咨询 》》编辑》》详情页>>二级科室
export const getOrderDepartment = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
      commit(LIST.GET_DEPARTMRNT_T,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderDepartment', payload, {root: true})
  })
}
// 图文咨询 》》编辑》》详情页>>疾病分型（三级科室）
export const getOrderDepartmentThree = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
      commit(LIST.GET_LIST_DEP_THREE,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderDepartmentThree', payload, {root: true})
  })
}

// 图文咨询 》》编辑》》详情页>>分配医生
export const getOrderDoctor = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
      commit(LIST.GET_ORDER_DOCTOR,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderDoctor', payload, {root: true})
  })
}

// 图文咨询 》》编辑》》详情页>>提交审核
export const getOrderSuccess = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
      // commit(LIST.GET_ORDER_DOCTOR,res.data)
      // 提交审核 返回列表页
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderSuccess', payload, {root: true})
  })
}
// 图文咨询 》》编辑》》详情页>>提交审核
export const getOrderReply = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
       // commit(LIST.GET_ORDER_DOCTOR,res.data)
      // 提交回复 返回列表页
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderReply', payload, {root: true})
  })
}

// 预约列表
export const getOrderListYY = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      ////console.log(res)
      commit(LIST.GET_LIST_YY,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderList_yy', payload, {root: true})
  })
}
// 预约列表详情
export const getOrderYy_detail = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      ////console.log(res)
      commit(LIST.GET_LIST_YY_DETAIL,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderYy_detail', payload, {root: true})
  })
}
// 预约列表详情>>添加沟通记录
export const getOrderYy_detailRecord = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderYy_detailRecord', payload, {root: true})
  })
}
// 预约列表详情>>出诊地点
export const getOrderYy_address = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      commit(LIST.GET_LIST_YY_ADRESS,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderYy_address', payload, {root: true})
  })
}
// 预约列表详情>>预约审核
export const getOrderYy_check = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderYy_check', payload, {root: true})
  })
}
// 预约列表详情>>就诊审核
export const getOrderYy_check_j = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderYy_check_j', payload, {root: true})
  })
}

// 预约列表详情>>就诊确认
export const getOrderYy_check_j_s = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderYy_check_j_s', payload, {root: true})
  })
}
