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
            <span class="spa-left-span">所属医院:</span>
            <span class="spa-right-span">{{yyDetail.doctorOrganization}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">所属科室:</span>
            <span class="spa-right-span">{{yyDetail.departmentName}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">服务内容:</span>
            <span class="spa-right-span">{{yyDetail.serviceCategoryName }}</span>
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
            <span class="spa-left-span">就诊时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentApplyDate)}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">就诊时段:</span>
            <span class="spa-right-span">{{yyDetail.ampm == 1?'上午':'下午'}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">就诊地点:</span>
            <span class="spa-right-span">{{yyDetail.realityPlace }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--  已取消-->
      <div class="infoItem" v-show="a">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">已取消</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">取消时间:</span>
            <span class="spa-right-span">{{yyDetail.countermandDate  }}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">预约时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentApplyDate) }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">申请时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentApplyDate) }}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">取消原因:</span>
            <span class="spa-right-span">{{yyDetail.countermandReason }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--未预约独有  -->
      <div class="infoItem" v-show="b">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">预约失败</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">申请时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentApplyDate)  }}</span>
          </div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">预约时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentDate)  }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">失败原因:</span>
            <span class="spa-right-span">{{yyDetail.refuseReason }}</span>
          </div>
          </el-col>
        </el-row>
      </div>
      <!--已完成独有  -->
      <div class="infoItem"v-show="c">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">已就诊</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">申请时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentApplyDate)}}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">预约时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentDate)}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">就诊时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.clinicDate)  }}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">确定时间:</span>
            <span class="spa-right-span">{{parseTime(yyDetail.appointmentDate) }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 沟通记录 -->
      <div class="infoItem communicationRecord" >
        <p>沟通记录</p>
        <template v-for="(item,$index) in outpatientOrderComms">
          <div class="contentBox">
            <p class="time_c">{{$index+1}}.{{parseTime(item.inDate)}}</p>
            <p>内容记录：{{item.communicationRecord}}</p>
          </div>
        </template>

        <el-row >
            <el-button type="primary" style="margin-left:15px" icon="el-icon-plus" @click="openModal('dialogVisible')">添加沟通记录</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
import {getNowFormatDate,parseTime} from '@/utils'
export default {
  data(){
    return {
      value:'',
      a:false,
      b:false,
      c:false,
      d:false,
      outpatientOrderComms:[]
    }
  },
  computed:{
    ...mapGetters('order', [
      'yyDetail'
    ])
  },
  mounted(){
    this.getParams()
    this.outpatientOrderComms = this.yyDetail.outpatientOrderComms;//初次赋值 以后添加后 push新值
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
               this.c = true;
               break;
           case 4:
               this.b = true;
               break;
           case 3:
               this.c = true;
               break;
           case 5:
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
