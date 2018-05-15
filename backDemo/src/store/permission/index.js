import * as getters from './getters'
import mutations from './mutations'
import * as actions from './action'

const state = {
  items: [],//当前选中路由
  isLoadRoutes: false,//是否初次登录
  twoLevleMenu:'',
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
  }
  return routes
}
