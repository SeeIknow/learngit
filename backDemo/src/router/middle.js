const Main = '@/pages/home.vue'
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
      // {
      //   path:'wolet',
      //   meta: {
      //     title: '我的钱包',
      //     role:true
      //   },
      //   name:'wolet',
      //   component: () => import('@/pages/home/index/index.vue')
      // },
      // {
      //   path:'changPass',
      //   node: 'index',
      //   meta: {
      //     title: '修改密码',
      //     role:true
      //   },
      //   name:'changPass',
      //   component: () => import('@/pages/home/userSetting/userSetting.vue')
      // },
      // {
      //   path:'changePic',
      //   node: 'index',
      //   meta: {
      //     title: '修改头像',
      //     role:true
      //   },
      //   name:'changePic',
      //   component: () => import('@/pages/home/userSetting/userSetting.vue')
      // },
      // 订单
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
        meta: {
          title: '图文咨询',
          role:true
        },
        component: () => import('@/pages/order/consultingService/consultingService.vue')
      },
      {
        path: 'orderExmin',
        name: 'orderExmin',
        meta: {
          title: '图文咨询待分诊详情'
        },
        component: () => import('@/pages/order/orderExmin/orderExmin.vue')
      },
      {
        path: 'orderExmin1',
        name: 'orderExmin1',
        meta: {
          title: '图文咨询待回复详情'
        },
        component: () => import('@/pages/order/orderExmin1/orderExmin1.vue')
      },
      {
        path: 'orderExmin2',
        name: 'orderExmin2',
        meta: {
          title: '图文咨询未通过详情'
        },
        component: () => import('@/pages/order/orderExmin2/orderExmin2.vue')
      },
      {
        path: 'orderExmin3',
        name: 'orderExmin3',
        meta: {
          title: '图文咨询已关闭详情'
        },
        component: () => import('@/pages/order/orderExmin3/orderExmin3.vue')
      },
      {
        path: 'orderExmin4',
        name: 'orderExmin4',
        meta: {
          title: '图文咨询已采纳详情'
        },
        component: () => import('@/pages/order/orderExmin4/orderExmin4.vue')
      },
      {
        path: 'appointmentService',
        name: 'appointmentService',
        node: 'order',
        meta: {
          title: '门诊预约',
          role:true
        },
        component: () => import('@/pages/order/appointmentService/appointmentService.vue')
      },
      {
        path: 'orderOutpatientAppointment',
        name: 'orderOutpatientAppointment',
        meta: {
          title: '门诊预约待预约详情'
        },
        component: () => import('@/pages/order/orderOutpatientAppointment/orderOutpatientAppointment.vue')
      },
      {
        path: 'orderOutpatientAppointment1',
        name: 'orderOutpatientAppointment1',
        meta: {
          title: '门诊预约待就诊详情'
        },
        component: () => import('@/pages/order/orderOutpatientAppointment1/orderOutpatientAppointment1.vue')
      },
      {
        path: 'orderOutpatientAppointment2',
        name: 'orderOutpatientAppointment2',
        meta: {
          title: '门诊预约已结束详情',
          role:true
        },
        component: () => import('@/pages/order/orderOutpatientAppointment2/orderOutpatientAppointment2.vue')
      },
      {
        path: 'doctorOfficeSerivce',
        name: 'doctorOfficeSerivce',
        node: 'order',
        meta: {
          title: '就诊服务',
          role:true
        },
        component: () => import('@/pages/order/doctorOfficeSerivce/doctorOfficeSerivce.vue')
      },
      {
        path: 'orderOutpatientAppointment3',
        name: 'orderOutpatientAppointment3',
        meta: {
          title: '就诊待就诊详情'
        },
        component: () => import('@/pages/order/orderOutpatientAppointment3/orderOutpatientAppointment3.vue')
      },
      {
        path: 'orderOutpatientAppointment4',
        name: 'orderOutpatientAppointment4',
        meta: {
          title: '就诊已完成详情'
        },
        component: () => import('@/pages/order/orderOutpatientAppointment4/orderOutpatientAppointment4.vue')
      },
      {
        path: 'longRangeService',
        name: 'longRangeService',
        node: 'order',
        meta: {
          title: '远程会诊',
          role:false
        },
        component: () => import('@/pages/order/longRangeService/longRangeService.vue')
      },
      {
        path: 'accopanyService',
        name: 'accopanyService',
        node: 'order',
        meta: {
          title: '陪诊服务',
          role:false
        },
        component: () => import('@/pages/order/accopanyService/accopanyService.vue')
      },
      {
        path: 'privateDoc',
        name: 'privateDoc',
        node: 'order',
        meta: {
          title: '私人医生',
          role:false
        },
        component: () => import('@/pages/order/privateDoc/privateDoc.vue')
      },
      {
        path: 'memberSerivce',
        name: 'memberSerivce',
        node: 'order',
        meta: {
          title: '会员服务',
          role:false
        },
        component: () => import('@/pages/order/memberSerivce/memberSerivce.vue')
      },
      // 用户
      {
        path: 'userManage',
        name: 'userManage',
        node: 'user',
        meta: {
          title: '会员管理',
          role:false
        },
        component: () => import('@/pages/user/userManage/userManage.vue')
      },
      {
        path: 'doctorManager',
        name: 'doctorManager',
        node: 'user',
        meta: {
          title: '医生管理',
          role:true
        },
        component: () => import('@/pages/user/doctorManager/doctorManager.vue')
      },
      {
        path: 'doctorEdit',
        name: 'doctorEdit',
        meta: {
          title: '医生编辑',
          role:true
        },
        component: () => import('@/pages/user/doctorEdit1/doctorEdit.vue')
      },
      {
        path: 'doctorAdd',
        name: 'doctorAdd',
        meta: {
          title: '医生添加',
          role:true
        },
        component: () => import('@/pages/user/doctorAdd/doctorAdd.vue')
      },
      {
        path: 'doctorIntroEdit',
        name: 'doctorIntroEdit',
        meta: {
          title: '医生简介编辑',
          role:true
        },
        component: () => import('@/pages/user/doctorEdit/doctorIntroEdit.vue')
      },
      {
        path: 'addHospital',
        name: 'addHospital',
        meta: {
          title: '医生添加',
          role:true
        },
        component: () => import('@/pages/user/addHospital/addHospital.vue')
      },
      {
        path: 'addHospitalList',
        name: 'addHospitalList',
        meta: {
          title: '医生添加列表',
          role:true
        },
        component: () => import('@/pages/user/addHospitalList/addHospitalList.vue')
      },
      {
        path: 'serviceMange',
        name: 'serviceMange',
        meta: {
          title: '服务管理',
          role:true
        },
        component: () => import('@/pages/user/serviceMange/serviceMange.vue')
      },
      {
        path: 'orderExmin2',
        name: 'orderExmin2',
        node: 'user',
        meta: {
          title: '医学中心',
          role:false
        },
        component: () => import('@/pages/user/medicalCenter/medicalCenter.vue')
      },
      {
        path: 'orderExmin3',
        name: 'orderExmin3',
        node: 'user',
        meta: {
          title: '渠道管理',
          role:false
        },
        component: () => import('@/pages/user/userManage/userManage.vue')
      },
      {
        path: 'orderExmin4',
        name: 'orderExmin4',
        node: 'user',
        meta: {
          title: '基金会',
          role:false
        },
        component: () => import('@/pages/user/foundation/foundation.vue')
      },
      // 内容
      {
        path: 'departmentManage',
        name: 'departmentManage',
        node: 'content',
        meta: {
          title: '科室管理',
          role:true
        },
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
      {
        path: 'departmentManage1',
        name: 'departmentManage1',
        node: 'content',
        meta: {
          title: '疾病管理',
          role:false
        },
        component: () => import('@/pages/content/memberEdit/memberEdit.vue')
      },
      {
        path: 'departmentManage',
        name: 'departmentManage2',
        node: 'content',
        meta: {
          title: '症状管理',
          role:false
        },
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
      {
        path: 'departmentManage',
        name: 'departmentManage3',
        node: 'content',
        meta: {
          title: '病因管理',
          role:false
        },
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
      {
        path: 'departmentManage',
        name: 'departmentManage4',
        node: 'content',
        meta: {
          title: '家族病史',
          role:false
        },
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
      {
        path: 'departmentManage',
        name: 'departmentManage5',
        node: 'content',
        meta: {
          title: '用户级别',
          role:false
        },
        component: () => import('@/pages/content/departmentManage/departmentManage.vue')
      },
      // 统计
      {
        path: 'operationalData',
        name: 'operationalData',
        node: 'count',
        meta: {
          title: '运营数据',
          role:true
        },
        component: () => import('@/pages/count/operationalData/operationalData.vue')
      },
      {
        path: 'channelManagement',
        name: 'channelManagement',
        node: 'count',
        meta: {
          title: '财务报表',
          role:true
        },
        component: () => import('@/pages/count/channelManagement/channelManagement.vue')
      },
      // 综合
      {
        path: 'administerList',
        name: 'administerList',
        node: 'setting',
        meta: {
          title: '成员设置',
          role:true
        },
        component: () => import('@/pages/setting/administerList/administerList.vue')
      },
      {
        path: 'managerSetting',
        name: 'managerSetting',
        node: 'setting',
        meta: {
          title: '成员信息修改',
          role:false
        },
        component: () => import('@/pages/setting/managerSetting/managerSetting.vue')
      },
      {
        path: 'managerSettingAdd',
        name: 'managerSettingAdd',
        node: 'setting',
        meta: {
          title: '成员信息添加',
          role:false
        },
        component: () => import('@/pages/setting/managerSetting/managerSettingAdd.vue')
      },
      {
        path: 'roleList',
        name: 'roleList',
        node: 'setting',
        meta: {
          title: '角色设置',
          role:true
        },
        component: () => import('@/pages/setting/roleList/roleList.vue')
      },
      {
        path: 'roleManageSetting',
        name: 'roleManageSetting',
        node: 'setting',
        meta: {
          title: '角色设置修改',
          role:false
        },
        component: () => import('@/pages/setting/roleList/roleManageSetting.vue')
      },
      {
        path: 'roleManagerSettingAdd',
        name: 'roleManagerSettingAdd',
        node: 'setting',
        meta: {
          title: '角色设置添加',
          role:false
        },
        component: () => import('@/pages/setting/roleList/roleManagerSettingAdd.vue')
      },
      {
        path: 'depList',
        name: 'depList',
        node: 'setting',
        meta: {
          title: '部门设置',
          role:true
        },
        component: () => import('@/pages/setting/depList/depList.vue')
      },
      {
        path: 'depManageSetting',
        name: 'depManageSetting',
        node: 'setting',
        meta: {
          title: '部门设置修改',
          role:false
        },
        component: () => import('@/pages/setting/depList/depManageSetting.vue')
      },
      {
        path: 'depManagerSettingAdd',
        name: 'depManagerSettingAdd',
        node: 'setting',
        meta: {
          title: '部门设置添加',
          role:false
        },
        component: () => import('@/pages/setting/depList/depManagerSettingAdd.vue')
      },
      {
        path: 'limitEdit',
        name: 'limitEdit',
        node: 'setting',
        meta: {
          title: '权限设置',
          role:false
        },
        component: () => import('@/pages/setting/limitEdit/limitEdit.vue')
      },
      {
        path: 'aa',
        name: 'aa4',
        node: 'setting',
        meta: {
          title: '首页轮播',
          role:false
        },
        component: () => import('@/pages/setting/aa/aa.vue')
      },
      {
        path: 'aa',
        name: 'aa5',
        node: 'setting',
        meta: {
          title: '结算设置'
        },
        component: () => import('@/pages/setting/aa/aa.vue')
      }
    ]
  }
]
