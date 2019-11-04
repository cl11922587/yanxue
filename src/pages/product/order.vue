<template>
  <div>
    <a  class="p-item" :href="'#/product/'+proInfo.id" :key="proInfo.id">
    <div class="img-box">
      <img :src="proInfo.img" class="img"  v-lazy="proInfo.img">
    </div>
    <div class="p-info">
      <h2>{{proInfo.name}}</h2>
      <div class="p-desc"><span class="em" v-for="(pds,key) in JSON.parse(proInfo.desc||'{}')">{{pds}}</span></div>
      <div class="p-price"><span class="font12">￥</span>{{proInfo.price | priceDoubel}}</div>
    </div>
    </a>
    <div class="numBox mgb10 ">
      <div class="mgb15">
      购买数量：
        <van-button   size="small"   color="#ff6600"  v-on:click ="delnum()"><span class="font20">-</span></van-button>
        <input type="number" v-model="orderInfo.student.length" class="numinput" >
        <van-button    size="small"  fab color="#ff6600"  v-on:click ="addnum()"><span class="font20">+</span></van-button>
      </div>
      <div class=" mgb15">
        合计价格：<span class="c-ff6600" ><span class="font12">￥</span><span class="bold">{{getAllPrice | priceDoubel}}</span></span>
      </div>
      <van-checkbox v-model="orderInfo.comfigs" >我已知晓并同于《研学服务协议》 </van-checkbox>
    </div>
    <div class="student-box mgb10">
      <div class="student-item" v-for="(item,key) in orderInfo.student">
        <div  class="student-title">学生{{key +1}}</div><span class="student-del" v-on:click="delStudent(key)">x</span>
        <div class="student-list">
          <van-field required
                     clearable
                     v-model="item.name"
                     label="姓名"
                     error-message=""
                     placeholder="请输入姓名" >
          </van-field>
          <van-field required
                     clearable
                     maxlength="18"
                     label="证件号码"
                     error-message=""
                     placeholder="请输入证件号码"
                     v-model="item.cardId">
          </van-field>
          <van-field  required
                      clearable
                      maxlength="11"
                      label="手机号码"
                      error-message=""
                      placeholder="请输入手机号码"
                      v-model="item.phone" >
          </van-field>
        </div>
      </div>
    </div>
    <div class="teacher-box mgb60">
      <div  class="student-title">联系人信息</div>
      <div class="student-list">
        <van-field required
                   clearable
                   label="姓名"
                   error-message=""
                   placeholder="请输入联系人姓名"
                   v-model="orderInfo.teacher.name">
        </van-field>
        <van-field  required
                    clearable
                    error-message=""
                    maxlength="11"
                    label="手机号码"
                    placeholder="请输入手机号码"
                    v-model="orderInfo.teacher.phone">
        </van-field>
        <van-field
          v-model="orderInfo.teacher.ver"
          center
          error-message=""
          maxlength="6"
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
        <van-field
          v-model="orderInfo.teacher.remark"
          rows="1"
          maxlength="200"
          show-word-limit
          autosize
          error-message=""
          label="备注"
          type="textarea"
          placeholder="请输入备注"
        />
      </div>
    </div>
    <van-submit-bar
      :price="getAllPrice*100"
      button-text="提交订单"
      @submit="onSubmit"
    />
    <!--<Footerbar :pid="proInfo.pid" submitorder = "true" :allprice ="getAllPrice"></Footerbar>-->
  </div>
</template>


<script>
  import  getDate from '../../server/getDate'
  export default {
    name: 'Index',
    components:{

    },
    data () {
      return {
        proInfo:{},
        msg: '',
        orderInfo:{comfigs:[true],student:[{name:'',cardType:'身份证',cardId:'',phone:''}],teacher:{name:'',phone:'',ver:'',remark:''}},
        allprice:0,
        options : ['身份证','学生证']
      }

    },
    mounted(){
     // this.allprice = this.proInfo.price;
    },
    created() {
      this.getProductInfo();
    },
    computed:{
      getAllPrice:function(){
        return this.allprice*this.orderInfo.student.length;
      }
    },
    methods:{
       getProductInfo() {
        getDate.getProDetail({id:this.$route.params.id},(e)=>{
          if(e.success){
            this.proInfo =e.data.results;
            this.allprice = e.data.results.price;
          }
        },(e)=>{

        })

      },
        addnum:function(){
          this.orderInfo.student.push({name:'',cardType:'身份证',cardId:'',phone:''});
        },
      delnum:function(){
        if(this.orderInfo.student.length<=1) return;
        this.orderInfo.student.splice(this.orderInfo.student.length-1,1)
      },
      delStudent:function(index){
          if(this.orderInfo.student.length<=1){
            return;
          }
          this.orderInfo.student.splice(index,1)
      },
      onSubmit(){
         if(!this.orderInfo.comfigs){
           this.$toast('请确认服务协议！');
           return;
         }
      },

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .p-item{
    margin: 10px;
    border:1px solid #ccc;
    background: #fff;
    padding: 10px 10px 10px 170px;
    overflow: hidden;
    zoom:1;
    clear: both;
    display: block;
    position: relative;
  }
  .p-item-one{
    border-bottom:1px solid #ccc;
    background: #fff;
    padding: 10px 10px 10px 170px;
    overflow: hidden;
    zoom:1;
    clear: both;
    display: block;
    position: relative;
  }
  .img-box{
    width:150px;
    height: 100%;
    position: absolute;
    left: 10px;
    top:10px;
    overflow: hidden;
  }
  .img-box .img{
    width: 100%;
    height: auto;
  }
  .p-info{
    width:100%;
    min-height:105px;
  }
  .p-info h2{
    font-size: 14px;
    margin: 0 0 5px 0;
    line-height: 20px;
    min-height: 40px;
    width: 100%;
    overflow: hidden;
    height: 40px;
  }
  .p-price{
    position: absolute;
    bottom: 10px;
    right:10px;
    color:#ff0000;
    font-size: 18px;
  }
  .p-desc{

  }
  .p-desc .em{
    font-size: 12px;
    background: #ff6600;
    color:#fff;
    text-align: center;
    padding: 2px 5px;
    display: inline-block;
    margin: 0 3px;
    border-radius: 3px;
  }
  body{ text-align: left}
 .numBox{padding: 10px;text-align: left; background: #fff ;}
  .numBox .addnum{ width:31px; height:31px; border: 1px solid #ccc; border-radius: 5px; display: inline-block;}
  .numinput{
    width: 100px;
    height: 29px;
    line-height: 29px;
    text-align: center;
     margin:  0 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .numBox .mint-cell-wrapper{
    background-size: 120% 0px !important;
  }
  .student-box{
    text-align: left;
    position: relative;
  }
  .student-title{
   background: #666;
    color:#fff;
    padding:10px;
  }
  .student-list{
    padding:10px 10px 0 10px;
    background: #fff;
  }
  .student-item{
    position: relative;
    margin-bottom: 10px;
  }
  .student-del{
    width:20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top:10px;
    line-height: 20px;
    text-align: center;
     border-radius: 20px;
    background: #fff;
    color:#666;
  }
  .teacher-box{
    margin-top: 10px;
    text-align: left;
  }
  .mu-fab-button.mu-button-small{
    width: 29px;height: 29px;
    vertical-align: middle;
  }
</style>
