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
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.patientCertificateTypeName }}</span>
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
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">回复医生:</span>
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
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.servicePrice  +'元'}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">咨询疾病:</span>
            <span class="spa-right-span">{{ listItem.inquiryOrderResponse.diseaseLabel }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">疾病:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.diseaseName}}</span>
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
            <span class="spa-left-span">订单类型:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.type== 1?'专家问诊':'免费咨询'}}</span>
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
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">医生回复:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.doctorReply }}</span>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">回复时间:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.doctorReplyDate }}</span>
            </div>
          </el-col>
        </el-row>
        <!-- <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">追问描述:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.conditionDescription }}</span>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">追问时间:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.doctorReplyDate }}</span>
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
        </el-row> -->
      </div>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">{{orderType}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">提问时间:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.indate}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">回复时间:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.doctorReplyDate }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="btnBox button_box" v-if="buttonStatus">
          <el-button type="primary" @click="reply()">回复</el-button>
        </el-row>
      </div>
    </div>
    <!-- 图片查看modal -->
    <el-dialog
      :visible.sync="photoMod"
      width="30%"
      center>
      <img :src="listItem.imagesUrl[0]" alt="" style="width:100%;height:300px;border:1px solid #eee;">
    </el-dialog>
<!--  回复modal-->
    <el-dialog
      title="提示"
      :visible.sync="replyMod"
      width="30%">
      <div class="replyBox">
        <textarea name="name" rows="8" cols="80" v-model="replyContent">aaa</textarea>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('replyMod')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('replyMod')">确 定</el-button>
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
      diseaseInfo:'',
      departmentInfo:[],
      photoMod:false,
      replyMod:false,
      replyContent:'',//回复内容
      depStatus:false,
      orderType:'待回复',
      buttonStatus:true
    }
  },
  mounted(){
    this.getParams()
    if(this.$route.query.type == 2){
      this.orderType = '已回复'
      this.buttonStatus = false;
    }
  },
  computed:{
    ...mapGetters('order',[
      'listItem',
    ])
  },
  methods:{
    ...mapActions('order',[
      'getOrderListDetial',
      'getOrderReply'
    ]),
    sureConfirm(val){
      // this.dialogVisible = false;
      switch(val){
        case 'photo':
            this.photoMod = false;
            break;
        case 'replyMod':
            // 提交回复操作
            const obj ={
              id:this.listItem.inquiryOrderResponse.id,
              content:this.replyContent
            }
            this.getOrderReply(obj).then(()=>{
              this.replyMod = false;
              // 路由跳转
              this.$router.replace({name:'consultingService'})
            })
            break;
      }
    },
    getParams () {
        // 取到路由带过来的参数
        // let routerParams = this.$route.params.id
        this.getOrderListDetial({
          id:this.$route.query.id
        }).then(() =>{
          this.depStatus = this.listItem.inquiryOrderResponse.type == 0? false:true;//0专家问诊 1免费咨询
        })
    },
    goBack(){
      this.$router.go(-1)
    },
    // 弹窗kongzhi
    openModal(val){
      switch(val){
        case 'photo':
            this.photoMod = true;
            break;
      }
    },
    closeModal(val){
      switch(val){
        case 'replyMod':
            this.replyMod = false;
            break;
        case 'photo':
            this.photoMod = false;
            break;
      }
    },
    // 通过
    reply(){
        this.replyMod = true;
    },
  },

}
</script>

<style lang="scss">
@import '../orderExmin.scss'
</style>
