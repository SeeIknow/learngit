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
      <!-- 资助基金 -->
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">资助基金:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.foundationName }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">资助方式:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.supportType == 1?'全免':'资助'}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">医学中心:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.medicalCenterName }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">到诊方式:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.visitType == 1?'自来':'组委会'}}</span>
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
              <span class="spa-right-span">到院中</span>
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
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.firstCheckDate}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">复审通过:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.againCheckDate}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">分诊时间:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.forwardDate}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">预约提交时间:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.appointmentSubmitDate  }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">预约到院:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.appointmentDate }}{{jzDetail.diseaseHelpOrderDetail.appointmentAmPm == 1?'上午':'下午'}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">到院时间:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.goHospitalDate}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <span class="spa-left-span">治疗时间:</span>
              <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.treatmentDate }}</span>
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
      </div>

      <div class="infoItem button_box">
        <el-button type="primary" plain @click="openModal('successMod')">验证</el-button>
      </div>
    </div>
    <!-- 图片查看modal -->
    <el-dialog
      :visible.sync="photoMod"
      width="30%"
      center>
      <img :src="photoUrl" alt="" style="width:100%;height:300px;border:1px solid #eee;">
    </el-dialog>
  </div>
</template>

<script>
// 待验证订单详情页
import {mapActions,mapGetters,mapMutations} from 'vuex'
import {getNowFormatDate,parseTime} from '@/utils'
export default {
  data(){
    return {
      photoUrl:'',
      dialogVisible: false,
      photo1:false,
      photo2:false,
      successMod:false,
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

      form3:{},
      photoMod:false,
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
      'postValidateOperation'

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
        case 'successMod':
            // 调取接口  返回前一页
            //
            this.postValidateOperation({id:this.$route.query.id}).then(() =>{
              this.$router.replace({name:'healthService'})
            })
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
        case 'photoMod':
            this.photoMod = false;
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
    },
  },

}
</script>

<style lang="scss">
@import '../orderExmin.scss'
</style>
