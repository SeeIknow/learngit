<template lang="html">
  <div class="managerSetting">
    <div class="button-box">
      <el-button type="danger" plain @click="deleteInfo()">删除</el-button>
      <el-button type="primary" plain @click="goBack">返回</el-button>
    </div>
    <p class="form-title">角色设置</p>
    <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">

          <el-form-item label="部门">
            <el-select v-model="form.deptName" placeholder="请选择" @change="bmSelect(form.deptName)">
              <el-option
                v-for="item in depList"
                :key="item.id"
                :label="item.deptName"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色">
            <el-input v-model="form.roleName" placeholder="请输入角色"></el-input>
          </el-form-item>
          <el-form-item label="权限">
              <el-button type="text" @click="select">查看并修改</el-button>
          </el-form-item>
          <el-form-item label="状态">
            <el-switch v-model="form.status"></el-switch>
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
      form:{
        // status:false
      }
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
    this.form = this.$route.query
    this.deptId = this.form.deptId
    //console.log(this.form);
    this.change1()
  },
  methods:{
    ...mapActions('setting',[
      'setRoleInfo',
      'deleteRoleInfo',
      'getDepList',
      'getRolelist',
    ]),
    goBack(){
      this.$router.go(-1)
    },
    change1(){
      if(this.form.status == 0){
          this.form.status =false
      }else{
        this.form.status =true
      }
    },
    onSubmit() {
      const data ={
          "deptId": this.deptId,
          "id": this.form.id,
          "refId":this.form.refId,
          "roleName": this.form.roleName,
          "status": this.form.status == true?'1':'0'
        }
      this.setRoleInfo(data).then(() =>{
        this.$router.replace({name:'roleList'})
      })
    },
    bmSelect(val){
      this.deptId = val;
      this.getRolelist({'id':val})
    },
    // 删除
    deleteInfo(){
      this.deleteRoleInfo({id:this.$route.query.id}).then(() =>{
        this.$message({
          message:'修改成功',
          type:'success'
        });
        this.$router.replace({name:'roleList'})
      })
    },
    getData(){
      this.getDepList();
    },
    select(){
      this.$router.push({name:'limitEdit',query:this.form})
    }
  }
}
</script>

<style lang="scss">
@import '../managerSetting/managerSetting.scss'
</style>
