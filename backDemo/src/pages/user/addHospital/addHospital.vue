<template lang="html">
  <div class="doctorEdit detail-c-box">
    <div class="module-i">
      <el-button type="primary" plain @click="goBack()">返回</el-button>
      <p class="form-title">出诊医院管理</p>
      <div class="formContent">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="医院名称">
            <el-select v-model="form.hosId " placeholder="请选择医院" @change="searchFromThree">
              <el-option
                 v-for="item in hosList"
                 :key="item.id"
                 :label="item.hospitalName"
                 :value="item.id">
               </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="科室名称">
            <el-input v-model="form.depName" disabled></el-input>
            <el-button type="text" plain @click="selectDep">选择科室</el-button>
          </el-form-item>
          <el-form-item label="服务费">
              <el-input v-model="form.servicePrice"></el-input>
          </el-form-item>
          <el-form-item label="地址">
              <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="取号处">
              <el-input v-model="form.takeNoPlace"></el-input>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="radios2">
              <el-radio :label="1">所属医院</el-radio>
              <el-radio :label="2">默认医院</el-radio>
              <el-radio :label="3">多点执业医院</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <el-button type="primary" plain @click="setHos()">保存</el-button>
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
            <template v-for="(item,$index) in departmentTList">
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
        hosId:""
      },
      radios2:1,
      form1:{
        region:'',
        region1:''
      },
      hosList:[],
      depList:[],
      departmentTBox:[],
      departmentTBox1:[],
      depMod:false,
      departmentId:'',
      hospitalName1:'',
    }
  },
  computed:{
    ...mapGetters('order',[
      'departmentTList'
    ])
  },
  mounted(){
    this.getData();
    //console.log(this.departmentTList)
  },
  methods:{
    // 保存提交
    ...mapActions('user',[
      'getHospitalList',
      'setHospitalAdd',
    ]),
    ...mapActions('order',[
      'getOrderDepartment',
      'getOrderDepartmentThree'
    ]),
    set(){

    },
    getData(){
      this.getHospitalList().then((res)=>{
        //console.log(res.data)
        this.hosList = res.data;
      })
    },
    selectDep(){
      this.depMod = true;
    },
    closeModal(){
      this.depMod = false;
    },
    sureConfirm(){
      // //console.log(this.form1.region,this.form1.region1,this.form1.region2)
      // 循环遍历科室
      //**
      /**
       * [if description]
       * if(this.form1.region != undefined&& this.form1.region1!= undefined&& this.form1.region2 !=undefined){
         //console.log(this.departmentTBox1);
         this.departmentId = this.form1.region2
         for(let i in this.departmentTBox1){
           if(this.departmentTBox1[i].id = this.form1.region2){
             this.form.depName = this.departmentTBox1[i].departmentName
           }
         }
       }else
       */
      if(this.form1.region&& this.form1.region1){
        debugger
          this.departmentId = this.form1.region1
          console.log(this.departmentTBox)
        for(let i in this.departmentTBox){
          //console.log(this.departmentTBox);
          if(this.departmentTBox[i].id == this.form1.region1){
            this.form.depName = this.departmentTBox[i].departmentName
          }
        }
      }else{
        debugger
        //console.log(this.departmentTBox1);
          this.departmentId = this.form1.region
        for(let i in this.departmentTList){
          if(this.departmentTList[i].id == this.form1.region){
            this.form.depName = this.departmentTList[i].departmentName
          }
        }
      }
      this.depMod = false;
    },
    searchFromThree(data){
      let obj = {};
      obj = this.hosList.find((item)=>{//这里的userList就是上面遍历的数据源
          return item.id === data;//筛选出匹配数据
      });
      this.hospitalName1 = obj.hospitalName
      this.getOrderDepartment({id:data})

      // 一级二级科室为空
        this.form1.region = ''
        this.form1.region1 = ''
    },
    searchFromThis(id,type){
      ////console.log(id);
      for (var i in this.departmentTList) {
        if (this.departmentTList[i].id == id) {
          this.departmentTBox = this.departmentTList[i].departments
        }
      }
      // 重新赋值二级科室
      this.form1.region1 = ''
    },
  // 获取疾病类型
  changeValue(value,type) {
    ////console.log(value);
    this.getOrderDepartmentThree({id:value}).then((res) =>{
      this.departmentTBox1 = res.data
    })
  },
    goBack(){
        this.$router.go(-1)
    },
    setHos(){
      const data = {
          "address": this.form.address,
          "departmentId": this.departmentId,
          "departmentName":this.form.depName,
          "hospitalId": this.form.hosId ,
          "hospitalName": this.hospitalName1,
          "doctorId":this.$route.query.id,
          "hospitalType": this.radios2,
          "servicePrice": this.form.servicePrice,
          "takeNoPlace": this.form.takeNoPlace
        }
        this.setHospitalAdd(data).then(() =>{
          this.$router.replace({name:'doctorEdit',query:{id:this.$route.query.id}})
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
  border-radius: 10px;
  width:500px;
  padding:20px;
  margin:20px 0;
}
</style>
