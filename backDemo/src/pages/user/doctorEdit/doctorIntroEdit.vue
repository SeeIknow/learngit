<template lang="html">
  <div class="doctorEdit detail-c-box">
    <div class="module-i">
      <el-button type="primary" plain @click="goBack()">返回</el-button>
      <p class="form-title">医生简介编辑</p>
      <div class="formContent">
        <textarea name="name" rows="8" cols="80"></textarea>
        <el-button type="primary" plain>保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
export default {
  data(){
    return{}
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
  }
}
</script>

<style lang="scss">
@import '../../../styles/detailCommon.scss';
$border-color:#00abec;
.formContent{
  border:1px solid $border-color;
  border-radius: 10px;
  padding:20px;
  box-sizing: border-box;
  margin-top:20px;
  text-align: center;
    textarea{
      width:100%;
      display: block;
      height:300px;
      padding:20px;
      margin:10px;
      box-sizing: border-box;
    }
}
</style>
