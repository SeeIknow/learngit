<template lang="html">
  <div class="managerSetting">
    <div class="button-box">
      <el-button type="danger" plain @click="deleteInfo()">删除</el-button>
      <el-button type="primary" plain @click="goBack">返回</el-button>
    </div>
    <p class="form-title">部门设置</p>
    <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="部门名称">
            <el-input v-model="info.deptName" placeholder="请输入部门"></el-input>
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
      form:{
        delivery:false
      },
      obj:{},
      info:''
    }
  },
  computed:{
    ...mapGetters('setting',[
      'depList'
    ])
  },
  mounted(){
    this.info = this.$route.query.table
    //console.log(this.info)
    this.change1()
  },
  methods:{
    ...mapActions('setting',[
      'getDepList',
      'setDepInfo',
      'deleteDepInfo',
    ]),
    goBack(){
      this.$router.go(-1)
    },
    change1(){
      if(this.info.status == 0){
          this.form.delivery =false
      }else{
        this.form.delivery =true
      }

    },
    onSubmit() {
      const data ={
          "deptName": this.info.deptName,
          "id": this.info.id,
          "status": this.form.delivery == true? '1':'0'
        }
      this.setDepInfo(data).then(() =>{
        this.$router.replace({name:'depList'})
      })
    },
    bmSelect(val){
      ////console.log(val);
      this.obj = this.depList.find((item) =>{
        return item.id == val
      })
    },
    // 删除
    deleteInfo(){
      this.deleteDepInfo({id:this.$route.query.table.id}).then(() =>{
        this.$message({
          type:'success',
          massage:'删除成功'
        });
        this.$router.replace({name:'depList'})
      })
    },
  }
}
</script>

<style lang="scss">
@import '../managerSetting/managerSetting.scss'
</style>
