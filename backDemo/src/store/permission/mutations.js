import {LIST} from './mutation-type.js'

export default {
  ADD_MENU(state, res) {
    //console.log(state);
      state.routers = res;
  },
  [LIST.LOAD_ROUTES] (state,res) {
    state.isLoadRoutes = !state.isLoadRoutes
  },
  // 获取二级路由
  getTwoLevleMenu(state,res){
    const permission= JSON.parse(localStorage.getItem('permission'));
    for(let i in permission.menus){

      if(state.items == permission.menus[i].menuName)
      return permission.menus[i]
    }
  }
}
