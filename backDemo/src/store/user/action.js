import axios from 'axios'
import {LIST} from './mutation-type.js'

export const getUserList = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
      commit(LIST.GET_DOCTOR,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/getUserList', payload, {root: true})
  })
}
export const postRecommendDoctor = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // ////console.log(res)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/recommendDoctor', payload, {root: true})
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
       // ////console.log(res)
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

  export const doctorDetail1= ({state, commit, dispatch, getters, rootGetters}, data) => {
    const payload = rootGetters['api/payload']
    payload.param = data
    return new Promise((resolve, reject) => {
      payload.callback = res => {
        resolve(res)
         // ////console.log(res)
        commit(LIST.DOCTORDETAIL,res.data)
      }
      payload.error = err => {
        reject(error)
      }
      dispatch('api/doctorDetail', payload, {root: true})
    })
  }

  /**
   * 医生管理 医生详情 医生级别
   */

   export const getDoctorLevel= ({state, commit, dispatch, getters, rootGetters}, data) => {
     const payload = rootGetters['api/payload']
     payload.param = data
     return new Promise((resolve, reject) => {
       payload.callback = res => {
         resolve(res)
           ////console.log(res)
         commit(LIST.DOCTORLEVEL,res.data)
       }
       payload.error = err => {
         reject(error)
       }
       dispatch('api/doctorLevel', payload, {root: true})
     })
   }
   /**
    * 医生管理 医生详情 医生职称
    */

    export const getDoctorOffice= ({state, commit, dispatch, getters, rootGetters}, data) => {
      const payload = rootGetters['api/payload']
      payload.param = data
      return new Promise((resolve, reject) => {
        payload.callback = res => {
          resolve(res)
            ////console.log(res)
          commit(LIST.DOCTOROFFICE,res.data)
        }
        payload.error = err => {
          reject(error)
        }
        dispatch('api/doctorOffice', payload, {root: true})
      })
    }

  /**
   * 医生管理 医生详情 提交
   */

export const setDoctorInfo= ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/doctorSave', payload, {root: true})
 })
}
/**
 * 医生管理 医生详情 出诊医院管理
 */

export const setHospitalMange= ({state, commit, dispatch, getters, rootGetters}, data) => {
const payload = rootGetters['api/payload']
payload.param = data
return new Promise((resolve, reject) => {
 payload.callback = res => {
   resolve(res)
 }
 payload.error = err => {
   reject(error)
 }
 dispatch('api/hospitalManage', payload, {root: true})
})
}
/**
 * 医生管理 医生详情 医学助理
 */

export const getMedicalAssitant= ({state, commit, dispatch, getters, rootGetters}, data) => {
const payload = rootGetters['api/payload']
payload.param = data
return new Promise((resolve, reject) => {
 payload.callback = res => {
   resolve(res)
   commit(LIST.MEDICALASSITANT,res.data)
 }
 payload.error = err => {
   reject(error)
 }
 dispatch('api/medicalAssitant', payload, {root: true})
})
}

/**
 * 医生管理 医生详情 医院下拉列表
 */

export const getHospitalList= ({state, commit, dispatch, getters, rootGetters}, data) => {
const payload = rootGetters['api/payload']
payload.param = data
return new Promise((resolve, reject) => {
 payload.callback = res => {
   resolve(res)
 }
 payload.error = err => {
   reject(error)
 }
 dispatch('api/hospitalList', payload, {root: true})
})
}
/**
 * 医生管理 医生详情 医院添加
 */

export const setHospitalAdd= ({state, commit, dispatch, getters, rootGetters}, data) => {
const payload = rootGetters['api/payload']
payload.param = data
return new Promise((resolve, reject) => {
 payload.callback = res => {
   resolve(res)
 }
 payload.error = err => {
   reject(error)
 }
 dispatch('api/addHospital', payload, {root: true})
})
}
/**
 * 医生管理 医生详情 医院信息获取
 */

export const getHospitalDetails= ({state, commit, dispatch, getters, rootGetters}, data) => {
const payload = rootGetters['api/payload']
payload.param = data
return new Promise((resolve, reject) => {
 payload.callback = res => {
   resolve(res)
 }
 payload.error = err => {
   reject(error)
 }
 dispatch('api/hospitalDetails', payload, {root: true})
})
}
/**
 * 医生管理 医生详情 服务管理
 */

export const setServiceMange= ({state, commit, dispatch, getters, rootGetters}, data) => {
const payload = rootGetters['api/payload']
payload.param = data
return new Promise((resolve, reject) => {
 payload.callback = res => {
   resolve(res)
 }
 payload.error = err => {
   reject(error)
 }
 dispatch('api/serviceMange', payload, {root: true})
})
}
/**
 * 医生管理 医生详情 医院删除
 */

