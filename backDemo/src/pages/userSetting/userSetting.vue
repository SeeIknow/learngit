<template lang="html">
  <div class="setting">
    <div class="topBar">
      <ul class="clearfix">
        <template v-for="(item,$index) in menu">
          <li  @click="select(item,$index)" :class="{'active':$index == activeIndex,'unactive':!item.active}">{{item.name}}</li>
        </template>
      </ul>
    </div>
    <div class="contentBox">
      <div class="userInfoBox" v-if="activeIndex == 0?true:false">
          <p>
            <span class="span-left-c">账户名称:</span>
            <span>李白</span>
          </p>
          <p>
            <span class="span-left-c">账户名称:</span>
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="0">女</el-radio>
          </p>
          <p>
            <span class="span-left-c">手机:</span>
            <!-- <input type="text" name="" value=""value="18772945918" disabled> -->
            <el-input v-model="phone" value="18772945918" v-bind:disabled="status"></el-input>
            <el-button type="text" @click="changePhone">修改手机号</el-button>
          </p>
          <p>
            <span class="span-left-c">注册时间:</span>
            <span>201718.10</span>
          </p>
          <el-button type="primary" style="text-align:left">修改</el-button>
      </div>
      <!-- 修改密码 -->
      <div class="passwordBox" v-if="activeIndex == 1?true:false">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" size="medium" class="demo-ruleForm">
          <el-form-item label="原密码" prop="oldPass">
            <el-input type="text" v-model="ruleForm2.oldPass" class="inputM" placeholder="请输入旧密码"auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPass">
            <el-input type="password" v-model="ruleForm2.newPass" class="inputM" placeholder="请输入新密码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="pass1">
            <el-input type="password" v-model="ruleForm2.pass1" class="inputM" placeholder="请输入确认密码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  style="margin-top:20px" round  @click="submit('ruleForm2')">修改</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 修改头像 -->
      <div class="userphoto" v-if="activeIndex == 2?true:false">
          <img src="@/assets/images/default.jpg"  alt="">
          <el-upload
            class="avatar-uploader"
            :action="photoUrl()"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p>从电脑中选择一项你喜欢的照片上传，仅支持JPG、PNG或BMP图片文件，且大小不超过10M。</p>
      </div>
      <div class="userInfoBox" v-if="activeIndex == 3?true:false">
          aaa4111
      </div>
    </div>
  </div>
</template>

<script>
import Vue from'vue'
export default {
  data(){
    var checkOld = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('原密码不能为空'));
      }else {
        callback()
      }
    };
    var checkNew = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('新密码不能为空'));
      }else {
        callback()
      }
    };
    var checkAll = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('确认密码不能为空'));
      }else {
        callback()
      }
    };
    return{
      active:true,
      activeIndex:'0',
      phone:'18772945918',
      radio:'0',
      status:true,
      menu:[
        {
          name:'账户信息',
          index:1
        },
        {
          name:'修改密码',
          index:2
        },
        {
          name:'修改头像',
          index:3
        },
        {
          name:'我的钱包',
          index:4
        },
      ],
      ruleForm2: {
        oldPass: '',
        newPass: '',
        pass1:''
      },
      rules2: {
        oldPass: [
          { validator: checkOld, trigger: 'blur' }
        ],
        newPass: [
          { validator: checkNew, trigger: 'blur' }
        ],
        pass1: [
          { validator: checkAll, trigger: 'blur' }
        ]
      },
      imageUrl: '',

    }
  },
  methods:{
    handleClick(tab, event) {
       ////console.log(tab, event);
     },
     select(item,index){
       this.activeIndex = index;
       this.$nextTick(function () {
          this.menu.forEach(function (item) {
            Vue.set(item,'active',false)
        });
        Vue.set(item,'active',true)
            ////console.log(item.active);
        });
     },
     // 更改手机号
     changePhone(){
        this.status = !this.status;
     },
     submit (formName) {
       this.$refs[formName].validate((valid) => {
         ////console.log(valid);
         // 验证成功
           if (valid) {

           } else {
             ////console.log('error submit!!');
             return false;
           }
         });
       },
      photoUrl(){
        // return config.url+'sssss'
        return 'https://jsonplaceholder.typicode.com/posts'
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
}
</script>

<style lang="scss">
@import './userSetting.scss'
</style>
