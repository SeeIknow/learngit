<template lang="html">
  <div class="managerSetting">
    <div class="button-box">
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
      form:{},
      obj:{},
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
      'AddDepInfo'
    ]),
    onSubmit() {
      const data ={
          "deptName": this.obj.deptName,
          "id": this.obj.id,
          "status": this.form.delivery == true? '1':'0'
        }
      this.AddDepInfo(data).then(() =>{
        this.$router.replace({name:'depList'})
      })
    },
    bmSelect(val){
      //console.log(val);
      this.obj = this.depList.find((item) =>{
        return item.id == val
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
