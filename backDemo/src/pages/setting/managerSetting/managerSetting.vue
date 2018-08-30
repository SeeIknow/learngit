<template lang="html">
  <div class="managerSetting">
    <div class="button-box">
      <el-button type="danger" plain @click="deleteInfo()">删除</el-button>
      <el-button type="primary" plain @click="goBack">返回</el-button>
    </div>
    <p class="form-title">管理员设置</p>
    <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.loginname" disabled></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.phonenum"></el-input>
          </el-form-item>
          <el-form-item label="部门">
            <el-select v-model="form.deptName" placeholder="请选择" @change="bmSelect(form.deptName)">
              <el-option
                v-for="item in bmList"
                :key="item.id"
                :label="item.deptName"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="form.roleName" placeholder="请选择"  @change="roleSelect(form.roleName)">
              <el-option
                v-for="item in roleList"
                :key="item.id"
                :label="item.roleName"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-switch v-model="roleStatus"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
import {getNowFormatDate} from '@/utils'
export default {
  data(){
    return{
      form:{},
      roleStatus:'',
      roleId:'',
    }
  },
  computed:{
    ...mapGetters('setting',[
      'bmList',
      'roleList'
    ])
  },
  mounted(){

    this.form = this.$route.params;
    this.roleId = this.form.roleId
    this.deptId = this.form.deptId
    this.roleStatus = this.changeStatus(this.form.status)
      this.getData();
  },
  methods:{
    ...mapActions('setting',[
      'deleteUserInfo',
      'setUserInfo',
      'getBMlist',
      'getRolelist'
    ]),
    changeStatus(val){
      return val == 1?true:false
    },
    changeBack(val){
      return val == true?1:0
    },
    onSubmit() {
      const data ={
        "deptId": this.deptId,
        "id": this.form.id,
        "indate": getNowFormatDate(),
        "loginname":this.form.loginname ,
        "password": this.form.password,
        "phonenum": this.form.phonenum,
        "roleId": this.roleId,
        "status": this.changeBack(this.roleStatus),
        "username": this.form.username
      }
      this.setUserInfo(data).then(() =>{
        this.$router.replace({name:'administerList'})
      })
    },
    // 删除
    deleteInfo(){
      this.deleteUserInfo({id:this.form.id}).then(() =>{
        this.$message({
          message: '删除成功',
           type: 'success'
        });
        this.$router.replace({name:'administerList'})
      })
    },
    goBack(){
      this.$router.go(-1)
    },
    getData(){
      // 或者
      this.getBMlist({'id':this.form.deptId})
      this.getRolelist({'id':this.form.deptId})
    },
    bmSelect(val){
      this.deptId = val
      ////console.log(val);
      this.getRolelist({'id':val})
    },
    roleSelect(val){
      let obj = {};
      obj = this.roleList.find((item) =>{
        return item.id == val
      })
      this.roleName = obj.roleName
      this.roleId = obj.id
    }
  }
}
</script>

<style lang="scss">
@import './managerSetting.scss'
</style>
