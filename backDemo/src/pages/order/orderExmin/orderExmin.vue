<template lang="html">
  <div class="orderExmin">
    <div class="buttonBox clearfix">
      <el-button type="primary" plain class="goBack" @click="goBack()">返回</el-button>
    </div>
    <div class="orderInfoDetail">
      <h3>图文咨询订单详情</h3>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">患者姓名:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.patientName}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">患者性别:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.patientSex == 1?'男':'女'}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">患者年龄:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.patientAge}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">联系方式:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.patientPhoneNum}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">证件类型:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.patientCertificateTypeName}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">证件号码:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.patientCertificateNo }}</span>
          </div>
          </el-col>
        </el-row>
      </div>
      <div class="infoItem" v-if="!depStatus">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">专家姓名:</span>
            <span class="spa-right-span">{{ listItem.inquiryOrderResponse.doctorName  }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">医生职称:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.doctorPosition}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">执业医院:</span>
            <span class="spa-right-span">{{ listItem.inquiryOrderResponse.doctorOrganization  }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">服务费用:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.servicePrice }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">咨询疾病:</span>
            <span class="spa-right-span">{{ listItem.inquiryOrderResponse.diseaseLabel }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">疾病类型:</span>
            <span class="spa-right-span">{{diseaseInfo}}</span>
            <el-button type="text" style="margin-left:15px" @click="openModal('disease')">更改疾病</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="depStatus">
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">一级科室:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.oneLevelDepartName }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">二级科室:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.twoLevelDepartName }}</span>
            <el-button type="text" style="margin-left:15px" @click="openModal('dep')">更改科室</el-button>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">咨询问题:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.consultQuestion }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">病情描述:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.conditionDescription }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">患者需求:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.needHelp }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">疾病标签:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.diseaseName}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">相关图片:</span>
            <template v-for="item in listItem.imagesUrl ">
                <img :src="item" alt="">
            </template>

            <el-button type="text" style="margin-left:15px" @click="openModal('photo')">点击查看</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">待分诊</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">提问时间:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.indate}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row class="btnBox">
          <el-button type="primary" @click="submit()">审核</el-button>
          <el-button type="warning" @click="refuse()">不通过</el-button>
        </el-row>
      </div>
    </div>

<!--  疾病新增modal-->
    <el-dialog
      title="提示"
      :visible.sync="diseaseMod"
      width="30%">
      <el-form ref="form1" :model="form1" label-width="110px">
        <el-form-item label="选择疾病">
          <el-select v-model="form1.region" placeholder="请选择" :change="searchFromThis(form1.region,'diseaseMod')">
            <template v-for="(item,$index) in diseaseTypeList">
                <el-option :label="item.alias" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="疾病类型">
          <el-select v-model="form1.region1" placeholder="请选择"@change="changeValue(form1.region1,'diseaseMod')">
            <template v-for="(item,$index) in diseasesBox">
                <el-option :label="item.name" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('disease')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('disease')">确 定</el-button>
      </span>
    </el-dialog>
    <!--科室新增modal  -->
    <el-dialog
      :visible.sync="depMod"
      width="30%"
      center>
      <el-form ref="form" :model="form" label-width="110px">
        <el-form-item label="一级科室">
          <el-select v-model="form.region" placeholder="请选择" :change="searchFromThis(form.region,'depMod')">
            <template v-for="(item,$index) in departmentTList">
                <el-option :label="item.departmentName" :value="item.departmentId"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="二级科室">
          <el-select v-model="form.region1" placeholder="请选择" @change="changeValue(form.region1,'depMod')">
            <template v-for="(item,$index) in departmentTBox">
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
    <!-- 图片查看modal -->
    <el-dialog
      :visible.sync="photoMod"
      width="30%"
      center>
      <img :src="listItem.imagesUrl[0]" alt="" style="width:100%;height:300px;border:1px solid #eee;">
    </el-dialog>
