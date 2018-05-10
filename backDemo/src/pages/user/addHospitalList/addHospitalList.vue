<template lang="html">
  <div class="doctorEdit detail-c-box">
    <div class="module-i">
      <el-button type="primary" plain @click="goBack()">返回</el-button>
      <p class="form-title">出诊医院管理</p>
      <div class="formContent" >
        <div class="hospitalItem">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="医院名称">
              <!-- <el-input v-model="baseInfo.hospitalName "></el-input> -->
              <el-select v-model="baseInfo.hospitalName " placeholder="请选择医院" @change="searchFromThree(baseInfo.hospitalName)">
                <el-option
                   v-for="item in hosList"
                   :key="item.id"
                   :label="item.hospitalName"
                   :value="item.id">
                 </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="科室名称">
              <el-input v-model="baseInfo.departmentName " disabled></el-input>
              <el-button type="text" plain @click="selectDep()">选择科室</el-button>
            </el-form-item>
            <el-form-item label="服务费">
                <el-input v-model="baseInfo.servicePrice"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="baseInfo.address"></el-input>
            </el-form-item>
            <el-form-item label="取号处">
                <el-input v-model="baseInfo.takeNoPlace "></el-input>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-checkbox-group v-model="baseInfo.hospitalType ">
                <el-checkbox label="所属医院" name="type"></el-checkbox>
                <el-checkbox label="默认医院" name="type"></el-checkbox>
                <el-checkbox label="多点执业医院" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
          <el-button type="primary" plain @click="deleteHos()">删除医院</el-button>
            <el-button type="primary" plain @click="setHos()">保存</el-button>
        </div>
      </div>
    </div>
    <!--科室新增modal  -->
    <el-dialog
      :visible.sync="depMod"
      width="30%"
      center>
      <el-form ref="form1" :model="form1" label-width="110px">
        <el-form-item label="一级科室">
          <el-select v-model="form1.region" placeholder="请选择" @change="searchFromThis(form1.region,'depMod')">
            <template v-for="(item,$index) in depList">
                <el-option :label="item.departmentName" :value="item.departmentId"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="二级科室">
          <el-select v-model="form1.region1" placeholder="请选择" @change="changeValue(form1.region1,'depMod')">
            <template v-for="(item,$index) in departmentTBox">
                <el-option :label="item.departmentName" :value="item.departmentId"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="三级科室">
          <el-select v-model="form1.region2" placeholder="请选择">
            <template v-for="(item,$index) in departmentTBox1">
                <el-option :label="item.departmentName" :value="item.departmentId"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('dep')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('dep')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
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
      form1:{},
      baseInfo:'',
      hosList:[],
      departMentId:"",
      depMod:false,
      depList:[],
      departmentTBox:[],
      departmentTBox1:[],
    }
  },
  computed:{
    ...mapGetters('user', [
      'doctorDetail',
    ]),
  },
  mounted(){
    this.getData();
  },
  methods:{
    ...mapActions('user',[
      'setHospitalMange',
      'getHospitalList',
      'getHospitalDetails',
      'deleteHos'
    ]),
    ...mapActions('order',[
      'getOrderDepartment',
      'getOrderDepartmentThree'
    ]),
    getData(){
      this.getHospitalDetails({id:this.$route.params.hosId}).then((res) =>{
        this.baseInfo = res.data
        this.departMentId = res.data.departmentId //科室ID
      })
      this.getHospitalList().then((res)=>{
        console.log(res.data)
        this.hosList = res.data;
      })
      this.getOrderDepartment({id:this.$route.params.hosId})//根据医院获取一级科室
      .then((res) =>{
        this.depList = res.data;
        console.log(this.depList)
      })
    },
    goBack(){
        this.$router.go(-1)
    },
    selectDep(){
      this.depMod = true;
    },
    searchFromThree(id){
      console.log(id);
      this.getOrderDepartment({id:id})//根据医院获取一级科室
      .then((res) =>{
        this.depList = res.data;
      })
    },
    deleteHos(){
      this.deleteHos({id:this.$route.params.hosId}).then(() =>{
        this.$message({
          message: '删除成功',
          type: 'success'
        });
        setTimeout(()=>{
          this.$router.replace({name:'doctorEdit'})
        },2000)
      })
    },
    setHos(){
      const data = {
          "address": this.baseInfo.address,
          "departmentId": this.baseInfo.departmentId,
          "departmentName":this.baseInfo.departmentName,
          "doctorId": this.doctorId,
          "hospitalId": baseInfo.hospitalName,
          "hospitalName": this.hospitalName,
          "hospitalType": this.hospitalType,
          "id": this.baseInfo.id,
          "servicePrice": this.baseInfo.servicePrice,
          "takeNoPlace": this.baseInfo.takeNoPlace
        }
        this.setHospitalMange(data).then(() =>{
          this.$router.replace({name:'doctorEdit'})
        })
    },
    searchFromThis(id,type){
      console.log(id);
      for (var i in this.depList) {
        if (this.depList[i].departmentId == id) {
          this.diseasesBox = this.depList[i].diseases
        }
      }
    },
  // 获取疾病类型
  changeValue(value,type) {
    console.log(value);
    let obj = {};
    obj = this.diseasesBox.find((item)=>{
        return item.id === value;
    });
    this.getOrderDepartmentThree({id:obj.id}).then((res) =>{
      this.departmentTBox1 = res.data
    })
  },
}
}
</script>

<style lang="scss">
@import '../../../styles/detailCommon.scss';
$border-color:#00abec;
.formContent{
  border:1px solid $border-color;
  .hospitalItem{
    width:440px;
    margin:20px;
  }

  border-radius: 10px;
    textarea{
      width:400px;
      height:300px;
      padding:20px;
    }
}
</style>
