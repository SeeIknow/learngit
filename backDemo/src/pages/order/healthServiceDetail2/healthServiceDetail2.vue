<template lang="html">
  <div class="orderExmin">
    <div class="buttonBox clearfix">
      <el-button type="primary" plain class="goBack" @click="goBack()">返回</el-button>
    </div>
    <div class="orderInfoDetail">
      <h3>疾病救助订单详情</h3>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">患者姓名:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.patientName == undefined?'':jzDetail.diseaseHelpOrderDetail.patientName}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">患者性别:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.patientSex == 1?'男':'女'}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">患者年龄:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.patientAge}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">联系方式:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.patientPhoneNum}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">证件类型:</span>
            <span class="spa-right-span">身份证</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">证件号码:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.patientCertificateNo }}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">联系人姓名:</span>
            <span class="spa-right-span">{{ jzDetail.diseaseHelpOrderDetail.contact  }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">与患者关系:</span>
            <span class="spa-right-span">{{relationshipChange(jzDetail.diseaseHelpOrderDetail.relationship)}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">联系人手机:</span>
            <span class="spa-right-span">{{ jzDetail.diseaseHelpOrderDetail.contactPhoneNum }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">申请人手机:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.patientPhoneNum}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">所在地区:</span>
            <span class="spa-right-span">{{ jzDetail.diseaseHelpOrderDetail.areaName }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">配合宣传:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.visitDesire ==1?'愿意':'不愿意'}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">贫困证明:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.proofPoverty ==1? '有':'没有'}}</span>
            <img :src="jzDetail.diseaseHelpOrderDetail.proofPovertyPhotoUrl" alt="">
            <el-button type="text" style="margin-left:15px" @click="openModal('photoMod',0)" v-if="photo1">点击查看</el-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">残疾证明:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.certificateOfDisability ==1? '有':'没有'}}</span>
            <img :src="jzDetail.diseaseHelpOrderDetail.certificateOfDisabilityPhotoUrl" alt="">
            <el-button type="text" style="margin-left:15px" @click="openModal('photoMod',1)" v-if="photo2">点击查看</el-button>
            </div>
          </el-col>
        </el-row>
      </div>


      <!-- 临床疾病 -->
      <div class="infoItem">
        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              <span class="spa-left-span">临床疾病:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.firstDiseaseName }}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="spa-left-span">临床疾病类型:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.secondDiseaseName }}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="spa-left-span">临床分型:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.diseaseTypeName }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
              <span class="spa-left-span">临床症状:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.symptomNames }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">病因类型:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.pathgenyTypeName   }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">具体病因:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.pathgenyNames   }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">家族病史:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.familyMedicalHistoryNames  }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">其他病史:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.especialMedicalHistory   }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
              <span class="spa-left-span">患儿治疗史:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.treatmentHistory  }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 订单状态 -->
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">订单状态:</span>
              <span class="spa-right-span">分诊中</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">申请时间:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.indate}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">初审通过:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.firstCheckDate }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">复审通过:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.againCheckDate  }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 沟通记录 -->
      <div class="infoItem communicationRecord" >
        <p>沟通记录</p>
        <template v-for="(item,$index) in jzDetail.communicateRecords">
          <div class="contentBox">
            <p class="time_c">{{$index+1}}.时间：{{item.indate}}</p>
            <p>内容记录：{{item.communicateRecord}}</p>
          </div>
        </template>
        <el-row >
            <el-button type="primary" style="margin-left:15px" icon="el-icon-plus" @click="openModal('dialogVisible')">添加沟通记录</el-button>
        </el-row>
      </div>

      <div class="infoItem button_box">
        <el-button type="primary" plain @click="openModal('doctorMod')">患者分配</el-button>
      </div>
    </div>
    <!-- 沟通记录弹框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <textarea name="name" rows="8" cols="80" v-model="valueTextArea1"></textarea>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('dialogVisible')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('dialogVisible')">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 图片查看modal -->
    <el-dialog
      :visible.sync="photoMod"
      width="30%"
      center>
      <img :src="photoUrl" alt="" style="width:100%;height:300px;border:1px solid #eee;">
    </el-dialog>
    <!--  分配医生modal-->
    <el-dialog
      title="提示"
      :visible.sync="doctorMod"
      width="30%">
      <el-form ref="form3" :model="form3" label-width="110px">
        <el-form-item label="选择救助资金">
          <el-select v-model="form3.region" placeholder="请选择" >
            <template v-for="(item,$index) in jjList">
                <el-option :label="item.foundationName" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="选择医疗中心">
          <el-select v-model="form3.region1" placeholder="请选择">
            <template v-for="(item,$index) in hospitalCenterList">
                <el-option :label="item.medicalCenterName" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('doctorMod')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('doctorMod')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 待分诊订单详情页
