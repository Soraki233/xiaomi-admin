<script setup>
import {onMounted, ref} from "vue";
import api from "@/api"
import utils from '@/utils'

let name = ref("")
let password = ref("")
let verifyData = ref({
  captchaImgSrc:"",
  captchaId: "",
  captchaCode:""
})

//获取验证码
const getVerifyCode = () => {
  api.getVerifyCodeApi().then(res => {
    console.log(res)
    verifyData.value.captchaImgSrc = URL.createObjectURL(utils.dataURLtoBlob(res.data.captchaImg))
    verifyData.value.captchaId = res.data.captchaId
  })
}

//提交
const doLogin = () => {
  api.loginApi(verifyData.value).then(res => {
    console.log(res)
  })
}
onMounted(() => {
  getVerifyCode()
})
</script>
<template>
  <div id="login">
      <div class="l_title">小米商城后台管理系统-IT营</div>
      <dl>
        <dd>管理员姓名：<input class="text" type="text" v-model="name"></dd>
        <dd>管理员密码：<input class="text" type="password" v-model="password"></dd>
        <dd>验　证　码：<input id="verify" type="text" v-model="verifyData.captchaCode">
          <img id="verify_img" :src="verifyData.captchaImgSrc" title="看不清？点击刷新"
               @click="getVerifyCode()">
        </dd>
        <dd><input type="submit" @click="doLogin" class="submit"></dd>
      </dl>
  </div>
</template>
<style lang="less">

#login {
  width:740px;
  height:300px;
  background:url(../assets/img/loginbg.jpg) no-repeat left center;
  /*background:#EDEFFC;*/
  margin:120px auto 0 auto;
}
#login dl{
  width:500px;
  margin:0 0 0 auto;
  padding:10px 0 0 20px;
  color:#01458E;
  float:left;
  font-size:15px;
}
#login dl dd {
  margin:16px 0;
  height:32px;
  line-height:32px;
}
#login dl dd input.text {
  width:280px;
  height:30px;
  line-height:30px;

}
#login dl dd input.submit {
  //background: url("../assets/img/login_btn.jpg") no-repeat center center;
  //border:none;
  margin: 10px;
  margin-left:90px;
  padding: 2px 8px 0;
  cursor:pointer;
  width:123px;
  height:29px;
}
#login dl dd.code {
  padding:0 0 0 72px;
}
#login dl dd.code img {
  border:1px solid #eee;
  cursor:pointer;
}
#verify{
  height:30px;
  line-height:30px;
  width: 90px;
  margin-right:3px;
}
#verify_img{
  cursor:pointer;
  position: relative;
  top:12px;
}
.text{
  height:22px;
}
.l_title{
  height:40px;
  line-height:40px;
  font-size:24px;
  padding-left:5px;
  padding-top:10px;
  color:#01458e;
  font-weight:bold;

}
</style>
