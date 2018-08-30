import {AjaxRequest} from '@/http/http'
import axios from 'axios'
/*
*https://www.mmxiaowu.com/article/591a74f60ef91a5c93a340c4
*/
export const ajaxMethod = ({state, dispatch}, data) => {
  let method = data.param[0]
  let url = data.param[1]
  let param = data.param[2]
  let payload = data.param[3]
  let error = res => {
    state.error = res
  }
  payload.error = error
  const request = new AjaxRequest(url, param, payload)
  if (method === 'GET') {
    request.getAjaxMethod(url, param, payload)
  } else if (method === 'POST') {
    request.postAjaxMethod(url, param, payload)
  } else if (method === 'PUT') {
    request.putAjaxMethod(url, param, payload)
  } else if (method === 'DELETE') {
    request.deleteAjaxMethod(url, param, payload)
  } else {
    request.getAjaxMethod(url, param, payload)
  }
}
/**
* userInfo admin
*https://easy-mock.com/mock/5aa881eb99ed355f274d0e93/system/userInfo#!method=get
*https://easy-mock.com/mock/5aa881eb99ed355f274d0e93/system/userInfonormal#!method=get
*/
/**
 * 首页 订单统计
 */
export const paymentOrder = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/payment/paymentOrder`, payload.param, payload]}, {root: true})
}
/**
 * 首页 待处理订单
 */
export const pendingOrder = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/payment/pendingOrder`, payload.param, payload]}, {root: true})
}
/**
 * 更新用户信息
 */
export const updateUserInfo = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/userinfo/refreshUserInfo`, payload.param, payload]}, {root: true})
}
/**
 * 获取用户菜单权限
 */
export const getUserPermission = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/userinfo/afterLoginGetAuth`, payload.param, payload]}, {root: true})
}
/**
 * 订单管理》》图文咨询
 */
