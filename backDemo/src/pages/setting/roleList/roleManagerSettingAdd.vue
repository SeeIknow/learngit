<template lang="html">
  <div class="managerSetting">
    <div class="button-box">
      <!-- <el-button type="danger" plain @click="deleteInfo()">删除</el-button> -->
      <el-button type="primary" plain @click="goBack">返回</el-button>
    </div>
    <p class="form-title">管理员设置</p>
    <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">

          <el-form-item label="部门">
            <el-select v-model="form.region" placeholder="请选择" @change="bmSelect(form.region)">
              <el-option
                v-for="item in depList"
                :key="item.id"
                :label="item.deptName"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色">
            <el-input v-model="role" placeholder="请输入角色"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-switch v-model="form.delivery"></el-switch>
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
export default {
  data(){
    return{
      form:{},
      deptId:'',
      role:''
    }
  },
  computed:{
    ...mapGetters('setting',[
      'depList',
      'roleList'
    ])
  },
  mounted(){
    this.getData();
  },
  methods:{
    ...mapActions('setting',[
      'addRoleInfo',
      'getDepList',
      'getRolelist',
      // 'deleteRoleInfo'
    ]),
    goBack(){
      this.$router.go(-1)
    },
    onSubmit() {
      const data ={
          "deptId": this.deptId,
          "roleName": this.role,
          "status": this.form.delivery == true?'1':'0'
        }
      this.addRoleInfo(data).then(() =>{
        this.$router.replace({name:'roleList'})
      })
    },
    bmSelect(val){
      this.deptId = val;
    },
    getData(){
      // 或者
      this.getDepList()
    },
    // deleteInfo(){
    //   this.deleteRoleInfo({id:this.$route.params.id}).then(() =>{
    //     this.message();
    //     this.$router.replace({name:'roleList'})
    //   })
    // }
  }
}
</script>

<style lang="scss">
@import '../managerSetting/managerSetting.scss'
</style>
