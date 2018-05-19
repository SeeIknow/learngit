<template lang="html">
  <div class="detail-c-box">
    <p class="form-title">管理员设置</p>
    <div class="module-i">
      <p class="role-b-top">
        <span>角色名称：{{$route.params.roleName}}</span>
        <span>所属部门：{{$route.params.deptName}}</span>
      </p>
      <div class="limit-outer-box">
        <!-- 操作功能权限 -->
        <div class="limit-item">
          <p class="limit-title">操作功能权限</p>
          <div class="limit-inner-box">
            <template v-for="(item,$index) in limitsListBySeletc.operationInfo">
              <el-checkbox :checked="item.BView == 0?false:true" v-model="item.BView">{{item.operationName}}</el-checkbox>
            </template>
            <!-- <el-checkbox-group v-model="checkboxGroup1" size="small">
              <el-checkbox label="创建" border></el-checkbox>
              <el-checkbox label="编辑" border></el-checkbox>
              <el-checkbox label="删除" border></el-checkbox>
              <el-checkbox label="查看" border></el-checkbox>
            </el-checkbox-group> -->
          </div>
        </div>
        <template v-for="(item,$index) in limitsListBySeletc.menuInfo">
          <!-- 订单管理 -->
          <div class="limit-item">
            <p class="limit-title">{{item.menuName}}</p>
            <div class="limit-inner-box">
              <template v-for="(item1,$index1) in item.childrenMenuInfo">
                <el-checkbox v-model="item1.BView" :checked="item.BView == 0?false:true">{{item1.menuName}}</el-checkbox>
              </template>
            </div>
          </div>
        </template>

        <!-- 订单管理 -->
        <!-- <div class="limit-item">
          <p class="limit-title">订单管理</p>
          <div class="limit-inner-box">
            <el-checkbox-group v-model="checkboxGroup2" size="small">
              <el-checkbox label="疾病救助" border></el-checkbox>
              <el-checkbox label="体检服务" border></el-checkbox>
              <el-checkbox label="图文咨询" border></el-checkbox>
              <el-checkbox label="门诊预约" border></el-checkbox>
              <el-checkbox label="就诊服务" border></el-checkbox>
              <el-checkbox label="远程会诊" border></el-checkbox>
              <el-checkbox label="陪诊服务" border></el-checkbox>
              <el-checkbox label="私人医生" border></el-checkbox>
              <el-checkbox label="会员服务" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>

        <!-- 用户管理 -->
        <!-- <div class="limit-item">
          <p class="limit-title">用户管理</p>
          <div class="limit-inner-box">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
              <el-checkbox label="会员管理" border></el-checkbox>
              <el-checkbox label="医生管理" border></el-checkbox>
              <el-checkbox label="医学中心" border></el-checkbox>
              <el-checkbox label="渠道管理" border></el-checkbox>
              <el-checkbox label="基金会" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div> -->
        <!-- 内容管理 -->
        <!-- <div class="limit-item">
          <p class="limit-title">内容管理</p>
          <div class="limit-inner-box">
            <el-checkbox-group v-model="checkboxGroup4" size="small">
              <el-checkbox label="科室管理" border></el-checkbox>
              <el-checkbox label="疾病管理" border></el-checkbox>
              <el-checkbox label="针状管理" border></el-checkbox>
              <el-checkbox label="病因管理" border></el-checkbox>
              <el-checkbox label="家族病史" border></el-checkbox>
              <el-checkbox label="用户级别" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div> -->
        <!-- 统计管理 -->
        <!-- <div class="limit-item">
          <p class="limit-title">统计管理</p>
          <div class="limit-inner-box">
            <el-checkbox-group v-model="checkboxGroup5" size="small">
              <el-checkbox label="运营数据" border></el-checkbox>
              <el-checkbox label="财务报表" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div> -->
      </div>
      <el-button type="primary" style="margin:20px auto;display:block;" @click="commitInfo()">保存</el-button>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return{
      checkboxGroup1:[],
      checkboxGroup2:[],
      checkboxGroup3:[],
      checkboxGroup4:[],
      checkboxGroup5:[]
    }
  },
  computed:{
    ...mapGetters('setting',[
      'limitsListBySeletc'
    ])
  },
  mounted(){
    this.getData();
    //console.log(this.$route.params);
    //console.log(this.limitsListBySeletc)
  },
  methods:{
    ...mapActions('setting',[
      'setLimitsBySelectUser',
      'getLimitsBySelectUser'
    ]),
    getData(){
      const data = {
        roleId:this.$route.params.refId,
        deptId:this.$route.params.deptId
      }
      this.getLimitsBySelectUser(data)
    },
    commitInfo(){
      // this.limitsListBySeletc.roleId = this.$route.params.refId;
      // this.limitsListBySeletc.deptId = this.$route.params.deptId;
      // 循环遍历操作菜单
      const menuArr = [],
            operationArr = [];
      for(let i in this.limitsListBySeletc.operationInfo){
        if(this.limitsListBySeletc.operationInfo[i].BView == true){
          operationArr.push(this.limitsListBySeletc.operationInfo[i].id)
        }
      }
      for(let i in this.limitsListBySeletc.menuInfo){
        for(let j in this.limitsListBySeletc.menuInfo[i].childrenMenuInfo){
          if(this.limitsListBySeletc.menuInfo[i].childrenMenuInfo[j].BView == true){
            menuArr.push(this.limitsListBySeletc.menuInfo[i].childrenMenuInfo[j].id)
          }
        }
      }

      //console.log(menuArr);
      const data = {
        roleId:this.$route.params.refId,
        deptId:this.$route.params.deptId,
        menuInfo:menuArr,
        operationInfo:operationArr
      }
      this.setLimitsBySelectUser(data)
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/detailCommon.scss';
 @import './limitEdit.scss'
</style>