export const getOrderList = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/inquiryOrder/orders?pageNum=${payload.param.pageNum}&status=${payload.param.status}`, payload.param, payload]}, {root: true})
}

/**
 * 订单管理》》图文咨询>>详情
 */
 export const getOrderListDetial = ({state, dispatch}, payload) => {
   dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/inquiryOrder/${payload.param.id}/order`, payload.param,payload]}, {root: true})
 }
 /**
  * 订单管理》》图文咨询>>详情>>疾病类型
  */
  export const getOrderDiseaseType = ({state, dispatch}, payload) => {
    dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/inquiryOrder/diseases`, payload.param,payload]}, {root: true})
  }

  /**
   * 订单管理》》图文咨询>>详情>>二级科室
   */
   export const getOrderDepartment = ({state, dispatch}, payload) => {
     dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/inquiryOrder/departments?hospitalId=${payload.param.id}`, payload.param,payload]}, {root: true})
   }
   /**
    * 订单管理》》图文咨询>>详情>>疾病分型（三级科室）
    */
    export const getOrderDepartmentThree = ({state, dispatch}, payload) => {
      dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/inquiryOrder/${payload.param.id}/diseaseTypes`, payload.param,payload]}, {root: true})
    }
 // /**
 //  * 订单管理》》图文咨询>>详情>>分配医生
 //  */
 //  export const getOrderDoctor = ({state, dispatch}, payload) => {
 //    dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/inquiryOrder/${payload.param.departmentid}/doctors?type=${payload.param.type}`, payload.param,payload]}, {root: true})
 //  }

  /**
   * 订单管理》》图文咨询>>详情>>分配医生
   */
   export const getOrderDoctor = ({state, dispatch}, payload) => {
     dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/inquiryOrder/${payload.param.id}/allocation/doctors?hospitalId=${payload.param.hospitalId}`, payload.param,payload]}, {root: true})
   }
  /**
   * 订单管理》》图文咨询>>详情>>订单审核通过
   */
   export const getOrderSuccess = ({state, dispatch}, payload) => {
     dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/inquiryOrder/audit/inquiryOrder`, payload.param,payload]}, {root: true})
   }
   /**
    * 订单管理》》图文咨询>>详情>>订单回复
    */
    export const getOrderReply = ({state, dispatch}, payload) => {
      dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/inquiryOrder/reply/inquiryOrder?id=${payload.param.id}&replyContent=${payload.param.content}`, payload.param,payload]}, {root: true})
    }
/**
 * 订单管理》》门诊预约
 */
 export const getOrderList_yy = ({state, dispatch}, payload) => {
   dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/outpatientOrder/orders?status=${payload.param.status}&pageNum=${payload.param.pageNum}`, payload.param, payload]}, {root: true})
 }
 /**
  * 订单管理》》门诊预约》详情
  */
  export const getOrderYy_detail = ({state, dispatch}, payload) => {
    dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/outpatientOrder/${payload.param.id}/order`, payload.param, payload]}, {root: true})
  }
  /**
   * 订单管理》》门诊预约》详情》》沟通记录
   */
   export const getOrderYy_detailRecord = ({state, dispatch}, payload) => {
     dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/outpatientOrder/comm/OutpatientOrderComm`, payload.param, payload]}, {root: true})
   }
 /**
  * 订单管理》》门诊预约》详情》》出诊地点
  */
  export const getOrderYy_address = ({state, dispatch}, payload) => {
    dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/outpatientOrder/${payload.param.id}/realityPlace`, payload.param, payload]}, {root: true})
  }
  /**
   * 订单管理》》门诊预约》详情》》预约订单审核
   */
   export const getOrderYy_check = ({state, dispatch}, payload) => {
     dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/outpatientOrder/appointment/outpatientOrder`, payload.param, payload]}, {root: true})
   }
   /**
    * 订单管理》》门诊预约》详情》》就诊订单审核
    */
    export const getOrderYy_check_j = ({state, dispatch}, payload) => {
      dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/outpatientOrder/outpatient/outpatientOrder`, payload.param, payload]}, {root: true})
    }
/**
* 订单管理》》门诊预约》详情》》就诊订单确认
*/
export const getOrderYy_check_j_s = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/outpatientOrder/outpatient/affirm`, payload.param, payload]}, {root: true})
}

