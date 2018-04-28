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
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.patientCertificateType }}</span>
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
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.servicePrice }}</span>
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
            <span class="spa-left-span">疾病类型:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.diseaseTypeName}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
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
            <span class="spa-left-span">疾病标签:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.diseaseTypeName}}</span>
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
        <el-row>
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
        </el-row>
      </div>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">已采纳</span>
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
            <span class="spa-left-span">分诊时间:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.allotTimeDate }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">采纳时间:</span>
            <span class="spa-right-span">{{listItem.inquiryOrderResponse.doctorReplyDate }}</span>
            </div>
          </el-col>
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
  </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  data(){
    return {
      photoMod:false,
    }
  },
  mounted(){
    this.getParams()
  },
  computed:{
    ...mapGetters('order',[
      'listItem',
    ])
  },
  methods:{
    ...mapActions('order',[
      'getOrderListDetial',
    ]),
    getParams () {
        // 取到路由带过来的参数
        // let routerParams = this.$route.params.id
        this.getOrderListDetial({
          id:this.$route.params.id
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
        case 'photo':
            this.photoMod = false;
            break;
      }
    },
  },

}
</script>

<style lang="scss">
@import '../orderExmin.scss'
</style>
