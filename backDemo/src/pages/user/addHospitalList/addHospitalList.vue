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
              <el-radio-group v-model="baseInfo.hospitalType">
                <el-radio :label="1">所属医院</el-radio>
                <el-radio :label="2">默认医院</el-radio>
                <el-radio :label="3">多点执业医院</el-radio>
              </el-radio-group>
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
                <el-option :label="item.departmentName" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="二级科室">
          <el-select v-model="form1.region1" placeholder="请选择" @change="changeValue(form1.region1,'depMod')">
            <template v-for="(item,$index) in departmentTBox">
                <el-option :label="item.departmentName" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="三级科室">
          <el-select v-model="form1.region2" placeholder="请选择">
            <template v-for="(item,$index) in departmentTBox1">
                <el-option :label="item.departmentName" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item> -->
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
      radios2:'',
      form1:{
        region:'',
        region1:''
      },
      baseInfo:'',
      hosList:[],
      departmentId:" ",
      depMod:false,
      depList:[],
      departmentTBox:[],
      departmentTBox1:[],
      hospitalName1:'',

      department_o:{},//一级科室盒子
      department_t:{},//二级科室盒子
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
      this.getHospitalDetails({id:this.$route.query.hosId}).then((res) =>{
        this.baseInfo = res.data

        // 舒适化赋值 用户在不更改个人信息的情况下
        this.departmentId = res.data.departmentId //科室ID
        this.hospitalName1 = res.data.hospitalName
        this.hospitalId = res.data.hospitalId;

        this.getOrderDepartment({id:this.baseInfo.hospitalId})//根据医院获取一级科室
        .then((res) =>{
          this.depList = res.data;
          ////console.log(this.depList)
        })
      })
      this.getHospitalList().then((res)=>{
        ////console.log(res.data)
        this.hosList = res.data;
      })

    },
    goBack(){
        this.$router.go(-1)
    },
    selectDep(){
      this.depMod = true;
    },
    sureConfirm(){
      // //console.log(this.form1.region,this.form1.region1,this.form1.region2)
      // 循环遍历科室
      if(this.form1.region&& this.form1.region1){
        console.log(this.department_t)
          this.departmentId = this.form1.region1
          console.log(this.departmentTBox)
        this.baseInfo.departmentName = this.department_t.departmentName
      }else{
        //console.log(this.departmentTBox1);
          this.departmentId = this.form1.region
            this.baseInfo.departmentName = this.department_o.departmentName

      }
      // if(this.form1.region != undefined&& this.form1.region1!= undefined&& this.form1.region2 !=undefined){
      //   //console.log(this.departmentTBox1);
      //   this.departmentId = this.form1.region2
      //   for(let i in this.departmentTBox1){
      //     if(this.departmentTBox1[i].id = this.form1.region2){
      //       this.baseInfo.departmentName = this.departmentTBox1[i].departmentName
      //     }
      //   }
      // }else if(this.form1.region != undefined&& this.form1.region1!= undefined ){
      //     this.departmentId = this.form1.region1
      //   // for(let i in this.departmentTBox){
      //   //   //console.log(this.departmentTBox);
      //   //   if(this.departmentTBox[i].id = this.form1.region1){
      //   //     this.baseInfo.departmentName = this.departmentTBox[i].departmentName
      //   //   }
      //   // }
      //   this.baseInfo.departmentName = this.department_t.departmentName
      // }else{
      //   //console.log(this.departmentTBox1);
      //     this.departmentId = this.form1.region
      //   // for(let i in this.departmentTList){
      //   //   if(this.departmentTList[i].id = this.form1.region){
      //   //     this.baseInfo.departmentName = this.departmentTList[i].departmentName
      //   //   }
      //   // }
      //
      //   this.baseInfo.departmentName = this.department_o.departmentName
      // }
      this.depMod = false;
    },
    searchFromThree(id){
      ////console.log(id);
      let obj = {};
      obj = this.hosList.find((item)=>{//这里的userList就是上面遍历的数据源
          return item.id === id;//筛选出匹配数据
      });
      this.hospitalId = id;
      this.hospitalName1 = obj.hospitalName
      this.getOrderDepartment({id:id})//根据医院获取一级科室
      .then((res) =>{
        this.depList = res.data;
      })
    },
    deleteHos(){
      this.deleteHos({id:this.$route.query.hosId}).then(() =>{
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
          "departmentId": this.departmentId,
          "departmentName":this.baseInfo.departmentName,
          "doctorId": this.$route.query.id,
          "hospitalId": this.hospitalId,
          "hospitalName": this.hospitalName1,
          "hospitalType": this.baseInfo.hospitalType,
          "id": this.$route.query.hosId,
          "servicePrice": this.baseInfo.servicePrice,
          "takeNoPlace": this.baseInfo.takeNoPlace
        }
        this.setHospitalMange(data).then(() =>{
          this.$router.replace({name:'doctorEdit',query:{id:this.$route.query.id}})
        })
    },
    searchFromThis(id,type){
      ////console.log(id);
      let obj = {};
      obj = this.depList.find((item)=>{
          return item.id === id;
      });
      this.department_o = obj;
      this.departmentTBox = obj.departments
      // this.form1 = {}
      this.form1.region1= ''
      //console.log(this.form1.region1)
    },
  // 获取疾病类型
  changeValue(value,type) {
    ////console.log(value);
    // let obj = {};
    // obj = this.departmentTBox.find((item)=>{
    //     return item.id === value;
    // });
    for (var i in this.departmentTBox) {
      if (this.departmentTBox[i].id == value) {
        this.department_t = this.departmentTBox[i];
      }
    }

    this.getOrderDepartmentThree({id:value}).then((res) =>{
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
