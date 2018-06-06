<template lang="html">
  <div class="memberEdit detail-c-box">
    <div class="module-i">
      <el-button type="primary" plain @click="goBack()">返回</el-button>
      <p class="form-title">会员编辑</p>
      <div class="module-i">
        <p class="module-i-title">基本信息</p>
        <div class="form-box info">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="医生姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="会员性别">
              <el-radio-group v-model="form.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="医院">
              <el-select v-model="form.hospitalName" placeholder="请选择" @change="hosChange(form.hospitalName)">
                <el-option
                  v-for="item in hospitalList"
                  :key="item.id"
                  :label="item.hospitalName"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="一级科室">
              <el-select v-model="form.departmentName" placeholder="请选择" @change="seletDep(form.departmentName)">
                <el-option
                  v-for="item in departmentTList"
                  :key="item.id"
                  :label="item.departmentName"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="二级科室">
              <el-select v-model="form.dep" placeholder="请选择" @change="depTwoChange(form.dep)">
                <el-option
                  v-for="item in depBox"
                  :key="item.id"
                  :label="item.departmentName"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职称">
              <el-select v-model="form.positionName " placeholder="请选择">
                <el-option
                  v-for="item in doctorOffice"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="医生级别">
              <el-select v-model="form.doctorLevel " placeholder="请选择">
                <el-option
                  v-for="item in doctorLevel"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="医生性质">
              <el-radio v-model="radio" label="1">内部</el-radio>
              <el-radio v-model="radio" label="0">外部</el-radio>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="form.phoneNum"></el-input>
            </el-form-item>
          </el-form>
          <div class="peopleImg">
            <img :src="images[0]" alt="">
            <el-button type="primary" >点击上传</el-button>
            <input  type="file" name="点击上传" @change="upload" style="opacity:0;margin-left:-130px;z-index:1000" id="photo">
          </div>
        </div>
        </div>
        <!--  -->
        <div class="module-i">
          <p class="module-i-title">账户信息</p>
          <div class="form-box">
            <el-form ref="form1" :model="form1" label-width="80px">
              <el-form-item label="账户名">
                <el-input v-model="form1.name"></el-input>
              </el-form-item>
              <el-form-item label="账户密码">
                <el-input v-model="form1.password"></el-input>
              </el-form-item>
              <el-form-item label="医学助理">
                <el-input v-model="assistant" :disabled="true" placeholder="请选择"></el-input>
                <el-button type="text" @click="openUserAlt('user')">更改</el-button>
              </el-form-item>
              <el-form-item label="审核状态">
                <el-input v-model="form1.checkStatus == false?'未审核':'已审核'" :disabled="true"></el-input>
                <el-switch v-model="form1.checkStatus"></el-switch>
              </el-form-item>
              <el-form-item label="冻结状态">
                <el-input v-model="form1.blockingStatus== false?'未锁定':'已锁定'" :disabled="true"></el-input>
                <el-switch v-model="form1.blockingStatus"></el-switch>
              </el-form-item>
              <!-- <el-form-item label="注册时间">
                <el-input v-model="form.name" ></el-input>
              </el-form-item>
              <el-form-item label="来源渠道">
                <el-input v-model="form.name"></el-input>
              </el-form-item> -->
            </el-form>
          </div>
        </div>
        <!--  -->
        <div class="module-i">
          <p class="module-i-title">擅长治疗</p>
          <div class="form-box">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags1"
              closable
              :disable-transitions="false"
              @close="handleClose(tag,0)">
              {{tag.diseaseName}}
            </el-tag>
            <el-button type="text" @click="openUserAlt('disease')">添加擅长疾病</el-button>
          </div>
        </div>

        <div class="module-i">
          <p class="module-i-title">社会标签</p>
          <div class="form-box">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag,1)">
              {{tag}}
            </el-tag>
            <el-button type="text" @click="openUserAlt('label')">添加社会标签</el-button>
          </div>
        </div>
        <div class="module-i doctorIntro">
          <p class="module-i-title">医生简介</p>
          <div class="form-box">
            <textarea class="introContent" :disabled="editStatus" v-model="dcoInfomation">
            </textarea>
            <el-button type="primary" plain class="prymaryBtn" @click="doctorIntro()">编辑简介</el-button>
          </div>
        </div>
        <!-- 出诊医院 -->
        <!-- <div class="module-i hospitalZ">
          <p class="module-i-title">出诊医院</p>
          <div class="form-box table">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="name"
                label="医院名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="科室名称">
              </el-table-column>
              <el-table-column
                prop="address"
                label="门诊费用">
              </el-table-column>
              <el-table-column
                prop="address"
                label="出诊类型">
              </el-table-column>
              <el-table-column
                prop="address"
                label="取号地址">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
              <el-table-column
                prop="address"
                label="出诊类型">
              </el-table-column>
            </el-table>
            <el-button type="primary" plain class="prymaryBtn" @click="addHospitalList()">医院管理</el-button>
          </div>
        </div>

        <div class="module-i doctorIntro">
          <p class="module-i-title">就诊服务价格</p>
          <div class="form-box table">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="服务"
                width="300">
              </el-table-column>
              <el-table-column
                prop="name"
                label="价格"
                width="200">
              </el-table-column>
              <el-table-column
                prop="address"
                label="开通状态">
              </el-table-column>
            </el-table>
            <el-button type="primary" plain class="prymaryBtn" @click="serviceMange()">服务管理</el-button>
          </div>
        </div> -->
        <el-button type="primary" plain class="prymaryBtn set" @click="commitInfo()">保存</el-button>
  </div>


  <!--弹框组件  -->

  <el-dialog
    :visible.sync="userSelectAlt"
    width="30%"
    center>
    <el-form ref="form2" :model="form2" label-width="110px">
      <el-form-item label="选择商务人员">
        <el-select v-model="form2.region" placeholder="请选择商务人员">
          <template v-for="(item,$index) in medicalAssitant">
              <el-option :label="item.username" :value="item.id"></el-option>
          </template>
          <!-- <el-option
            v-for="item in medicalAssitant"
            :key="item.id"
            :label="item.username"
            :value="item.id">
          </el-option> -->
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeUserAlt('user')">取 消</el-button>
      <el-button type="primary" @click="sureAlt('user')">确 定</el-button>
    </span>
  </el-dialog>
  <!-- 擅长疾病 -->
  <el-dialog
    :visible.sync="diseaseSelectAlt"
    width="30%"
    center>
    <el-form ref="form" :model="form" label-width="110px">
      <el-form-item label="一级疾病(必选)">
        <el-select v-model="form.region" placeholder="请选择一级疾病" @change="searchFromThis(form.region)">
          <template v-for="(item,$index) in diseaseTypeList">
              <el-option :label="item.name" :value="item.id"></el-option>
          </template>
          <!-- <el-option
            v-for="item in diseaseTypeList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option> -->
        </el-select>
      </el-form-item>
      <el-form-item label="二级疾病(可选)">
        <el-select v-model="form.region1" placeholder="请选择二级疾病" @change="changeValue(form.region1)">
          <template v-for="(item,$index) in diseasesBox">
              <el-option :label="item.name" :value="item.id"></el-option>
          </template>
           <!-- <el-option
              v-for="item in diseasesBox"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option> -->
        </el-select>
      </el-form-item>
      <el-form-item label="三级疾病(可选)">
        <el-select v-model="form.region3" placeholder="请选择三级疾病" @change="searchFromThree(form.region3)">
          <template v-for="(item,$index) in depList_three">
              <el-option :label="item.diseaseTypeName" :value="item.id"></el-option>
          </template>
          <!-- <el-option
             v-for="item in depList_three"
             :key="item.id"
             :label="item.diseaseTypeName"
             :value="item.id">
           </el-option> -->
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeUserAlt('disease')">取 消</el-button>
      <el-button type="primary" @click="sureAlt('disease')">确 定</el-button>
    </span>
  </el-dialog>
  <!--  社会标签-->
  <el-dialog
    :visible.sync="labelSelectAlt"
    width="30%"
    center>
    <el-form ref="form3" :model="form3" label-width="110px">
      <el-form-item label="添加标签名">
        <el-input v-model="labelInput" placeholder="请输入内容"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeUserAlt('label')">取 消</el-button>
      <el-button type="primary" @click="sureAlt('label')">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
