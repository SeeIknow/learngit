<template lang="html">
  <div class="orderExmin">
    <div class="buttonBox clearfix">
      <el-button type="primary" plain class="goBack" @click="goBack()">返回</el-button>
    </div>
    <div class="orderInfoDetail">
      <h3>门诊预约订单详情</h3>
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
            <span class="spa-right-span">{{yyDetail.patientAge }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">联系方式:</span>
            <span class="spa-right-span">{{yyDetail.patientPhoneNum }}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">证件类型:</span>
            <span class="spa-right-span">{{yyDetail.patientCertificateTypeName }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">证件号码:</span>
            <span class="spa-right-span">{{yyDetail.patientCertificateNo }}</span>
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
            <span class="spa-right-span">{{yyDetail.doctorPosition }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">出诊医院:</span>
            <span class="spa-right-span">{{yyDetail.doctorOrganization }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">就诊科室:</span>
            <span class="spa-right-span">{{yyDetail.departmentName }}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">门诊类别:</span>
            <span class="spa-right-span">{{yyDetail.serviceCategoryName }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">服务费用:</span>
            <span class="spa-right-span">{{yyDetail.servicePrice }}</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">提交时间:</span>
            <span class="spa-right-span">{{parseTime1(yyDetail.appointmentApplyDate)}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">申请时间:</span>
            <span class="spa-right-span">{{parseTime1(yyDetail.expectDateEnd)}}</span>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">订单状态:</span>
            <span class="spa-right-span">待预约</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">申请时间:</span>
            <span class="spa-right-span">{{parseTime1(yyDetail.appointmentApplyDate)}}</span>
          </div>
          </el-col>
        </el-row>
      </div>
      <!-- 沟通记录 -->
      <div class="infoItem communicationRecord" >
        <p>沟通记录</p>
        </el-row>
        <template v-for="(item,$index) in outpatientOrderComms">
          <div class="contentBox">
            <p class="time_c">{{$index+1}}.{{parseTime1(item.inDate)}}</p>
            <p>内容记录：{{item.communicationRecord}}</p>
          </div>
        </template>
        <el-row >
            <el-button type="primary" style="margin-left:15px" icon="el-icon-plus" @click="openModal('dialogVisible')">添加沟通记录</el-button>
        </el-row>
      </div>
      <div class="infoItem">
        <el-button type="primary" plain @click="openModal('successMod')">预约成功</el-button>
        <el-button type="primary" plain @click="openModal('failMod')">预约失败</el-button>
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

<!--  预约成功modal-->
    <el-dialog
      title="提示"
      :visible.sync="successMod"
      width="30%">
      <el-form ref="form1" :model="form1" label-width="110px">
        <el-form-item label="预约时间">
          <el-date-picker
            v-model="dateVal"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="选择时段">
          <el-select v-model="form1.region1" placeholder="请选择">
              <el-option label="上午" value="1"></el-option>
              <el-option label="下午" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出诊地点">
          <el-select v-model="form1.region2" placeholder="请选择">
            <template v-for="(item,$index) in yyDetailAdress">
                <el-option :label="item.address" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('successMod')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('successMod')">保存</el-button>
      </span>
    </el-dialog>
<!-- 预约失败弹框 -->
    <el-dialog
      title="提示"
      :visible.sync="failMod"
      width="30%">
      <textarea name="name" rows="8" cols="80" v-model="valueTextArea2"></textarea>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal('failMod')">取 消</el-button>
        <el-button type="primary" @click="sureConfirm('failMod')">确 定</el-button>
      </span>
    </el-dialog>
</div>
</template>

<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
import {getNowFormatDate,parseTime} from '@/utils'
export default {
  data(){
    return {
      dialogVisible: false,//沟通记录弹框
      successMod:false,
      failMod:false,
      valueTextArea1:'',//沟通弹框textarea
      valueTextArea2:'',//预约失败弹框textarea
      form1:{},
      dateVal:'',
      diseasesBox:[],
      outpatientOrderComms:[],
      address_c:'',
    }
  },
  computed:{
    ...mapGetters('order', [
      'yyDetail',
      'yyDetailAdress'
    ])
  },
  mounted(){
    this.getParams()
    this.outpatientOrderComms = this.yyDetail.outpatientOrderComms;//初次赋值 以后添加后 push新值
  },
  methods:{
    ...mapActions('order', [
      'getOrderYy_detail',
      'getOrderYy_detailRecord',
      'getOrderYy_address',
      'getOrderYy_check',
    ]),
    sureConfirm(val){
      switch(val){
        case 'successMod':
        //console.log(1111);
            this.getOrderYy_check(this.outObj(1)).then(()=>{
              this.$router.replace({name:'appointmentService'})
            }).catch(()=>{
                this.successMod = false;
            })
            break;
        case 'failMod':
              this.getOrderYy_check(this.outObj(4)).then(()=>{
                this.$router.replace({name:'appointmentService'})
              }).catch(()=>{
                  this.failMod = false;
              })
            break;
        case 'dialogVisible':
            /**
             * 定义参数对象 obj
             * @type {Boolean}
             */
            const obj = {
              "communicationRecord": this.valueTextArea1,
              // "id": this.$route.params.id,
              "inDate": getNowFormatDate(),
              "outpatientOrderId": this.$route.params.id
            }
            // 添加沟通记录
            this.getOrderYy_detailRecord(obj).then( ()=>{
              const obj = {
                communicationRecord:this.valueTextArea1,
                inDate:getNowFormatDate()
              }
              this.outpatientOrderComms.push(obj);//新增沟通记录
              this.dialogVisible = false;
            })
            break;
      }
    },
    //审核参数定义对象
    outObj(status){
      for(let i in  this.yyDetailAdress){
        if(this.yyDetailAdress[i].id == this.form1.region2){
          this.address_c = this.yyDetailAdress[i].address
        }
      }
      const obj = {
            "ampm": this.form1.region1,
            "appointmentDate": getNowFormatDate(),
            "id": this.$route.params.id,
            "realityPlace": this.address_c,
            "refuseReason": this.valueTextArea2,
            "status": status
          }
          return obj;
    },
    parseTime1(val){
      return parseTime(val)
    },
    getParams () {
        // 取到路由带过来的参数
        let routerParams = this.$route.params.id
        this.getOrderYy_detail({id:routerParams}).then(() =>{
            this.getOrderYy_address({id:this.yyDetail.doctorId});//出诊地点
        })

    },
    goBack(){
      this.$router.go(-1)
    },
    // 弹窗kongzhi
    openModal(val){
      switch(val){
        case 'successMod':
            this.successMod = true;
            break;
        case 'failMod':
            this.failMod = true;
            break;
        case 'dialogVisible':
            this.dialogVisible = true;
            break;
      }
    },
    closeModal(val){
      switch(val){
        case 'successMod':
            this.successMod = false;
            break;
        case 'failMod':
            this.failMod = false;
            break;
        case 'dialogVisible':
            this.dialogVisible = false;
            break;
      }
    },
  },

}
</script>

<style lang="scss">
@import '../orderExmin.scss'
</style>
