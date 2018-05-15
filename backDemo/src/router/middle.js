const Main = '@/pages/home.vue'
const routesSource = JSON.parse(localStorage.getItem('permission'))

export default
[
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/home',
    component:() => import('@/pages/homeindex.vue'), // 模板页面
    redirect:'index',
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '首页',
          role:true
        },
        node: 'index',
        component: () => import('@/pages/home/index/index.vue')
      },
      {
        path:'userSetting',
        meta: {
          title: '账户设置',
          role:true
        },
        name:'userSetting',
        node: 'index',
        component: () => import('@/pages/home/userSetting/userSetting.vue')
      },
    ]
  }
]

    const map = {
       'doctorManager': resolve => import('@/pages/user/doctorManager/doctorManager.vue'),
       'consultingService': resolve => import('@/pages/order/consultingService/consultingService.vue'),
       'operationalData': resolve => import('@/pages/setting/roleList/roleList.vue'),
       'administerList': resolve => import('@/pages/setting/administerList/administerList.vue'),
       'depList': resolve => import('@/pages/setting/depList/depList.vue'),
       'limitEdit': resolve => import('@/pages/setting/limitEdit/limitEdit.vue'),
       'appointmentService': resolve => import('@/pages/order/appointmentService/appointmentService.vue'),
       'doctorOfficeSerivce': resolve => import('@/pages/order/doctorOfficeSerivce/doctorOfficeSerivce.vue'),
     }
     export const AddRouteRootMap = (routesSource) => { // 这个是注入addRoutes的方法
       // routesSource 你自己定位到menus的位置
       const result = [] // 返回值
       const filterFun = (route) => {
         const obj = {}
         obj.title = route.menuName
         obj.name = route.routeName
         obj.path = `/${route.routeName}`
         obj.icon = route.icon
         obj.components = map[route.routeName] // 路由映射
         result.push(obj)
       }
       for (let i = 0; i < routesSource.length; i++) {
         for (let k = 0; k < routesSource[i].childrenMenuInfo.length; k++) {
           filterFun(routesSource[i].childrenMenuInfo[k])
         }
       }
       return result
     }
    export const filterTwoName = (routesSource, key) => { // 这个是点击一级路由查询二级渲染的方法
       const maps = {}
       let len = routesSource.length
       // debugger
       while (len--) {
         maps[routesSource[len].routeName] = routesSource[len].childrenMenuInfo
       }
       return maps[key]
     }
