<style lang="less" scoped>
.login-wrap{
  height:100%;
  background:mediumaquamarine;
  .login-container {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.06);
      border-radius: 5px;
      margin: 180px auto;
      margin-top: -180px;
      width: 350px;
      padding: 30px 35px 15px 35px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember{
    margin: 0px 0px 35px 0px;
  }
}
</style>
<template>
    <div class="login-wrap">
      <img src="../../static/images/brand.png" alt="易磐商标" style="float:right;">
      <el-form  label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">用户登录</h3>
        <el-form-item prop="username">
          <el-input type="text" v-model="ruleForm.username"  auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"  v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <div style="text-align:left;">
          <el-checkbox class="remember" v-model="checked">记住密码</el-checkbox>
        </div>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;"  @click="submitForm('ruleForm')" :loading="logining">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    var validatePass = (rule,value,callback) =>{
        if(value===''){
          return callback(new Error('请输入密码'));
        }else{
          if(this.ruleForm.username!=1){
            return callback(new Error('密码错误'));
          }else{
            callback();
          }
        }
    };
    return {
      checked:true,
      logining: false, //定义loading默认为false
      ruleForm: {            //username和password默认为空
        username: '',
        password:''
      },
      rules: {          //rules前端验证
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { validator:validatePass,trigger: 'blur' },
          ]        
      }
    }
  },
  methods: {
      submitForm(formName) {
        //如果使用validate报错则使用如下的
        /*this.$refs.formName.validate()*/
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //还需验证账户是否存在
            if(this.ruleForm.username==1&&this.ruleForm.password==1){
              this.$message({
                message: '登陆成功',
                type: 'success',
                duration:'500'
              });
              if(this.checked==true){
                var expired = new Date();
                expired.setTime(expired.getTime()+14*(24*60*60*1000));
                //将用户名和密码写入到Cookie
                document.cookie = "username=" + this.ruleForm.username + ";expires=" + expired;
                document.cookie = "password=" + this.ruleForm.username + ";expires=" + expired;
                /*SetCookie(this.ruleForm.username,this.ruleForm.password,expired);*/
              }else{
                //如果没有选中记住密码,则立即过期 
                //ResetCookie(); 
              }
              this.logining = true;
              localStorage.setItem('username','this.ruleForm.username');
              setTimeout(() => {
                this.logining = false;
                this.$router.push({ path: '/' });//如果请求成功就让他3秒跳转路由
              }, 1000);
            }else{
              this.$message('用户名或密码错误，请重试');
              this.$refs[formName].resetFields();
              return false;
            }
          } else {
            this.$message('服务器或内部错误，请重试');
            return false;
          }
        });
      },
  }
}
</script>