export default {
  data(){
    return {
      dynamicTags:[],
      dynamicTags1:[],
      form:{
        region1:'',
        region3:'',
        region:'',
        dep:'',
        departmentName:''
      },
      form1:{
        blockingStatus:false,
        checkStatus:false,
      },
      form2:{},
      form3:{},
      tableData:[],
      // 用户弹窗
      userSelectAlt:false,
      diseaseSelectAlt:false,
      labelSelectAlt:false,
      diseasesBox:[],//二级疾病盒子
      editStatus:false,//医生编辑盒子状态
      //标签输入框
      labelInput:'',
      obj1:{},
      obj2:{},
      obj3:{},
      dcoInfomation:'',
      assistant:'',
      assistantId:'',
      hospitalList:[],
      hospitalId:'',
      departmentId:'',
      images:[],
      files:'',
      position:'',
      doctorLevel1:'',
      radio:'1',
      depBox:[],
    }
  },
  computed:{
    ...mapGetters('user', [
      'doctorOffice',
      'doctorLevel',
      'medicalAssitant',
    ]),
    ...mapGetters('order', [
      'diseaseTypeList',
      'depList_three',
      'departmentTList',
    ])
  },
  mounted(){
    this.getData();
  },
  methods:{
    ...mapActions('user', [
      'getDoctorOffice',
      'getDoctorLevel',
      'getMedicalAssitant',
      'getMedicalAssitant',
      'setDoctorInfo',
      'getHospitalList',
      'uploadPhoto'
    ]),
    ...mapActions('order', [
      'getOrderDiseaseType',
      'getOrderDepartment',
      'getOrderDepartmentThree'
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
    handleClose(tag,type) {
      if(type == 1){
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }else{
        this.dynamicTags1.splice(this.dynamicTags1.indexOf(tag), 1);
      }
    },
    onFileChange(e) {
        this.files = e.target.files || e.dataTransfer.files;
        if (!this.files.length)return;
        this.createImage(this.files);

    },
    seletDep(val){
      let obj ={};
      obj = this.departmentTList.find((item) =>{
        return item.id == val
      })
      this.form.dep = '';
      this.depBox = obj.departments
    },
    createImage(file) {
        if(typeof FileReader==='undefined'){
            alert('您的浏览器不支持图片上传，请升级您的浏览器');
            return false;
        }
        var image = new Image();
        var vm = this;
        var leng=file.length;
        for(var i=0;i<leng;i++){
            var reader = new FileReader();
            reader.readAsDataURL(file[i]);
            reader.onload =function(e){
            vm.images.push(e.target.result);
            };
        }
        ////console.log(this.images);
    },
    getData(){
      this.getDoctorOffice();
      this.getDoctorLevel()
      this.getMedicalAssitant()

      this.getOrderDiseaseType()
      this.getHospitalList().then((res) =>{
        this.hospitalList = res.data;
      })
    },
    hosChange(val){
      this.hospitalId = val
      this.getOrderDepartment({id:val})
      this.form.departmentName = '';
      this.form.dep = ''
      ////console.log(this.departmentTList)
    },
    // 弹框
    closeUserAlt(val){
      switch(val){
        case 'user':
          this.userSelectAlt= false;
          break;
        case 'disease':
          this.diseaseSelectAlt= false;
          break;
        case 'label':
          this.labelSelectAlt= false;
          break;
      }
    },
    openUserAlt(val){
      switch(val){
        case 'user':
          this.userSelectAlt= true;
          break;
        case 'disease':
          this.diseaseSelectAlt= true;
          break;
        case 'label':
          this.labelSelectAlt= true;
          break;
      }
    },
    sureAlt(val){
      switch(val){
        case 'user':
          /**
           * 便利医学助理列表 选出选中的username
           * 重新赋值
           * @type {Object}
           */
          let obj = {};
          obj = this.medicalAssitant.find((item)=>{//这里的userList就是上面遍历的数据源
              return item.id === this.form2.region;//筛选出匹配数据
          });
          ////console.log(obj);
          this.assistant = obj.username
          this.assistantId = obj.id;
          this.userSelectAlt= false;
          break;
        case 'disease':
        //点击确定 添加三级疾病
          if(!this.isEmptyObject(this.obj1)&&this.isEmptyObject(this.obj2)&&this.isEmptyObject(this.obj3)){
            this.dynamicTags1.push(this.obj1)
          }else if(!this.isEmptyObject(this.obj1)&&!this.isEmptyObject(this.obj2)&&this.isEmptyObject(this.obj3)){
            this.dynamicTags1.push(this.obj1,this.obj2)
          }else if(!this.isEmptyObject(this.obj1)&&!this.isEmptyObject(this.obj2)&&!this.isEmptyObject(this.obj3)){
            this.dynamicTags1.push(this.obj1,this.obj2,this.obj3)
          }

          this.diseaseSelectAlt= false;
          break;
        case 'label':
          /**
           * 添加社会标签
           * labelInput
           * 填充页面
           * dynamicTags为标签盒子
           * @type {Boolean}
           */
          this.dynamicTags.push(this.labelInput)
          this.labelSelectAlt= false;
          this.labelInput = '';
          break;
      }
    },
    // 医生简介
    doctorIntro(){
      this.editStatus = true;
    },
    // 判断对象是否为空
    isEmptyObject(obj) {
      for (var key in obj) {
      return false;
      }
      return true;
    },
    //科室
    searchFromThis(id){
      ////console.log(id);
      this.obj1 = {}
      for (var i in this.diseaseTypeList) {
        if (this.diseaseTypeList[i].id == id) {
          //一级疾病
          this.obj1.diseaseName = this.diseaseTypeList[i].name;
          this.obj1.diseaseId = this.diseaseTypeList[i].id;
          this.diseasesBox = this.diseaseTypeList[i].diseases
        }
      }
      // 二级三级问题赋值为空
      this.form.region3 = '';
      this.form.region1 = '';
      this.obj2 = {};
      this.obj3 = {};

    },
    // 获取疾病类型
    changeValue(value) {
      ////console.log(value);
        for (var i in this.diseasesBox) {
          if (this.diseasesBox[i].id == value) {
            // 二级疾病
            this.obj2.diseaseName = this.diseasesBox[i].name
            this.obj2.diseaseId = this.diseasesBox[i].id;
          }
        }
        // 三级疾病赋值为空
      this.form.region3 = '';
      this.obj3 = {};
      this.getOrderDepartmentThree({id:value})
    },
    // 获取疾病类型三级
    searchFromThree(value) {
      ////console.log(value);
        for (var i in this.depList_three) {
          if (this.depList_three[i].id == value) {
            // 三级级疾病
            this.obj3.diseaseName = this.depList_three[i].diseaseTypeName
            this.obj3.diseaseId = this.depList_three[i].id;
          }
        }
    },
    // 提交保存个人信息
    commitInfo(){
      // 校验信息是否为空
      if(!this.examineValue()){
        return
      }
      //疾病ID数组过滤
      const diseaseIds = this.dynamicTags1.map((i) =>{
        return i.diseaseId
      })
      // 解析职称
      for(let i in this.doctorOffice){
        if(this.doctorOffice[i].value == this.form.positionName){
          this.position = this.doctorOffice[i].label
        }
      }
      // 解析级别
      for(let i in this.doctorLevel){
        if(this.doctorLevel[i].value == this.form.doctorLevel){
          this.doctorLevel1 = this.doctorLevel[i].label
        }
      }
      this.position
      ////console.log(diseaseIds);
      var reg = /(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{1,23}/
      if(!reg.test(this.form1.name)){
        this.$message({
          type:'error',
          message:'账户名只能输入数字字母！'
        })
        return;
      }
      /**
       * 判断一级科室 二级科室 选择情况
       * @type {Object}
       */
      if(this.form.dep){
        this.departmentId = this.form.dep
      }else{
        this.departmentId = this.form.departmentName
      }

      const data = {
        "account":this.form1.name ,
        "accountCheckStatus": this.form1.checkStatus== true?'1':'0',
        "accountLockStatus": this.form1.blockingStatus == true?'1':'0',
        "accountPwd": this.form1.password,
        "assistant": this.assistant,
        "assistantId": this.assistantId,
        "description": this.dcoInfomation,
        "diseaseIds": diseaseIds,
        'hospitalId':this.hospitalId,
        'departmentId':this.departmentId,
        // "doctorId": this.doctorDetail.doctor.doctorId,
        "intro": this.dcoInfomation,
        "label": this.dynamicTags.join(','),
        "levelId": this.form.doctorLevel,//未知
        "levelName": this.doctorLevel1,
        "name": this.form.name,
        "type":this.radio,
        "phoneNum": this.form.phoneNum,
        "positionId": this.form.positionName ,
        "positionName": this.position ,
        "sex": this.form.sex == '女'?'2':'1',
      }
      this.setDoctorInfo(data).then((res) =>{
        // 调取上传图片方法
        this.upload(res.data)
        this.$router.replace({name:'doctorManager'})
      })
    },
    goBack(){
      this.$router.go(-1)
    },
    //上传图片
    upload(id){
      var formData = new FormData();
      if(this.files[0] == undefined){
        return
      }
      formData.append("multipartFile",this.files[0],this.files[0].name);
      this.uploadPhoto({id:id,data:formData}).then((res)=>{
        ////console.log(localStorage.getItem('userPhoto'))
        setTimeout(() =>{
            this.doctorDetail.doctor.photoUrl = localStorage.getItem('userPhoto')
        },1000)
      })
    }
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
