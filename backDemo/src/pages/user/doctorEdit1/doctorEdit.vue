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
              <el-input v-model="doctorDetail.doctor.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="会员性别">
              <el-radio-group v-model="doctorDetail.doctor.sex.toString()">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="职称">
              <el-select v-model="doctorDetail.doctor.positionName " placeholder="请选择">
                <el-option
                  v-for="item in doctorOffice"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="医生级别">
              <el-select v-model="doctorDetail.doctor.levelName" placeholder="请选择">
                <el-option
                  v-for="item in doctorLevel"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="doctorDetail.doctor.phoneNum"></el-input>
            </el-form-item>
          </el-form>
          <div class="peopleImg">
            <img :src="doctorDetail.doctor.photoUrl" alt="">
            <input  type="file" name="点击上传" @change="upload" id="photo">
          </div>
        </div>
        </div>
        <!--  -->
        <div class="module-i">
          <p class="module-i-title">账户信息</p>
          <div class="form-box">
            <el-form ref="form" :model="form1" label-width="80px">
              <el-form-item label="账户名">
                <el-input v-model="doctorDetail.doctor.account" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="账户密码">
                <el-input v-model="doctorDetail.doctor.accountPwd"></el-input>
              </el-form-item>
              <el-form-item label="医学助理">
                <el-input v-model="doctorDetail.doctor.assistant " :disabled="true"></el-input>
                <el-button type="text" @click="openUserAlt('user')">更改</el-button>
              </el-form-item>
              <el-form-item label="审核状态">
                <el-input v-model="doctorDetail.doctor.accountCheckStatus == 1?'审核':'未审核'" :disabled="true"></el-input>
                <el-switch
                  active-value="1"
                  v-model="doctorDetail.doctor.accountCheckStatus"
                  inactive-value="0"
                >
                </el-switch>
              </el-form-item>
              <el-form-item label="冻结状态">
                <el-input v-model="doctorDetail.doctor.accountLockStatus== 1?'锁定':'未锁定' ":disabled="true"></el-input>
                <el-switch
                  active-value="1"
                  v-model="doctorDetail.doctor.accountLockStatus"
                  inactive-value="0"
                >
                </el-switch>
              </el-form-item>
              <el-form-item label="注册时间">
                <el-input v-model="doctorDetail.doctor.indate" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="来源渠道">
                <el-input v-model="doctorDetail.doctor.source " :disabled="true"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!--  -->
        <div class="module-i">
          <p class="module-i-title">擅长治疗</p>
          <div class="form-box" style="width:auto">
            <el-tag
              v-for="tag in dynamicTags1"
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
              v-for="tag in  dynamicTags"
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
            <div class="introContent" :contenteditable="editStatus">
              {{doctorDetail.doctor.description}}
            </div>
            <el-button type="primary" plain class="prymaryBtn"  @click="doctorIntro()">编辑简介</el-button>
          </div>
        </div>
        <!-- 出诊医院 -->
        <div class="module-i hospitalZ">
          <p class="module-i-title">出诊医院</p>
          <div class="form-box table">
            <el-table
              :data="doctorDetail.hospitals"
              border
              style="width: 100%">
              <el-table-column
                type="index"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="hospitalName"
                label="医院名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="departmentName"
                label="科室名称">
              </el-table-column>
              <el-table-column
                prop="servicePrice"
                label="门诊费用">
              </el-table-column>
              <el-table-column
                prop="hospitalType "
                :formatter="formatRole"
                label="出诊类型">
              </el-table-column>
              <el-table-column
                prop="takeNoPlace"
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
              <el-table-column
                label="操作"
                width="60">
                <template slot-scope="scope">
                  <el-button
                    prop="id"
                    @click.native.prevent="goDetial(scope.$index,doctorDetail.hospitals)"
                    type="text"
                    size="small">
                    编辑
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- <el-button type="primary" plain class="prymaryBtn" @click="addHospitalList()">医院管理</el-button> -->
          </div>
        </div>

        <div class="module-i doctorIntro">
          <p class="module-i-title">就诊服务价格</p>
          <div class="form-box table">
            <el-table
              :data="doctorDetail.services"
              border
              style="width: 100%">
              <el-table-column
                prop="serviceItemName"
                label="服务"
                width="300">
              </el-table-column>
              <el-table-column
                prop="serviceprice"
                label="价格"
                width="200">
              </el-table-column>
              <el-table-column
                prop="switchOnOff"
                :formatter="formatRole1"
                label="开通状态">
              </el-table-column>
            </el-table>
            <el-button type="primary" plain class="prymaryBtn" @click="serviceMange()">服务管理</el-button>
          </div>
        </div>
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
          <el-option
            v-for="item in medicalAssitant"
            :key="item.id"
            :label="item.username"
            :value="item.id">
          </el-option>
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
        <el-select v-model="form.region" placeholder="请选择一级疾病" :change="searchFromThis(form.region)">
          <el-option
            v-for="item in diseaseTypeList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级疾病(可选)">
        <el-select v-model="form.region1" placeholder="请选择二级疾病" @change="changeValue(form.region1)">
           <el-option
              v-for="item in diseasesBox"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级疾病(可选)">
        <el-select v-model="form.region3" placeholder="请选择三级疾病" :change="searchFromThree(form.region3)">
          <el-option
             v-for="item in depList_three"
             :key="item.id"
             :label="item.diseaseTypeName"
             :value="item.id">
           </el-option>
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
      form:{},
      form1:{},
      form2:{},
      form3:{},
      tableData:[],
      // 用户弹窗
      userSelectAlt:false,
      diseaseSelectAlt:false,
      labelSelectAlt:false,
      // 个人信息全部内容
      infoBox:'',
      //标签输入框
      labelInput:'',
      diseasesBox:[],//二级疾病盒子
      editStatus:false,//医生编辑盒子状态
      obj1:{},
      obj2:{},
      obj3:{},
    }
  },
  computed:{
    ...mapGetters('user', [
      'doctorDetail',
      'doctorOffice',
      'doctorLevel',
      'medicalAssitant'
    ]),
    ...mapGetters('order', [
      'diseaseTypeList',
      'depList_three',
    ])

  },
  mounted(){
    this.getData()
    this.dynamicTags1 = this.doctorDetail.diseases
    this.dynamicTags = this.doctorDetail.doctor.label.split('、')
    console.log(this.medicalAssitant)
  },
  methods:{
    ...mapActions('user', [
      'doctorDetail1',
      'getDoctorOffice',
      'getDoctorLevel',
      'setDoctorInfo',
      'getMedicalAssitant',
      'uploadPhoto'
    ]),
    ...mapActions('order', [
      'getOrderDiseaseType',
      'getOrderDepartmentThree'
    ]),
    handleClose(tag,type) {
      if(type == 1){
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }else{
        this.dynamicTags1.splice(this.dynamicTags1.indexOf(tag), 1);
      }

    },
    formatRole(row,column){
      return row.authority == 1 ? "医生所属医院" : row.authority == 2 ? "默认医院" : "多点执业医院" ;
    },
    formatRole1(row,column){
      return row.authority == 1 ? "开通" :  "未开通" ;
    },
    getData(){
      // 医生详情
      this.doctorDetail1({id:this.$route.params.id})
      // 医生职称
      this.getDoctorOffice()
      // 医生级别
      this.getDoctorLevel()
      // 科室
      this.getOrderDiseaseType();
      // 医学助理
      this.getMedicalAssitant();
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
          this.doctorDetail.doctor.assistant = obj.username
          this.doctorDetail.doctor.assistantId = obj.id
          this.userSelectAlt= false;
          break;
        case 'disease':
        //点击确定 添加三级疾病
          this.dynamicTags1.push(this.obj1,this.obj2,this.obj3)
          this.diseaseSelectAlt= false;
          console.log(this.dynamicTags1)
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

          break;
      }
    },
    goBack(){
      this.$router.go(-1)
    },
    // 医生简介
    doctorIntro(){
      // this.$router.push({name:'doctorIntroEdit',param:{content:this.doctorDetail.doctor.description,id:this.doctorDetail.doctor.id}})
      this.editStatus = true;
    },
    goDetial(index,table){
      console.log(table[index])
      // 带参数进子页 然后再带参数返回详情页
      this.$router.push({name:'addHospitalList',params:{id:this.$route.params.id,hosId:table[index].hospitalId}})
    },
    serviceMange(){
      // 带参数进子页 然后再带参数返回详情页
      this.$router.push({name:'serviceMange',params:{id:this.$route.params.id}})
    },
    //科室
    searchFromThis(id){
      console.log(id);
      for (var i in this.diseaseTypeList) {
        if (this.diseaseTypeList[i].id == id) {
          //一级疾病
          this.obj1.diseaseName = this.diseaseTypeList[i].name;
          this.obj1.diseaseId = this.diseaseTypeList[i].id;
          this.diseasesBox = this.diseaseTypeList[i].diseases
        }
      }
    },
    // 获取疾病类型
    changeValue(value) {
      console.log(value);
        for (var i in this.diseasesBox) {
          if (this.diseasesBox[i].id == value) {
            // 二级疾病
            this.obj2.diseaseName = this.diseasesBox[i].name
            this.obj2.diseaseId = this.diseasesBox[i].id;
          }
        }
      this.getOrderDepartmentThree({id:value})
    },
    // 获取疾病类型三级
    searchFromThree(value) {
      console.log(value);
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
      //疾病ID数组过滤
      const diseaseIds = this.dynamicTags1.map((i) =>{
        return i.diseaseId
      })
      console.log(diseaseIds);
      const data = {
        "account":this.doctorDetail.doctor.account ,
        "accountCheckStatus": this.doctorDetail.doctor.accountCheckStatus,
        "accountLockStatus": this.doctorDetail.doctor.accountLockStatus,
        "accountPwd": this.doctorDetail.doctor.accountPwd,
        "assistant": this.doctorDetail.doctor.assistant,
        "assistantId": this.doctorDetail.doctor.assistantId,
        "description": this.doctorDetail.doctor.description,
        "diseaseIds": diseaseIds,
        "doctorId": this.doctorDetail.doctor.doctorId,
        "intro": this.doctorDetail.doctor.description,
        "label": this.dynamicTags.join('、'),
        "levelId": this.doctorDetail.doctor.levelId,//未知
        "levelName": this.doctorDetail.doctor.levelName,
        "name": this.doctorDetail.doctor.name,
        "phoneNum": this.doctorDetail.doctor.phoneNum,
        "positionId": this.doctorDetail.doctor.positionId,
        "positionName": this.doctorDetail.doctor.positionName,
        "sex": this.doctorDetail.doctor.sex,
        "type": this.doctorDetail.doctor.type
      }
      this.setDoctorInfo(data).then(() =>{
        this.$router.replace({name:'doctorManager'})
      })
    },
    //上传图片
    upload(e){
      let file = e.target.files[0];
      console.log(file);
      var formData = new FormData();
      formData.append("multipartFile",file,file.name);
      this.uploadPhoto({id:this.$route.params.id,data:formData}).then((res)=>{
        console.log(localStorage.getItem('userPhoto'))
        this.doctorDetail.doctor.photoUrl = localStorage.getItem('userPhoto');
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
  right:-100px;
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
}
.set{
  margin:20px auto;
  display: block;
}
</style>
