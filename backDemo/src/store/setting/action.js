import axios from 'axios'
import {LIST} from './mutation-type.js'

export const getUserList = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
      // console.log(res)
      commit(LIST.USERLIST,res.data)
    }
    payload.error = err => {
      reject(error)
    }
    dispatch('api/userSettingUserList', payload, {root: true})
  })
}
/**
 * 设置》》成员列表》》成员信息修改
 *
 */
 export const setUserInfo = ({state, commit, dispatch, getters, rootGetters}, data) => {
   const payload = rootGetters['api/payload']
   payload.param = data
   return new Promise((resolve, reject) => {
     payload.callback = res => {
       resolve(res)
       // console.log(res)
     }
     payload.error = err => {
       reject(error)
     }
     dispatch('api/userSettingUserEdit', payload, {root: true})
   })
 }

 /**
  * 设置》》成员列表》》成员信息删除
  *
  */
  export const deleteUserInfo = ({state, commit, dispatch, getters, rootGetters}, data) => {
    const payload = rootGetters['api/payload']
    payload.param = data
    return new Promise((resolve, reject) => {
      payload.callback = res => {
        resolve(res)
        // console.log(res)
      }
      payload.error = err => {
        reject(error)
      }
      dispatch('api/userSettingUserDelete', payload, {root: true})
    })
  }


  /**
   * 设置》》成员列表》》部门下拉列表
   *
   */
   export const getBMlist = ({state, commit, dispatch, getters, rootGetters}, data) => {
     const payload = rootGetters['api/payload']
     payload.param = data
     return new Promise((resolve, reject) => {
       payload.callback = res => {
         resolve(res)
         // console.log(res)
         commit(LIST.BMLIST,res.data)
       }
       payload.error = err => {
         reject(error)
       }
       dispatch('api/userSettingBMlist', payload, {root: true})
     })
   }
   /**
    * 设置》》成员列表》》角色下拉列表
    *
    */
    export const getRolelist = ({state, commit, dispatch, getters, rootGetters}, data) => {
      const payload = rootGetters['api/payload']
      payload.param = data
      return new Promise((resolve, reject) => {
        payload.callback = res => {
          resolve(res)
          // console.log(res)
          commit(LIST.ROLELIST,res.data)
        }
        payload.error = err => {
          reject(error)
        }
        dispatch('api/userSettingRolelist', payload, {root: true})
      })
    }
/**
* 设置》》成员列表》》添加
*
*/
export const setAddDoctor = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingAdd', payload, {root: true})
 })
}


/**
* 设置》》角色列表
*
*/
export const getRole = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
     commit(LIST.ROLETABLE,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingroleList', payload, {root: true})
 })
}

/**
* 设置》》角色列表>>角色修改
*
*/
export const setRoleInfo = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
     // commit(LIST.ROLETABLE,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingEditRole', payload, {root: true})
 })
}

/**
* 设置》》角色列表>>角色删除
*
*/
export const deleteRoleInfo = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
     // commit(LIST.ROLETABLE,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingDeleteRole', payload, {root: true})
 })
}
/**
* 设置》》角色列表>>角色添加
*
*/
export const addRoleInfo = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
     // commit(LIST.ROLETABLE,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingAddRole', payload, {root: true})
 })
}

/**
* 设置》》角色列表>>部门下拉列表
*
*/
export const getDepList = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
      commit(LIST.DEPLIST,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingGetDepList', payload, {root: true})
 })
}


/**
* 设置》》部门列表
*
*/
export const getDepManList = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
      commit(LIST.DEPMANLIST,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingDepManList', payload, {root: true})
 })
}
/**
* 设置》》部门内容修改
*
*/
export const setDepInfo = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
      // commit(LIST.DEPMANLIST,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingEditDep', payload, {root: true})
 })
}

/**
* 设置》》部门内容删除
*
*/
export const deleteDepInfo = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
      // commit(LIST.DEPMANLIST,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingDeleteDep', payload, {root: true})
 })
}
/**
* 设置》》部门内容添加
*
*/
export const AddDepInfo = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
      // commit(LIST.DEPMANLIST,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/userSettingDeleteDep', payload, {root: true})
 })
}

/**
* 设置》》权限管理--选择用户
*
*/
export const getLimitsBySelectUser = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
      commit(LIST.LIMITSLISTBYSELECT,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/limitsSelectUser', payload, {root: true})
 })
}
/**
* 设置》》权限管理--选择用户
*
*/
export const setLimitsBySelectUser = ({state, commit, dispatch, getters, rootGetters}, data) => {
 const payload = rootGetters['api/payload']
 payload.param = data
 return new Promise((resolve, reject) => {
   payload.callback = res => {
     resolve(res)
      // commit(LIST.LIMITSLISTBYSELECT,res.data)
     // console.log(res)
   }
   payload.error = err => {
     reject(error)
   }
   dispatch('api/limitsSet', payload, {root: true})
 })
}
