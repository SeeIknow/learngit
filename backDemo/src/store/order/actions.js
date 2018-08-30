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
// 疾病救助列表
export const getOrderListJz = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      ////console.log(res)
      commit(LIST.GET_LIST_JZ,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderJzList', payload, {root: true})
  })
}
// 疾病救助详情
export const getOrderDetailJz = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      ////console.log(res)
      commit(LIST.JZ_DETAIL,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getOrderJzDetail', payload, {root: true})
  })
}
// 疾病救助上传
export const uploadPhoto = ({state, commit, dispatch, getters, rootState},param) =>{
  ////console.log(param);
  axios.post(rootState.server1+`/diseaseHelpController/upload/zhengming?type=${param.type}&id=${param.id}`,param.data,{headers:{
             "Authorization": localStorage.getItem('userToken')
           }}).then((res) =>{
             ////console.log(res);
             return res
           })
}
// 疾病救助列表详情>>添加沟通记录
export const getOrderJz_detailRecord = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/addChatDetail', payload, {root: true})
  })
}
// 疾病救助列表详情>>初审不通过
export const postOrderJz_detailStatus = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/firstCheckUnable', payload, {root: true})
  })
}
// 疾病救助列表详情>>初审通过
export const postOrderJz_detailStatus_r = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/firstCheckAble', payload, {root: true})
  })
}
// 疾病救助列表详情>>复审通过
export const postOrderJz_detailStatus_r_s = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/secondChcekAble', payload, {root: true})
  })
}
// 疾病救助列表详情>>复审通过
export const postOrderJz_detailStatus_s = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/secondChcekUnable', payload, {root: true})
  })
}
// 疾病救助列表详情>>基金会列表
export const getFoundations = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/foundations', payload, {root: true})
  })
}
// 疾病救助列表详情>>医学中心列表
export const getMedicalCenters = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/medicalCenters', payload, {root: true})
  })
}
// 疾病救助列表详情>>医学中心列表
export const postPatientDistribution = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/patientDistribution', payload, {root: true})
  })
}
// 疾病救助列表详情>>待面诊 预约失败
export const postAppointmentDiseaseFail = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/appointmentDiseaseFail', payload, {root: true})
  })
}
// 疾病救助列表详情>>待面诊 添加到院时间
export const postAppointmentDisease = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/appointmentDisease', payload, {root: true})
  })
}
// 疾病救助列表详情>>待面诊 已到院
export const postAlredayComeHospital = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/alredayComeHospital', payload, {root: true})
  })
}
// 疾病救助列表详情>>待面诊 已到院
export const postNotComeHospital = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/notComeHospital', payload, {root: true})
  })
}
// 疾病救助列表详情>>待治疗 已治疗
export const postAlredayTreatment = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/alredayTreatment', payload, {root: true})
  })
}
// 疾病救助列表详情>>待治疗 未治疗
export const postNotTreatment = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/notTreatment', payload, {root: true})
  })
}
// 疾病救助列表详情>>待治疗 未治疗
export const postValidateOperation = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/validateOperation', payload, {root: true})
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
