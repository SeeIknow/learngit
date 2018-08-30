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
            <span class="spa-right-span">{{ jzDetail.diseaseHelpOrderDetail.contact }}</span>
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
            <span class="spa-right-span">{{ jzDetail.diseaseHelpOrderDetail.contactPhoneNum}}</span>
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
            <span class="spa-right-span">{{ jzDetail.diseaseHelpOrderDetail.areaName  }}</span>
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
            <input type="file" style="opacity:0;width:60px;height:40px;z-index:1000" @change="upload(1,$event)">
            <el-button type="text" style="margin-left:-60px;">重新上传</el-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">残疾证明:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.certificateOfDisability ==1? '有':'没有'}}</span>
            <img :src="jzDetail.diseaseHelpOrderDetail.certificateOfDisabilityPhotoUrl" alt="">
            <el-button type="text" style="margin-left:15px" @click="openModal('photoMod',1)" v-if="photo2">点击查看</el-button>
            <input type="file" style="opacity:0;width:60px;height:40px;z-index:1000"@change="upload(2,$event)">
            <el-button type="text" style="margin-left:-60px">重新上传</el-button>
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
            <span class="spa-right-span">初审中</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">申请时间:</span>
            <span class="spa-right-span">{{jzDetail.diseaseHelpOrderDetail.indate }}</span>
          </div>
          </el-col>
        </el-row>
      </div>
      <!-- 沟通记录 -->
      <div class="infoItem communicationRecord" >
        <p>沟通记录</p>
        </el-row>
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
        <el-button type="primary" plain @click="openModal('successMod')">通过</el-button>
        <el-button type="primary" plain @click="openModal('failMod')">不通过</el-button>
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
    <!-- 不通过modal -->
    <el-dialog
      :visible.sync="failMod"
      width="30%"
      title="拒绝理由"
      center>
      <textarea name="name" rows="8" cols="80" v-model="refuseReson"></textarea>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('failMod')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('failMod')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 待初审订单详情页
import {mapActions,mapGetters,mapMutations} from 'vuex'
import {getNowFormatDate,parseTime} from '@/utils'
export default {
  data(){
    return {
      dialogVisible: false,
      failMod:false,
      value:'',
      inquiryOrderResponse:'',
      failMod:false,
      imagesUrl:[],
      form:{
        region:'',
        region1:''
      },
      form1:{
        region:'',
        region1:''
      },
      photo1:false,
      photo2:false,
      photoUrl:'',
      form3:{},
      valueTextArea1:'',
      photoMod:false,
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
      'uploadPhoto',
      'getOrderJz_detailRecord',
      'postOrderJz_detailStatus',
      'postOrderJz_detailStatus_r'
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
    upload(val,e){
      let file = e.target.files[0];
      ////console.log(file);
      var formData = new FormData();
      formData.append("multipartFile",file,file.name);
      this.uploadPhoto({id:this.jzDetail.diseaseHelpOrderDetail.id,type:val,data:formData}).then(() =>{
        this.$message({
          type:'success',
          message:'上传成功！'
        })
        // 重新获取数据
        setTimeout(() =>{
          this.getData()
        },1000)

      })
    },
    openModal(val,index){
      switch(val){
        case 'dialogVisible':
            this.dialogVisible = true;
            break;
        case 'successMod':
            // 这里执行通过操作 调取接口  返回前一个页面
            //
            this.postOrderJz_detailStatus_r({id:this.$route.query.id}).then( () =>{
              // 返回列表
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
        case 'failMod':
            this.failMod = true;
            break;
      }
    },
    closeModal(val){
      switch(val){
        case 'dialogVisible':
            this.dialogVisible = false;
            break;
        case 'photoMod':
            this.photoMod = false;
            break;
        case 'failMod':
            this.failMod = false;
            break;
      }
    },
    sureConfirm(val){
      switch(val){
        case 'dialogVisible':

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
              this.dialogVisible = false;
              this.getData()
            })
            //
            break;
        case 'failMod':

            const data1 = {
              "id": this.$route.query.id,
              "reason":this.refuseReson
            }
            this.postOrderJz_detailStatus(data1).then(() =>{
              this.failMod = false;
              this.$router.replace({name:'healthService'})
            })
            //
            //
            break;
      }
    },
    goBack(){
      this.$router.go(-1)
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
