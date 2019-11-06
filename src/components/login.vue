<template>
  <div class="login-container">
    <div class="login-inner">
    <div class="login-header">
      <div class="login-logo">
        <img src="/static/image/toux.jpg" alt="" width="300">
      </div>
    </div>
    <div class="login-content">
      <form>
        <!--账号登录部分-->
        <div :class="{current: loginMode}">
          <section>
            <section class="login-message">
              <input type="tel" maxlength="20" placeholder="用户名" v-model="user_name">
            </section>
            <section class="login-verification">
              <input v-if="pwdMode" type="password" maxlength="20" placeholder="密码" autocomplete="off" v-model="pwd"/>
              <input v-else type="text" maxlength="20" placeholder="密码" autocomplete="off" v-model="pwd"/>
            </section>
          </section>
        </div>
        <button class="login-submit" @click="login">登录</button>
      </form>
      <button class="login-back" @click.prevent="$router.back()">返回</button>
      <div style="text-align: center; padding: 10px 0; color:#008800"> 微信登录</div>
    </div>
  </div>
  </div>
</template>

<script>
  import  getDate from '../../src/server/getDate'
  import {mapActions,mapState} from 'vuex'
  export default {
    name: "Login",
    data() {
      return {
        loginMode: true,  // 登录模式
        user_name: null, // 用户名
        pwd: null, // 密码
        pwdMode: true, // true密文 false明文
        captcha: null, // 图形验证码
      }
    },
    computed: {

    },
    methods:{
      ...mapActions(['syncUserInfo']),
      login(){
          var  gopage = this.$route.query.page;
          if(!this.user_name){
            this.$toast('请输入用户名');
            return;
          }else if(!this.pwd){
            this.$toast('请输入密码');
            return;
          }
        getDate.postLogin({userName:this.user_name,pwd:this.pwd},(response)=>{
          if (response.success) {
              this.syncUserInfo(response.data);
              if(gopage){
                this.$router.replace(gopage);
              }
          }else{
            this.$toast(response.message);
          }
        },(exception)=>{

        })

      },
      getCaptcha(){

      }
    }
  }

</script>

<style scoped>
  .login-container {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  .login-container .login-inner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;
  }

  .login-container .login-inner .login-header .login-logo {
    font-size: 40px;
    font-weight: bold;
    color: #75a342;
    text-align: center
  }

  .login-container .login-inner .login-header .login-header-title {
    padding-top: 40px;
    padding-bottom: 10px;
    text-align: center;
  }

  .login-container .login-inner .login-header .login-header-title > a {
    color: #333;
    font-size: 14px;
    padding-bottom: 4px;
  }

  .login-container .login-inner .login-header .login-header-title > a:first-child {
    margin-right: 40px
  }

  .login-container .login-inner .login-header .login-header-title > a.current {
    color: #75a342;
    font-weight: 700;
    border-bottom: 2px solid #75a342
  }

  .login-container .login-inner .login-content > form > div {
    display: none;
  }

  .login-container .login-inner .login-content > form > div.current {
    display: block
  }

  .login-container .login-inner .login-content > form > div input {
    width: 100%;
    height: 100%;
    padding-left: 8px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: 0;
    font: 400 14px Arial;
  }

  .login-container .login-inner .login-content > form > div input:focus {
    border: 1px solid #75a342
  }

  .login-container .login-inner .login-content > form > div .login-message {
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
  }

  .login-container .login-inner .login-content > form > div .login-message .get-verification {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border: 0;
    color: #ccc;
    font-size: 14px;
    background: transparent;
  }

  .login-container .login-inner .login-content > form > div .login-message .get-verification.phone_right {
    color: #75a342
  }

  .login-container .login-inner .login-content > form > div .login-verification {
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
  }

  .login-container .login-inner .login-content > form > div .login-verification .switch-show {
    position: absolute;
    right: 10px;
    top: 12px;
  }

  .login-container .login-inner .login-content > form > div .login-verification .switch-show img {
    display: none
  }

  .login-container .login-inner .login-content > form > div .login-verification .switch-show img.on {
    display: block
  }

  .login-container .login-inner .login-content > form > div .login-hint {
    margin-top: 12px;
    color: #999;
    font-size: 12px;
    line-height: 20px;
  }

  .login-container .login-inner .login-content > form > div .login-hint > a {
    color: #75a342
  }

  .login-container .login-inner .login-content > form .login-submit {
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #75a342;
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    border: 0
  }

  .login-container .login-inner .login-content .login-back {
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 15px;
    border-radius: 4px;
    background: transparent;
    border: 1px solid #75a342;
    color: #75a342;
    text-align: center;
    font-size: 16px;
    line-height: 42px
  }
</style>