<!--  分配医生modal-->
    <el-dialog
      title="提示"
      :visible.sync="doctorMod"
      width="30%">
      <el-form ref="form3" :model="form3" label-width="110px">
        <el-form-item label="分配医生">
          <el-select v-model="form3.region" placeholder="请选择" :change="searchFromThis(form3.region,'doctorMod')">
            <template v-for="(item,$index) in doctorList_fp">
                <el-option :label="item.name" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('doctorMod')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('doctorMod')">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 拒绝理由modal -->
    <el-dialog
      :visible.sync="refuseMod"
      width="30%"
      center>
      <textarea name="name" rows="8" cols="80" v-model="refuseReson"></textarea>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('doctorMod')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('doctorMod')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  data(){
    return {
      dialogVisible: false,
      value:'',
      inquiryOrderResponse:'',
      imagesUrl:[],
      form:{},
      form1:{
        region:'',
        region1:''
      },
      form3:{},
      diseaseInfo:'',
      diseaseInfoId:'',
      departmentInfo:[],
      departmentInfoId:'',
      diseaseMod:false,//疾病modal
      depMod:false,//--科室新增modal
      photoMod:false,
      doctorMod:false,
      refuseMod:false,
      diseasesBox:[],//疾病类型
      departmentTBox:[],//二级科室
      depStatus:false,// 专家问诊状态 科室不显示 其余状态显示
      refuseReson:''
    }
  },
  mounted(){
    this.getParams()
    this.diseaseInfo = this.listItem.inquiryOrderResponse.diseaseTypeName//赋值疾病类型 页面弹框选中后重新赋值
    this.diseaseInfoId = this.listItem.inquiryOrderResponse.diseaseId
    this.departmentTBoxId = this.listItem.inquiryOrderResponse.twoLevelDepartId
    this.depStatus = this.listItem.inquiryOrderResponse.type == 0? false:true;//0专家问诊 1免费咨询
  },
  computed:{
    ...mapGetters('order',[
      'listItem',
      'diseaseTypeList',
      'departmentTList',
      'doctorList_fp'
    ])
  },
  methods:{
    ...mapActions('order',[
      'getOrderListDetial',
      'getOrderDiseaseType',
      'getOrderDepartment',
      'getOrderDoctor',
      'getOrderSuccess',

    ]),
    sureConfirm(val){
      // this.dialogVisible = false;
      switch(val){
        case 'disease':
             this.diseaseMod = false;
            break;
        case 'dep':
            this.depMod = false;
            break;
        case 'photo':
            this.photoMod = false;
            break;
        case 'doctorMod':
            // 提交审核操作
            this.getOrderSuccess(this.outObj()).then(()=>{
              this.doctorMod = false;
              this.$router.push({name:'consultingService'})
            })
            break;
        case 'refuseMod':
            // 提交审核操作
            this.getOrderSuccess(this.outObj()).then(()=>{
              this.refuseMod = false;
              this.$router.push({name:'consultingService'})
            })
            break;
      }
    },
    outObj(){
      const data = {
        "diseaseId": this.diseaseInfoId ,
        "diseaseName": this.diseaseInfo ,
        "doctorHospitalId": this.listItem.inquiryOrderResponse.doctorOrganizationId  ,
        "doctorHospitalName": this.listItem.inquiryOrderResponse.doctorOrganization  ,
        "doctorId": this.listItem.inquiryOrderResponse.doctorId ,
        "doctorName": this.listItem.inquiryOrderResponse.doctorName ,
        "doctorPosition": this.listItem.inquiryOrderResponse.doctorPosition  ,
        "doctorPositionType": this.listItem.inquiryOrderResponse.doctorPositionType,
        "id": this.listItem.inquiryOrderResponse.id,
        "oneLevelDepartId": this.listItem.inquiryOrderResponse.oneLevelDepartId ,
        "oneLevelDepartName": this.listItem.inquiryOrderResponse.oneLevelDepartName ,
        "refuseReason": this.refuseReson,
        "status": this.listItem.inquiryOrderResponse.status,
        "twoLevelDepartId": this.listItem.inquiryOrderResponse.twoLevelDepartId ,
        "twoLevelDepartName": this.listItem.inquiryOrderResponse.twoLevelDepartName
      }
      return data
    },
    getParams () {
        // 取到路由带过来的参数
        // let routerParams = this.$route.params.id
        this.getOrderListDetial({
          id:this.$route.params.id
        })
        // 疾病类型
        this.getOrderDiseaseType(1);
        this.getOrderDepartment({id:this.listItem.inquiryOrderResponse.doctorOrganizationId})
        // 判断二级科室是否存在
        if(this.listItem.inquiryOrderResponse.twoLevelDepartId !=''){
          let depId = this.listItem.inquiryOrderResponse.twoLevelDepartId
        }else{
          let depId = this.listItem.inquiryOrderResponse.oneLevelDepartId
        }
        this.getOrderDoctor({id:depId})
    },
    goBack(){
      this.$router.go(-1)
    },
    // 弹窗kongzhi
    openModal(val){
      switch(val){
        case 'disease':
            this.diseaseMod = true;
            console.log(this.form1)
            break;
        case 'dep':
            this.depMod = true;
            break;
        case 'photo':
            this.photoMod = true;
            break;
      }
    },
    closeModal(val){
      switch(val){
        case 'disease':
            this.diseaseMod = false;
            break;
        case 'dep':
            this.depMod = false;
            break;
        case 'photo':
            this.photoMod = false;
            break;
        case 'doctorMod':
            this.doctorMod = false;
            break;
      }
    },
    searchFromThis(id,type){
      console.log(id);
      switch(type){
        case 'diseaseMod':
            for (var i in this.diseaseTypeList) {
              if (this.diseaseTypeList[i].id == id) {
                this.diseasesBox = this.diseaseTypeList[i].diseases
              }
            }
            break;
        case 'depMod':
            for (var i in this.departmentTList) {
              if (this.departmentTList[i].departmentId == id) {
                this.departmentTBox = this.departmentTList[i].departments
              }
            }
            break;
        case 'photoMod':
            this.photoMod = false;
            break;
        case 'doctorMod':
          // 提交操作
            break;
      }
    },
    // 获取疾病类型
    changeValue(value,type) {
      console.log(value);
      let obj = {};
      switch(type){
        case 'diseaseMod':
            obj = this.diseasesBox.find((item)=>{
                return item.id === value;
            });
            this.diseaseInfo = obj.name ;//重新赋值疾病类型
            this.diseaseInfoId = obj.id
            break;
        case 'depMod':
            obj = this.departmentTBox.find((item)=>{
                return item.departmentId === value;
            });
            this.departmentTBox = obj.departmentName ;//重新赋值疾病类型
            this.departmentTBoxId = obj.departmentId
            break;
        case 'photoMod':

            break;
      }
    },
    // 通过
    submit(){
      // 状态为专家问诊的时候 直接提交信息 不需要选择医生
        if(!this.depStatus){
          // 提交审核操作
          this.getOrderSuccess(this.outObj()).then(()=>{
            this.doctorMod = false;
            this.$router.push({name:'consultingService'})
          })
        }else{
          this.doctorMod = true;
        }

    },
    //拒绝
    refuse(){
        this.refuseMod = true;
    }
  },

}
</script>

<style lang="scss">
@import '../orderExmin.scss'
</style>
