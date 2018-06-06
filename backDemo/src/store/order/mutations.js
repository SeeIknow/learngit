import {LIST} from './mutation-type.js'

export default {
  // 列表
  [LIST.GET_LIST] (state, res) {
    ////console.log(state);
    state.list = res;
  },
  // 列表详情
  [LIST.GET_LISTITEM] (state, res) {
    ////console.log(state);
    state.listItem = res;
  },
  // 疾病类型
  [LIST.GET_DISEASELIST] (state, res) {
    ////console.log(state);
    state.diseaseTypeList = res;
  },
  // 二级疾病
  [LIST.GET_DEPARTMRNT_T] (state, res) {
    ////console.log(state);
    state.departmentTList = res;
  },
  // 疾病分型（三级科室）
  [LIST.GET_LIST_DEP_THREE] (state, res) {
    ////console.log(state);
    state.depList_three = res;
  },
  // 分配医生
  [LIST.GET_ORDER_DOCTOR] (state, res) {
    ////console.log(state);
    state.doctorList_fp = res;
  },
  // 预约列表详情
  [LIST.GET_LIST_YY_DETAIL] (state, res) {
    ////console.log(state);
    state.yyDetail = res;
  },
  // 预约列表详情》》出诊地点
  [LIST.GET_LIST_YY_ADRESS] (state, res) {
    ////console.log(state);
    state.yyDetailAdress = res;
  },
  // 预约列表
  [LIST.GET_LIST_YY] (state, res) {
    ////console.log(state);
    state.listYY = res;
  },
}
