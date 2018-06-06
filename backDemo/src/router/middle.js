const Main = '@/pages/home.vue'
const routesSource = JSON.parse(localStorage.getItem('permission'))

export const constantTouter =
[
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/index',
    component:() => import('@/pages/homeindex.vue'), // 模板页面
    redirect:'index',
    children: [
      {
        path: 'index',
        name: 'index',
        title:'首页',
        node: 'index',
        component: () => import('@/pages/home/index/index.vue')
      },
      {
        path:'userSetting',
        title:'账户设置',
        name:'userSetting',
        node: 'index',
        component: () => import('@/pages/home/userSetting/userSetting.vue')
      },
    ]
  },
  {
    path: '/order',
    component:() => import('@/pages/homeindex.vue'), // 模板页面
    children: [
    	{
         path: 'table',
        name: 'table',
        node: 'order',
        meta: {
          title: '疾病救助',
          role:false
        },
        component: () => import('@/pages/order/orderManage/orderManage.vue')
      },
      {
        path: 'healthService',
        name: 'healthService',
        node: 'order',
        meta: {
          title: '体检服务',
          role:false
        },
        component: () => import('@/pages/order/healthService/healthService.vue')
      },
      {
        path: 'consultingService',
        name: 'consultingService',
        node: 'order',
        title: '图文咨询',
        component: () => import('@/pages/order/consultingService/consultingService.vue')
      },
      {
        path: 'orderExmin',
        name: 'orderExmin',
        title: '图文咨询待分诊详情',
        component: () => import('@/pages/order/orderExmin/orderExmin.vue')
      },
      {
        path: 'orderExmin1',
        name: 'orderExmin1',
        title: '图文咨询待回复详情',
        component: () => import('@/pages/order/orderExmin1/orderExmin1.vue')
      },
      {
        path: 'orderExmin2',
        name: 'orderExmin2',
        title: '图文咨询未通过详情',
        component: () => import('@/pages/order/orderExmin2/orderExmin2.vue')
      },
      {
        path: 'orderExmin3',
        name: 'orderExmin3',
          title: '图文咨询已关闭详情',
        component: () => import('@/pages/order/orderExmin3/orderExmin3.vue')
      },
      {
        path: 'orderExmin4',
        name: 'orderExmin4',
          title: '图文咨询已采纳详情',
        component: () => import('@/pages/order/orderExmin4/orderExmin4.vue')
      },
      {
        path: 'appointmentService',
        name: 'appointmentService',
        node: 'order',
          title: '门诊预约',
        component: () => import('@/pages/order/appointmentService/appointmentService.vue')
      },
      {
        path: 'orderOutpatientAppointment',
        name: 'orderOutpatientAppointment',
          title: '门诊预约待预约详情',
        component: () => import('@/pages/order/orderOutpatientAppointment/orderOutpatientAppointment.vue')
      },
      {
        path: 'orderOutpatientAppointment1',
        name: 'orderOutpatientAppointment1',
          title: '门诊预约待就诊详情',
        component: () => import('@/pages/order/orderOutpatientAppointment1/orderOutpatientAppointment1.vue')
      },
      {
        path: 'orderOutpatientAppointment2',
        name: 'orderOutpatientAppointment2',
          title: '门诊预约已结束详情',
        component: () => import('@/pages/order/orderOutpatientAppointment2/orderOutpatientAppointment2.vue')
      },
      {
        path: 'doctorOfficeSerivce',
        name: 'doctorOfficeSerivce',
        node: 'order',
          title: '就诊服务',
        component: () => import('@/pages/order/doctorOfficeSerivce/doctorOfficeSerivce.vue')
      },
      {
        path: 'orderOutpatientAppointment3',
        name: 'orderOutpatientAppointment3',
          title: '就诊待就诊详情',
        component: () => import('@/pages/order/orderOutpatientAppointment3/orderOutpatientAppointment3.vue')
      },
      {
        path: 'orderOutpatientAppointment4',
        name: 'orderOutpatientAppointment4',
          title: '就诊已完成详情',
        component: () => import('@/pages/order/orderOutpatientAppointment4/orderOutpatientAppointment4.vue')
      },
      {
        path: 'longRangeService',
        name: 'longRangeService',
        node: 'order',
          title: '远程会诊',
        component: () => import('@/pages/order/longRangeService/longRangeService.vue')
      },
      {
        path: 'accopanyService',
        name: 'accopanyService',
        node: 'order',
          title: '陪诊服务',
        component: () => import('@/pages/order/accopanyService/accopanyService.vue')
      },
      {
        path: 'privateDoc',
        name: 'privateDoc',
        node: 'order',
          title: '私人医生',
        component: () => import('@/pages/order/privateDoc/privateDoc.vue')
      },
      {
        path: 'memberSerivce',
        name: 'memberSerivce',
        node: 'order',
          title: '会员服务',
        component: () => import('@/pages/order/memberSerivce/memberSerivce.vue')
      },
    ]
  },
  {
    path: '/user',
    component:() => import('@/pages/homeindex.vue'), // 模板页面
//  redirect:'index',
    children: [
      {
        path: 'userManage',
        name: 'userManage',
        node: 'user',
          title: '会员管理',
        component: () => import('@/pages/user/userManage/userManage.vue')
      },
      {
        path: 'doctorManager',
        name: 'doctorManager',
        node: 'user',
          title: '医生管理',
        component: () => import('@/pages/user/doctorManager/doctorManager.vue')
      },
      {
        path: 'doctorEdit',
        name: 'doctorEdit',
          title: '医生编辑',
        component: () => import('@/pages/user/doctorEdit1/doctorEdit.vue')
      },
      {
        path: 'doctorAdd',
        name: 'doctorAdd',
          title: '医生添加',
        component: () => import('@/pages/user/doctorAdd/doctorAdd.vue')
      },
      {
        path: 'doctorIntroEdit',
        name: 'doctorIntroEdit',
          title: '医生简介编辑',
        component: () => import('@/pages/user/doctorEdit/doctorIntroEdit.vue')
      },
      {
        path: 'addHospital',
        name: 'addHospital',
          title: '医生添加',
        component: () => import('@/pages/user/addHospital/addHospital.vue')
      },
      {
        path: 'addHospitalList',
        name: 'addHospitalList',
          title: '医生添加列表',
        component: () => import('@/pages/user/addHospitalList/addHospitalList.vue')
      },
      {
        path: 'serviceMange',
        name: 'serviceMange',
          title: '服务管理',
        component: () => import('@/pages/user/serviceMange/serviceMange.vue')
      },
      {
        path: 'orderExmin2',
        name: 'orderExmin2',
        node: 'user',
          title: '医学中心',
        component: () => import('@/pages/user/medicalCenter/medicalCenter.vue')
      },
      {
        path: 'orderExmin3',
        name: 'orderExmin3',
        node: 'user',
          title: '渠道管理',
        component: () => import('@/pages/user/userManage/userManage.vue')
      },
      {
        path: 'orderExmin4',
        name: 'orderExmin4',
        node: 'user',
          title: '基金会',
        component: () => import('@/pages/user/foundation/foundation.vue')
      },
    ]
  },
  {
    path: '/setting',
    component:() => import('@/pages/homeindex.vue'), // 模板页面
//  redirect:'index',
    children: [
      {
        path: 'administerList',
        name: 'administerList',
        node: 'setting',
          title: '成员设置',
        component: () => import('@/pages/setting/administerList/administerList.vue')
      },
      {
        path: 'managerSetting',
        name: 'managerSetting',
        node: 'setting',
          title: '成员信息修改',
        component: () => import('@/pages/setting/managerSetting/managerSetting.vue')
      },
      {
        path: 'managerSettingAdd',
        name: 'managerSettingAdd',
        node: 'setting',
          title: '成员信息添加',
        component: () => import('@/pages/setting/managerSetting/managerSettingAdd.vue')
      },
      {
        path: 'roleList',
        name: 'roleList',
        node: 'setting',
          title: '角色设置',
        component: () => import('@/pages/setting/roleList/roleList.vue')
      },
      {
        path: 'roleManageSetting',
        name: 'roleManageSetting',
        node: 'setting',
          title: '角色设置修改',
        component: () => import('@/pages/setting/roleList/roleManageSetting.vue')
      },
      {
        path: 'roleManagerSettingAdd',
        name: 'roleManagerSettingAdd',
        node: 'setting',
          title: '角色设置添加',
        component: () => import('@/pages/setting/roleList/roleManagerSettingAdd.vue')
      },
      {
        path: 'depList',
        name: 'depList',
        node: 'setting',
          title: '部门设置',
        component: () => import('@/pages/setting/depList/depList.vue')
      },
      {
        path: 'depManageSetting',
        name: 'depManageSetting',
        node: 'setting',
          title: '部门设置修改',
        component: () => import('@/pages/setting/depList/depManageSetting.vue')
      },
      {
        path: 'depManagerSettingAdd',
        name: 'depManagerSettingAdd',
        node: 'setting',
          title: '部门设置添加',
        component: () => import('@/pages/setting/depList/depManagerSettingAdd.vue')
      },
      {
        path: 'limitEdit',
        name: 'limitEdit',
        node: 'setting',
          title: '权限设置',
        component: () => import('@/pages/setting/limitEdit/limitEdit.vue')
      },
      {
        path: 'aa',
        name: 'aa4',
        node: 'setting',
          title: '首页轮播',
        component: () => import('@/pages/setting/aa/aa.vue')
      },
      {
        path: 'aa',
        name: 'aa5',
        node: 'setting',
          title: '结算设置',
        component: () => import('@/pages/setting/aa/aa.vue')
      }
    ]
  },
  {
    path: '/content',
    component:() => import('@/pages/homeindex.vue'), // 模板页面
//  redirect:'index',
    children: [
      {
        path: 'departmentManage',
        name: 'departmentManage',
        node: 'content',
          title: '科室管理',
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
      {
        path: 'departmentManage1',
        name: 'departmentManage1',
        node: 'content',
          title: '疾病管理',
        component: () => import('@/pages/content/memberEdit/memberEdit.vue')
      },
      {
        path: 'departmentManage',
        name: 'departmentManage2',
        node: 'content',
          title: '症状管理',
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
      {
        path: 'departmentManage',
        name: 'departmentManage3',
        node: 'content',
          title: '病因管理',
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
      {
        path: 'departmentManage',
        name: 'departmentManage4',
        node: 'content',
          title: '家族病史',
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
      {
        path: 'departmentManage',
        name: 'departmentManage5',
        node: 'content',
          title: '用户级别',
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
    ]
  },
  {
    path: '/count',
    component:() => import('@/pages/homeindex.vue'), // 模板页面
//  redirect:'index',
    children: [
    {
        path: 'operationalData',
        name: 'operationalData',
        node: 'count',
          title: '交易统计',
        component: () => import('@/pages/count/operationalData/operationalData.vue')
      },
      {
        path: 'operationalData1',
        name: 'operationalData1',
        node: 'count',
          title: '交易统计',
        component: () => import('@/pages/count/operationalData/operationalData.vue')
      },
      {
        path: 'channelManagement',
        name: 'channelManagement',
        node: 'count',
          title: '财务报表',
        component: () => import('@/pages/count/channelManagement/channelManagement.vue')
      },
    ]
  }
]

    const map = {
       'doctorManager': resolve => import('@/pages/user/doctorManager/doctorManager.vue'),
       'consultingService': resolve => import('@/pages/order/consultingService/consultingService.vue'),
       'operationalData': resolve => import('@/pages/count/operationalData/operationalData.vue'),
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
         obj.name = `${route.routeName}`
         obj.path = `/${route.routeName}`
         obj.icon = route.icon
         obj.node = route.icon
         obj.component = map[route.routeName] // 路由映射
         result.push(obj)
       }
       for (let i = 0; i < routesSource.length; i++) {
         for (let k = 0; k < routesSource[i].childrenMenuInfo.length; k++) {
           filterFun(routesSource[i].childrenMenuInfo[k])
         }
       }
       const routerRes = [{
       		path:'/home1',
	       	component:() => import('@/pages/homeindex.vue'), // 模板页面
       }]
       routerRes[0].children = result
       return routerRes
     }
    export const filterTwoName = (routesSource, key) => { // 这个是点击一级路由查询二级渲染的方法

       const	mapArr =[];
       let len = routesSource.length
       for(let i in routesSource){
       	if(routesSource[i].routeName == key){
       		for(var j = 0;j<routesSource[i].childrenMenuInfo.length;j++){
       			//console.log(routesSource[i].childrenMenuInfo[j])
       			 const maps = {}
       			maps.title = routesSource[i].childrenMenuInfo[j].menuName;
       			maps.name = routesSource[i].childrenMenuInfo[j].routeName;
       			maps.path = `/${routesSource[i].childrenMenuInfo[j].routeName}`;
       			mapArr.push(maps)
       		}
       	}
       }
//     while (len--) {
//       maps[routesSource[len].routeName] = routesSource[len].childrenMenuInfo
//     }
//     return maps[key]
				return mapArr;
     }