export const deleteHos= ({state, commit, dispatch, getters, rootGetters}, data) => {
const payload = rootGetters['api/payload']
payload.param = data
return new Promise((resolve, reject) => {
 payload.callback = res => {
   resolve(res)
 }
 payload.error = err => {
   reject(error)
 }
 dispatch('api/deleteHospital', payload, {root: true})
})
}

/**
 * 首页 账户设置  修改密码
 */

export const setPassswrod= ({state, commit, dispatch, getters, rootGetters}, data) => {
const payload = rootGetters['api/payload']
payload.param = data
return new Promise((resolve, reject) => {
 payload.callback = res => {
   resolve(res)
 }
 payload.error = err => {
   reject(error)
 }
 dispatch('api/changePass', payload, {root: true})
})
}
 /**
 * 用户管理》》医生管理>>医生详情> 上传头像
 */
 export const uploadPhoto = ({state, commit, dispatch, getters, rootGetters},param) =>{
   ////console.log(param);
   axios.post(state.server1+`/doctor/upload/doctorHeader?doctorId=${param.id}`,param.data,{headers:{
              "Authorization": localStorage.getItem('userToken')
            }}).then((res) =>{
              ////console.log(res);

              localStorage.setItem('userPhoto',res.data)
              return res
            })
 }
 /**
 * 首页》》账户设置> 上传头像
 */
 export const uploadUserPhoto = ({state, commit, dispatch, getters, rootGetters,rootState},param) =>{
   ////console.log(param);
   axios.post(state.server1+`/userinfo/uploadPhoto`,param.data,{headers:{
              "Authorization": localStorage.getItem('userToken')
            }}).then((res) =>{
              ////console.log(res);
              localStorage.setItem('adminPhoto',res.data)
              state.imgUrl = res.data
              return res
            })
 }
 /**
  * 用户设置》》医生模板下载
  */

 export const doctorExcelDown= ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
  payload.callback = res => {
    resolve(res)
  }
  payload.error = err => {
    reject(error)
  }
  dispatch('api/doctorExcelDown', payload, {root: true})
 })
 }
 /**
 * 用户设置》》医生模板导入
 */
 export const doctorExcelUp = ({state, commit, dispatch, getters, rootGetters,rootState},param) =>{
   ////console.log(param);
   axios.post(state.server1+`/doctor/excel/executeImport`,param.data,{headers:{
              "Authorization": localStorage.getItem('userToken')
            }}).then((res) =>{
              ////console.log(res);
              return res
            })
 }

 /**
  * 用户设置》》医生模板下载
  */

 export const postPlaceMangeList= ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
  payload.callback = res => {
    resolve(res)
  }
  payload.error = err => {
    reject(error)
  }
  dispatch('api/postPlaceMangeList', payload, {root: true})
 })
 }

 /**
  * 用户设置》》渠道管理 省
  */

 export const postProvinces= ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
  payload.callback = res => {
    resolve(res)
  }
  payload.error = err => {
    reject(error)
  }
  dispatch('api/postProvinces', payload, {root: true})
 })
 }
 /**
  * 用户设置》》渠道管理 市
  */

 export const postCitys= ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
  payload.callback = res => {
    resolve(res)
  }
  payload.error = err => {
    reject(error)
  }
  dispatch('api/postCitys', payload, {root: true})
 })
 }
 /**
  * 用户设置》》渠道管理 区
  */

 export const postDistricts= ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
  payload.callback = res => {
    resolve(res)
  }
  payload.error = err => {
    reject(error)
  }
  dispatch('api/postDistricts', payload, {root: true})
 })
 }

 /**
  * 用户设置》》渠道管理 >>详情
  */

 export const getChannelDetail= ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
  payload.callback = res => {
    resolve(res)
  }
  payload.error = err => {
    reject(error)
  }
  dispatch('api/getChannelDetail', payload, {root: true})
 })
 }

 /**
  * 用户设置》》渠道管理 >>详情>>编辑提交
  */

 export const postEditchannel= ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
  payload.callback = res => {
    resolve(res)
  }
  payload.error = err => {
    reject(error)
  }
  dispatch('api/postEditchannel', payload, {root: true})
 })
 }

 /**
  * 用户设置》》渠道管理 >>详情>>编辑提交
  */

 export const postAddchannel= ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
  payload.callback = res => {
    resolve(res)
  }
  payload.error = err => {
    reject(error)
  }
  dispatch('api/postAddchannel', payload, {root: true})
 })
 }
