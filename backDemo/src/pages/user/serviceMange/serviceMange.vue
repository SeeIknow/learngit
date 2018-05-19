<template lang="html">
  <div class="doctorEdit detail-c-box">
    <div class="module-i">
      <el-button type="primary" plain @click="goBack()">返回</el-button>
      <p class="form-title">开通服务管理</p>
      <div class="formContent">
        <p class="form-title">就诊服务价格</p>
        <el-form ref="form" :model="form" label-width="80px">
          <template v-for="(item,$index) in doctorDetail.services">
            <el-form-item :label="item.serviceItemName">
              <el-input v-model="item.serviceprice"></el-input>
              <el-switch
                v-model="switchOnOff[$index]"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
          </template>

          <!-- <el-form-item label="图文咨询">
            <el-input v-model="form.a"></el-input>
            <el-switch
              v-model="value1"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="门诊预约">
            <el-input v-model="form.b" disabled></el-input>
            <el-switch
              v-model="value2"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="手术服务">
              <el-input v-model="form.c"></el-input>
              <el-switch
                v-model="value3"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
          </el-form-item>
          <el-form-item label="住院服务">
              <el-input v-model="form.d"></el-input>
              <el-switch
                v-model="value4"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
          </el-form-item>
          <el-form-item label="远程会诊">
              <el-input v-model="form.e"></el-input>
              <el-switch
                v-model="value5"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
          </el-form-item>
          <el-form-item label="私人医生">
            <el-input v-model="form.f"></el-input>
            <el-switch
              v-model="value6"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </el-form-item> -->
        </el-form>
        <el-button type="primary" plain @click="set()">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
export default {
  data(){
    return{
      form:{
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:''
      },
      value1:true,
      value2:true,
      value3:true,
      value4:true,
      value5:true,
      value6:true,
      switchOnOff:[],
    }
  },
  computed:{
    ...mapGetters('user', [
      'doctorDetail',
    ]),
  },
  mounted(){
    for(let i in this.doctorDetail.services){
      const aa = this.changeStatus(this.doctorDetail.services[i].switchOnOff)
      this.switchOnOff.push(aa)
    }
    console.log(this.switchOnOff)
  },
  methods:{
    ...mapActions('user',[
      'setServiceMange',
    ]),
    changeStatus(val){
      const status = val == 1?true:false;
      return status
    },
    changeBack(val){
      const status = val == true?'1':'0';
      return status
    },
    // 保存提交
    set(){
      // const data = this.doctorDetail.services
      for(let i in this.doctorDetail.services){
        this.doctorDetail.services[i].switchOnOff = this.changeBack(this.switchOnOff[i])
      }
      console.log(this.doctorDetail.services);
      // return;
      this.setServiceMange({id:this.$route.params.id,data:this.doctorDetail.services}).then(() =>{
        this.$router.replace({name:'doctorEdit'})
      })
    },
    goBack(){
        this.$router.go(-1)
    }
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
