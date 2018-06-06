<template lang="html">
  <div class="orderExmin">
    <div class="buttonBox clearfix">
      <el-button type="primary" plain class="goBack">返回</el-button>
    </div>
    <div class="orderInfoDetail">
      <h3>图文咨询订单详情</h3>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">患者姓名:</span>
            <span class="spa-right-span">李白</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">患者性别:</span>
            <span class="spa-right-span">男</span>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">患者年龄:</span>
            <span class="spa-right-span">16</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">联系方式:</span>
            <span class="spa-right-span">1213132</span>
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
            <span class="spa-right-span">432132132132132</span>
          </div>
          </el-col>
        </el-row>
      </div>
      <div class="infoItem">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">咨询疾病:</span>
            <span class="spa-right-span">李白</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">疾病类型:</span>
            <span class="spa-right-span">李白</span>
            <el-button type="text" style="margin-left:15px">更改疾病</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">一级科室:</span>
            <span class="spa-right-span">李白</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
            <span class="spa-left-span">二级科室:</span>
            <span class="spa-right-span">李白</span>
            <el-button type="text" style="margin-left:15px" @click="dialogVisible = true">更改科室</el-button>
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">咨询问题:</span>
            <span class="spa-right-span">大时代内窥镜是男的卡萨诺大卡司面对开始的那时快倒计时卡德加卡德加阿散井四大皆空圣诞节卡仕达解开了撒娇德库拉</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">病情描述:</span>
            <span class="spa-right-span">大时代内窥镜是男的卡萨诺大卡司面对开始的那时快倒计时卡德加卡德加阿散井四大皆空圣诞节卡仕达解开了撒娇德库拉</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">患者需求:</span>
            <span class="spa-right-span">大时代内窥镜是男的卡萨诺大卡司面对开始的那时快倒计时卡德加卡德加阿散井四大皆空圣诞节卡仕达解开了撒娇德库拉</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">疾病标签:</span>
            <span class="spa-right-span">大时代内窥镜是男的卡萨诺大卡司面对开始的那时快倒计时卡德加卡德加阿散井四大皆空圣诞节卡仕达解开了撒娇德库拉</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
            <span class="spa-left-span">相关图片:</span>
            <img src="../../assets/logo.png" alt="">
            <el-button type="text" style="margin-left:15px">点击查看</el-button>
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
            <span class="spa-right-span">2018.04.20</span>
          </div>
          </el-col>
        </el-row>
        <el-row class="btnBox">
          <el-button type="primary">审核</el-button>
          <el-button type="warning">不通过</el-button>
        </el-row>
      </div>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <textarea name="name" rows="8" cols="80" v-model="value"></textarea>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dialogVisible: false,
      value:''
    }
  },
  methods:{
    sureConfirm(){
      this.dialogVisible = false;
      alert(this.value)
    }
  }
}
</script>

<style lang="scss">
@import './orderExmin.scss'
</style>
