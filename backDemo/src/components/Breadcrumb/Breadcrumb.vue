<template lang="html">
  <div class="bread">
    <el-breadcrumb separator-class="el-icon-arrow-right" >
      <el-breadcrumb-item >{{$store.state.firstMenu}}</el-breadcrumb-item>
        <el-breadcrumb-item >{{$store.state.secondMenuu}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data(){
    return{
      secondMenuu:'',
      firstMenu:'',
    }
  },
}
</script>

<style lang="css">
.bread{
  padding:10px 40px;
  border-bottom:1px solid #eee;
  margin:0 40px;
}
.el-breadcrumb{
  font-size:20px!important;
}
</style>
