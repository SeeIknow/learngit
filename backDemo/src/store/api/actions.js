import {AjaxRequest} from '@/http/http'
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
 * 订单管理》》图文咨询
 */
export const getOrderList = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/inquiryOrder/orders?status=${payload.param.status}`, payload.param, payload]}, {root: true})
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
  * 订单管理》》图文咨询>>详情>>分配医生
  */
  export const getOrderDoctor = ({state, dispatch}, payload) => {
    dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + `/inquiryOrder/${payload.param.departmentid}/doctors?type=${payload.param.type}`, payload.param,payload]}, {root: true})
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
   dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/outpatientOrder/orders?status=${payload.param.status}`, payload.param, payload]}, {root: true})
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
  * 用户管理》》医生管理
  */
  export const getUserList = ({state, dispatch}, payload) => {
    dispatch('api/ajaxMethod', {param: ['POST', state.server.server1 + `/doctor/doctors`, payload.param, payload]}, {root: true})
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
