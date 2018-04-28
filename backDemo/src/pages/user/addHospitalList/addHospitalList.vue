<template lang="html">
  <div class="doctorEdit detail-c-box">
    <div class="module-i">
      <el-button type="primary" plain @click="goBack()">返回</el-button>
      <p class="form-title">出诊医院管理</p>
      <div class="formContent" v-for="(item,$index) in hospitalList">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="医院名称">
            <el-input v-model="form.hosName"></el-input>
          </el-form-item>
          <el-form-item label="科室名称">
            <el-input v-model="form.depName" disabled></el-input>
            <el-button type="text" plain>选择科室</el-button>
          </el-form-item>
          <el-form-item label="服务费">
              <el-input v-model="form.serviceAmount"></el-input>
          </el-form-item>
          <el-form-item label="地址">
              <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="取号处">
              <el-input v-model="form.number"></el-input>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="所属医院" name="type"></el-checkbox>
              <el-checkbox label="默认医院" name="type"></el-checkbox>
              <el-checkbox label="多点执业医院" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <el-button type="primary" plain @click="deleteHos()">删除医院</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      form:{
        hosName:'',
        depName:'',
        number:'',
        address:'',
        type:[],
      },
      hospitalList:[],
    }
  },
  methods:{
    // 保存提交
    set(){

    },
    goBack(){
        this.$router.go(-1)
    },
    deleteHos(){}
  }
}
</script>

<style lang="scss">
@import '../../../styles/detailCommon.scss';
$border-color:#00abec;
.formContent{
  border:1px solid $border-color;
  border-radius: 10px;
    textarea{
      width:400px;
      height:300px;
      padding:20px;
    }
}
</style>