/**
 * 本页未完成功能
 * 1.患者分配选择
 * @type {String}
 */
import {mapActions,mapGetters,mapMutations} from 'vuex'
import {getNowFormatDate,parseTime} from '@/utils'
export default {
  data(){
    return {
      photoUrl:'',
      dialogVisible: false,
      photo1:false,
      photo2:false,
      valueTextArea1:'',
      jjList:[],
      hospitalCenterList:[],//---------------
      value:'',
      inquiryOrderResponse:'',
      imagesUrl:[],

      form:{
        region:'',
        region1:''
      },
      form1:{
        region:'',
        region1:''
      },

      form3:{
        region:'',
        region1:""
      },
      diseaseMod:false,//疾病modal
      depMod:false,//--科室新增modal
      photoMod:false,
      doctorMod:false,
      refuseMod:false,
      refuseReson:'',
    }
  },
  mounted(){
     this.getData()

  },
  computed:{
    ...mapGetters('order',[
      'jzDetail',
    ])
  },
  methods:{
    ...mapActions('order',[
      'getOrderDetailJz',
      'getOrderJz_detailRecord',
      'getFoundations',
      'getMedicalCenters',
      'postPatientDistribution'
    ]),
    // 时间转化
    parseTime1(val){
      if(val != null){
        return parseTime(val)
      }else{
        return ''
      }
    },
    //关系转化
    relationshipChange(val){
      switch(val){
        case 1:
            var v_c = '本人'
            break;
        case 2:
            var v_c = '父母'
            break;
        case 3:
            var v_c = '子女'
            break;
        case 4:
            var v_c = '夫妻'
            break;
        case 5:
            var v_c = '兄弟姐妹'
            break;
        case 6:
            var v_c = '祖父母，外祖父母'
            break;
        case 7:
            var v_c = '其他'
            break;
        default:
          break;
      }
      return v_c
    },
    // 图片判断是否存在
    photoCheck(){
      if(this.jzDetail.diseaseHelpOrderDetail.proofPoverty ==1) {
        this.photo1 = true
      }
      if(this.jzDetail.diseaseHelpOrderDetail.certificateOfDisability ==1) {
        this.photo2 = true
      }
    },
    outObj(status){
      const data = {

      }
      return data
    },
    goBack(){
      this.$router.go(-1)
    },
    // 弹窗kongzhi
    openModal(val,index){
      switch(val){
        case 'dialogVisible':
            this.dialogVisible = true
            break;
        case 'doctorMod':
            this.doctorMod = true
            break;
        case 'photoMod':
            if(index == 0){
              this.photoUrl = this.jzDetail.diseaseHelpOrderDetail.proofPovertyPhotoUrl
            }else{
              this.photoUrl = this.jzDetail.diseaseHelpOrderDetail.certificateOfDisabilityPhotoUrl
            }
            this.photoMod = true;
            break;
      }
    },
    closeModal(val){
      switch(val){
        case 'doctorMod':
            this.doctorMod = false
            break;
        case 'photoMod':
            this.photoMod = false;
            break;
        case 'dialogVisible':
            this.dialogVisible = false
            break;
      }
    },
    sureConfirm(val){
      switch(val){
        case 'dialogVisible':
            this.dialogVisible = false;
            // 调取接口 关闭modal
            //
            // 调取接口 关闭modal
            const data = {
              "communicationContent": this.valueTextArea1,
              "id": this.$route.query.id
            }
            this.getOrderJz_detailRecord(data).then((res) =>{
              this.$message({
                type:'success',
                message:'添加成功'
              })
              this.valueTextArea1 = '';
              this.getData()
              this.dialogVisible = false;
            })
            break;
        case 'doctorMod':
        // 这里执行调取接口  返回前一页
        //
            const data1 = {
              id:this.$route.query.id,
              medicalCenterId:this.form3.region1,
              foundationId:this.form3.region
            }
            this.postPatientDistribution(data1).then(() =>{
              this.doctorMod = false;
              this.$router.replace({name:'healthService'})
            })
            break;
      }
    },
    getData(){
      this.getOrderDetailJz({
        id:this.$route.query.id
      }).then(() =>{
        // 检验图片是否存在
        this.photoCheck();
      })
      // 基金会列表
      this.getFoundations().then((res) =>{
        this.jjList = res.data;
      })
      // 医学中心列表
      this.getMedicalCenters().then((res) =>{
        this.hospitalCenterList = res.data;
      })

    },
  },

}
</script>

<style lang="scss">
@import '../orderExmin.scss'
</style>
