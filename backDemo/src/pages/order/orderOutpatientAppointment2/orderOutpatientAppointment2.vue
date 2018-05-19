<template lang="html">
  <div class="orderExmin">
    <div class="buttonBox clearfix">
      <el-button type="primary" plain class="goBack" @click="goBack()">返回</el-button>
    </div>
    <div class="orderInfoDetail">
      <h3>门诊订单详情</h3>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">预约人姓名:</span>
            <span class="spa-right-span">{{yyDetail.patientName}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">预约人性别:</span>
            <span class="spa-right-span">{{yyDetail.patientSex == 1?'男':'女'}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">预约人年龄:</span>
            <span class="spa-right-span">{{yyDetail.patientAge}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">联系方式:</span>
            <span class="spa-right-span">{{yyDetail.patientPhoneNum}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">证件类型:</span>
            <span class="spa-right-span">{{yyDetail.patientCertificateTypeName}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">证件号码:</span>
            <span class="spa-right-span">{{yyDetail.patientCertificateNo}}</span>
          </div>
          </el-col>
        </el-row>
      </div>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">预约医生:</span>
            <span class="spa-right-span">{{yyDetail.doctorName}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">医生职称:</span>
            <span class="spa-right-span">{{yyDetail.doctorPosition}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">出诊医院:</span>
            <span class="spa-right-span">{{yyDetail.doctorOrganization}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">就诊科室:</span>
            <span class="spa-right-span">{{yyDetail.departmentName}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">门诊类别:</span>
            <span class="spa-right-span">{{yyDetail.serviceCategoryName}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">服务费用:</span>
            <span class="spa-right-span">{{yyDetail.servicePrice}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">提交时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentApplyDate)}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">申请时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentApplyDate)}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="infoItem">
        <el-row>
          <!-- <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">待预约</span>
            </div>
          </el-col> -->
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">申请时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentApplyDate)}}</span>
          </div>
          </el-col>
        </el-row>
        <!--预约失败 -->
        <el-row v-show="a">
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">预约失败</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">预约失败原因:</span>
            <span class="spa-right-span">{{yyDetail.refuseReason }}</span>
          </div>
          </el-col>
        </el-row>
        <!--已取消独有  -->
        <el-row v-show="b">
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">已取消</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">取消失败:</span>
            <span class="spa-right-span">{{yyDetail.refuseReason}}</span>
          </div>
          </el-col>
        </el-row>
        <!--未就诊独有  -->
        <el-row v-show="c">
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">未就诊</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">未就诊原因:</span>
            <span class="spa-right-span">{{yyDetail.nonMedicalReasons }}</span>
          </div>
          </el-col>
        </el-row>
        <!--已完成独有  已就诊-->
        <el-row v-show="d">
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">已就诊</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">就诊时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.clinicDate )}}</span>
          </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
import {parseTime} from '@/utils'
export default {
  data(){
    return {
      value:'',
      // yyDetail:'',
      a:false,
      b:false,
      c:false,
      d:false
    }
  },
  computed:{
    ...mapGetters('order', [
      'yyDetail'
    ])
  },
  mounted(){
    this.getParams()

  },
  methods:{
    ...mapActions('order', [
      'getOrderYy_detail',
    ]),
    parseTime(val){
      if(val == null){
        return ''
      }
      return parseTime(val)
    },
    getParams () {
        // 取到路由带过来的参数
        let routerParams = {
          id:this.$route.params.id,
          status:this.$route.params.status
        }
        /**
         * [id description]
         * @type {[type]}
         * status 判断状态 显示与隐藏
         */
         switch(routerParams.status){
           case 2:
               this.d = true;
               break;
           case 5:
               this.b = true;
               break;
           case 3:
               this.c = true;
               break;
           case 4:
               this.a = true;
               break;
         }
        this.getOrderYy_detail({id:routerParams.id})
    },
    goBack(){
      this.$router.go(-1)
    },
  },

}
</script>

<style lang="scss">
@import '../orderExmin.scss'
</style>
