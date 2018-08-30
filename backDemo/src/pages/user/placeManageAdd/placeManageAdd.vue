<template lang="html">
  <div class="memberEdit detail-c-box">
    <div class="module-i">
      <el-button type="primary" plain @click="goBack()">返回</el-button>
      <p class="form-title">渠道编辑</p>
      <div class="module-i">
        <p class="module-i-title">基本信息</p>
        <div class="form-box info">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="渠道名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="公司名称">
              <el-input v-model="form.companyName"></el-input>
            </el-form-item>
            <el-form-item label="所在地区">
              <el-select v-model="form.province" placeholder="请选择省" @change="provinceSelect(form.province)">
                <el-option
                  v-for="item in provinceList"
                  :key="item.id"
                  :label="item.provinceName"
                  :value="item.id">
                </el-option>
              </el-select>
              <el-select v-model="form.city" placeholder="请选择市" @change="citySelect(form.city)">
                <el-option
                  v-for="item in cityList"
                  :key="item.id"
                  :label="item.cityName"
                  :value="item.id">
                </el-option>
              </el-select>
              <el-select v-model="form.area" placeholder="请选择区">
                <el-option
                  v-for="item in areaList"
                  :key="item.id"
                  :label="item.districtName"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="form.patientName"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="form.phoneNum"></el-input>
            </el-form-item>
            <el-form-item label="邮箱地址">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            </el-form>
          </div>
        </div>
        <el-button type="primary" plain class="prymaryBtn set" @click="commitInfo()">保存</el-button>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
export default {
  data(){
    return {
      form:{
        area:'',
        city:'',
        province:''
      },
      provinceList:[],
      cityList:[],
      areaList:[],
    }
  },
  computed:{
    ...mapGetters('user', [
      'doctorOffice',
    ]),
  },
  mounted(){
    this.getData();
  },
  methods:{
    ...mapActions('user', [
      'postProvinces',
      'postDistricts',
      'postCitys',
      'postAddchannel'
    ]),
    // 校验检查
    examineValue(){
      if(!this.form.name){
        this.$message({
          type:'error',
          message:'医生姓名不能为空！'
        })
        return false
      }
      if(!this.form.hospitalName){
        this.$message({
          type:'error',
          message:'医院不能为空！'
        })
        return false
      }
      if(!this.form1.name){
        this.$message({
          type:'error',
          message:'账户不能为空！'
        })
      return false
      }
      if(!this.form1.password){
        this.$message({
          type:'error',
          message:'密码不能为空！'
        })
        return false
      }
      return true
    },
    getData(){
      this.postProvinces().then((res) =>{
        this.provinceList = res.data
      });
    },
    // 省市区三级联动
    provinceSelect(val){
      //
      this.postCitys({id:val}).then((res) =>{
        // 渲染 市
        this.form.city = ''
        this.form.area = ''
        this.cityList = []
        this.areaList = []
        this.cityList = res.data
      })
    },
    citySelect(val){
      this.postDistricts({id:val}).then((res) =>{
        // 渲染 地区
        this.form.area = ''
        this.areaList = []
        this.areaList = res.data
      })
    },
    areaSelect(val){

    },
    // 提交保存个人信息
    commitInfo(){
      // 校验信息是否为空
      // if(!this.examineValue()){
      //   return
      // }
      ////console.log(diseaseIds);
      const data = {
        "channelName": this.form.name,
        "cityId": this.form.city,
        "companyName": this.form.companyName,
        "contact": this.form.patientName,
        "contactPhoneNum": this.form.phoneNum,
        "districtId": this.form.area,
        "email": this.form.email,
        "provinceId": this.form.province
        }
      this.postAddchannel(data).then((res) =>{
        this.$message({
          type:'success',
          message:'添加成功'
        })
        this.$router.replace({name:'placeManage'})
      })
    },
    goBack(){
      this.$router.go(-1)
    },
  }
}
</script>

<style lang="scss">
@import '../../../styles/detailCommon.scss';
$border-color:#eee;
.introContent{
  width:600px;
  height:300px;
  border-radius:10px;
  overflow-y: scroll;
  border:1px solid $border-color;
  padding:20px;

}
.prymaryBtn{
  margin-top:20px;
}
.info{
  position:relative;
}
.peopleImg{
  position: absolute;
  right:-300px;
  top:20px;
  text-align: center;
  img{
    width:100px;
    height:100px;
    border-radius: 50%;
    border:1px solid $border-color;
    display:block;
    margin:10px auto;
  }
  .el-button--primary{
    margin: 0 auto;
    margin-left:100px;
  }
}
.set{
  margin:20px auto;
  display: block;
}
</style>
