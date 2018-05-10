import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

const state = {
  role: [],
  list:'',
  listItem:'',
  listYY:'',//预约列表
  diseaseTypeList:'',//疾病类型列表
  departmentTList:'',//二级科室列表
  doctorList_fp:'',//分配医生列表
  yyDetail:'',//预约详情
  yyDetailAdress:'',//出诊地点
  depList_three:'',//三级科室（疾病分型）
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