/**
* 订单管理》》就诊服务》》列表
*/
export const getOrderJzList= ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/orders`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》详情
*/
export const getOrderJzDetail= ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/diseaseHelpController/${payload.param.id}/order`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》上传图片
*/
export const uploadPhoto= ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/diseaseHelpController/upload/zhengming?type=${payload.param.type}&id=${payload.param.id}`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》添加沟通记录
*/
export const addChatDetail= ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/communicateRecord`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待就诊不通过
*/
export const firstCheckUnable= ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/firstCheckUnable`, payload.param, payload]}, {root: true})
}


/**
* 订单管理》》就诊服务》》待就诊通过
*/
export const firstCheckAble= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/${payload.param.id}/firstCheckAble`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待复审通过
*/
export const secondChcekAble= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/${payload.param.id}/secondChcekAble`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待复审不通过
*/
export const secondChcekUnable= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/secondChcekUnable`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》基金会列表
*/
export const foundations= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/diseaseHelpController/foundations`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》医学中心列表
*/
export const medicalCenters= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/diseaseHelpController/medicalCenters`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》患者分配
*/
export const patientDistribution= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/${payload.param.id}/${payload.param.medicalCenterId}/${payload.param.foundationId}/forwardMedical`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待面诊 预约失败
*/
export const appointmentDiseaseFail= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/appointmentDiseaseFail`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待面诊 添加到院时间
*/
export const appointmentDisease= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/appointmentDisease`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待面诊 已到院
*/
export const alredayComeHospital= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/alredayComeHospital`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待面诊 未到院
*/
export const notComeHospital= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/notComeHospital`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待治疗 已治疗
*/
export const alredayTreatment= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/alredayTreatment`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待治疗 未治疗
*/
export const notTreatment= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/notTreatment`, payload.param, payload]}, {root: true})
}
/**
* 订单管理》》就诊服务》》待验证 验证
*/
export const validateOperation= ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/diseaseHelpController/${payload.param.id}/validateOperation`, payload.param, payload]}, {root: true})
}
 /**
  * 用户管理》》医生管理
  */
  export const getUserList = ({state, dispatch}, payload) => {
    dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/doctor/doctors?pageNum=${payload.param.pageNum}`, payload.param, payload]}, {root: true})
  }
  /**
   * 用户管理》》医生管理>>设置推荐医生
   */
   export const recommendDoctor = ({state, dispatch}, payload) => {
     dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/doctor/${payload.param.recommend}/${payload.param.id}/recommendDoctor`, payload.param, payload]}, {root: true})
   }
  /**
   * 用户管理》》医生管理>>添加 编辑医生
   */
   export const doctorEdit = ({state, dispatch}, payload) => {
     dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/doctor/doctor`, payload.param, payload]}, {root: true})
   }
/**
* 用户管理》》医生管理>>医生详情
*/
export const doctorDetail = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/doctor/${payload.param.id}/doctor`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》医生管理>>医生详情>医生级别
*/
export const doctorLevel = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/doctor/doctorLevels`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》医生管理>>医生详情>医生职称
*/
export const doctorOffice = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/doctor/doctorPositions`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》医生管理>>医生详情> 提交
*/
export const doctorSave = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/doctor/doctor`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》医生管理>>医生详情> 医生下拉菜单
*/
export const hospitalList = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/doctor/hospitals`, payload.param, payload]}, {root: true})
}
export const hospitalManage = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/doctor/update/hospital`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》医生管理>>医生详情> 医学助理
*/
export const medicalAssitant = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/doctor/assistants`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》医生管理>>医生详情>医院添加
*/
export const addHospital = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/doctor/add/hospital`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》医生管理>>医生详情>查看医生详情
*/
export const hospitalDetails = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/doctor/${payload.param.id}/hospital`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》医生管理>>医生详情>服务管理
*/
export const serviceMange = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/doctor/${payload.param.id}/services`, payload.param.data, payload]}, {root: true})
}

/**
* 用户管理》》医生管理>>医生详情>删除医院
*/
export const deleteHospital = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/doctor/${payload.params.id}/delhospital`, payload.param, payload]}, {root: true})
}


/**
* 用户管理》》渠道管理列表
*/
export const postPlaceMangeList = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/channel/channels`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》渠道管理>>省
*/
export const postProvinces = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/channel/provinces`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》渠道管理>>市
*/
export const postCitys = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/channel/${payload.param.id}/citys`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》渠道管理>>区
*/
export const postDistricts = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/channel/${payload.param.id}/districts`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》渠道管理>>渠道详情
*/
export const getChannelDetail = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/channel/${payload.param.channelId}/channelDetail`, payload.param, payload]}, {root: true})
}

/**
* 用户管理》》渠道管理>>渠道详情>>编辑提交
*/
export const postEditchannel = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/channel/editchannel`, payload.param, payload]}, {root: true})
}
/**
* 用户管理》》渠道管理>>渠道添加
*/
export const postAddchannel = ({state, dispatch}, payload) => {
 dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/channel/addchannel`, payload.param, payload]}, {root: true})
}
/**
 * 设置---------------------------
 */
/**
 * 用户设置》》成员列表
 */
 export const userSettingUserList = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/userinfo/getUserInfoList?pageNum=${payload.param.pageNum}`, payload.param, payload]}, {root: true})
 }
 /**
  * 用户设置》》成员信息修改
  */
  export const userSettingUserEdit = ({state, dispatch}, payload) => {
   dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/userinfo/editUserInfo`, payload.param, payload]}, {root: true})
  }
  /**
   * 用户设置》》成员信息删除
   */
   export const userSettingUserDelete = ({state, dispatch}, payload) => {
    dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/userinfo/deleteUserInfo?id=${payload.param.id}`, payload.param, payload]}, {root: true})
   }

   /**
    * 用户设置》》部门下拉列表
    */
    export const userSettingBMlist = ({state, dispatch}, payload) => {
     dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/deptInfo/getDeptInfoListForUser`, payload.param, payload]}, {root: true})
    }
/**
* 用户设置》》角色下拉列表
*/
export const userSettingRolelist = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/roleInfo/getRoleListForUser?deptId=${payload.param.id}`, payload.param, payload]}, {root: true})
}
/**
* 用户设置》》新增用户
*/
export const userSettingAdd = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/userinfo/addUserInfo`, payload.param, payload]}, {root: true})
}


/**
* 用户设置》》角色管理》》角色列表
*/
export const userSettingroleList = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/roleInfo/getRoleInfoList?pageNum=${payload.param.pageNum}`, payload.param, payload]}, {root: true})
}

