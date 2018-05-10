<template lang="html">
  <div class="managerSetting">
    <div class="button-box">
      <el-button type="danger" plain @click="deleteInfo()">删除</el-button>
      <el-button type="primary" plain>返回</el-button>
    </div>
    <p class="form-title">部门设置</p>
    <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="部门名称">
            <el-select v-model="form.region" placeholder="请选择" @change="bmSelect(form.region)">
              <el-option
                v-for="item in depList"
                :key="item.id"
                :label="item.deptName"
                :value="item.id">
              </el-option>
            </el-select>
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
      form:{}
    }
  },
  computed:{
    ...mapGetters('setting',[
      'depList'
    ])
  },
  mounted(){
    this.getData();
  },
  methods:{
    ...mapActions('setting',[
      'getDepList',
      'setDepInfo'
    ]),
    onSubmit() {
      const data ={
          "deptName": "string",
          "id": 0,
          "status": 0
        }
      this.setDepInfo(data).then(() =>{
        this.$router.replace({name:'depList'})
      })
    },
    // 删除
    deleteInfo(){
      this.deleteRoleInfo({id:this.$route.params.id}).then(() =>{
        this.message();
        this.$router.replace({name:'depList'})
      })
    },
    getData(){
      this.getDepList();
    },
  }
}
</script>

<style lang="scss">
@import '../managerSetting/managerSetting.scss'
</style>