/**
* 用户设置》》角色管理》》角色列表>>角色修改
*/
export const userSettingEditRole = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/roleInfo/editRoleInfo`, payload.param, payload]}, {root: true})
}
/**
* 用户设置》》角色管理》》角色列表>>角色删除
*/
export const userSettingDeleteRole = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/roleInfo/deleteRoleInfo?id=${payload.param.id}`, payload.param, payload]}, {root: true})
}
/**
* 用户设置》》角色管理》》角色列表>>角色添加
*/
export const userSettingAddRole = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/roleInfo/addRoleInfo`, payload.param, payload]}, {root: true})
}
/**
* 用户设置》》角色管理》》角色列表>>部门下拉列表
*/
export const userSettingGetDepList = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/deptInfo/getDeptInfoListForUser`, payload.param, payload]}, {root: true})
}


/**
* 用户设置》》部门管理》》部门列表
*/
export const userSettingDepManList = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/deptInfo/getDeptInfoList?pageNum=${payload.param.pageNum}`, payload.param, payload]}, {root: true})
}


/**
* 用户设置》》部门管理》》部门内容修改
*/
export const userSettingEditDep = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/deptInfo/editDeptInfo`, payload.param, payload]}, {root: true})
}
/**
* 用户设置》》部门管理》》部门内容添加
*/
export const userSettingAddDep = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/deptInfo/addDeptInfo`, payload.param, payload]}, {root: true})
}
/**
* 用户设置》》部门管理》》部门内容删除
*/
export const userSettingDeleteDep = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/deptInfo/deleteDeptInfo?id=${payload.param.id}`, payload.param, payload]}, {root: true})
}
/**
* 用户设置》》医生模板下载
*/
export const doctorExcelDown = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/doctor/excel/downloadExcel`, payload.param, payload]}, {root: true})
}

/**
* 权限设置》》选择用户的权限设置
*/
export const limitsSelectUser = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/powerResourceInfo/getUserPowerResource?roleId=${payload.param.roleId}&deptId=${payload.param.deptId}`, payload.param, payload]}, {root: true})
}
/**
* 权限设置》》权限设置提交
*/
export const limitsSet = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/powerResourceInfo/setUserPowerResource?roleId=${payload.param.roleId}&deptId=${payload.param.deptId}`, payload.param, payload]}, {root: true})
}


/**
* 首页》》账户设置》》修改密码
*/
export const changePass = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/userinfo/editPwd`, payload.param, payload]}, {root: true})
}

/**
* 统计》》交易统计
*/
export const tradeStatistics = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/transaction/getOrderTransaction?statisticType=${payload.param.statisticType}&orderType=${payload.param.orderType}&startDate=${payload.param.startDate}&endDate=${payload.param.endDate}`, payload.param, payload]}, {root: true})
}
/**
* 统计》》交易统计 订单数据
*/
export const orderStatistics = ({state, dispatch}, payload) => {
dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/transaction/getOrderSource?statisticType=${payload.param.statisticType}&orderType=${payload.param.orderType}&startDate=${payload.param.startDate}&endDate=${payload.param.endDate}`, payload.param, payload]}, {root: true})
}
