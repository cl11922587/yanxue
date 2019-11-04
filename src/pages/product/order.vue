<template>
  <div>
    <Pcard  v-bind:guoneiData ="proInfoList" :pone="true"></Pcard>
    <div class="numBox mgb10 ">
      <div class="mgb15">
      购买数量：
        <mu-button   small  fab color="blue"  v-on:click ="delnum()">
        <mu-icon value="remove" ></mu-icon>
        </mu-button>
        <input type="number" v-model="orderInfo.student.length" class="numinput" >
        <mu-button   small fab color="blue" v-on:click ="addnum()">
        <mu-icon value="add" ></mu-icon>
      </mu-button>
      </div>
      <div class=" mgb15">
        合计价格：<span class="c-ff6600" ><span class="font12">￥</span><span class="bold">{{getAllPrice | priceDoubel}}</span></span>
      </div>
      <mu-checkbox v-model="orderInfo.comfigs" :label="'我已知晓并同于《研学服务协议》'"></mu-checkbox>
    </div>
    <div class="student-box mgb10">
      <div class="student-item" v-for="(item,key) in orderInfo.student">
        <div  class="student-title">学生{{key +1}}</div><span class="student-del" v-on:click="delStudent(key)">x</span>
        <div class="student-list">
          <mu-text-field  v-model="item.name" type="text"  placeholder="姓名"  icon="account_circle" full-width></mu-text-field>
          <mu-select  v-model="item.cardType" icon="grade"  full-width>
            <mu-option v-for="(option,index) in options" :key="index" :label="option" :value="option"></mu-option>
          </mu-select>
          <mu-text-field :max-length="18" v-model="item.cardId" placeholder="证件号码"  icon="comment" full-width></mu-text-field>
          <mu-text-field  :max-length="11" v-model="item.phone"  placeholder="手机号码"  icon="phone" full-width></mu-text-field>
        </div>
      </div>
    </div>
    <div class="teacher-box mgb10">
      <div  class="student-title">联系人信息</div>
      <div class="student-list">
        <mu-text-field v-model="orderInfo.teacher.name" placeholder="姓名"  icon="account_circle" full-width></mu-text-field>
        <mu-text-field  :max-length="11" v-model="orderInfo.teacher.phone"  placeholder="手机号码"  icon="phone" full-width></mu-text-field>
        <mu-row gutter>
          <mu-col span="8">
            <div class="grid-cell"><mu-text-field :max-length="6" v-model="orderInfo.teacher.ver" placeholder="验证码"  icon="help" full-width></mu-text-field></div>
          </mu-col>
          <mu-col span="4"><mu-button color="success" full-width>验证码</mu-button></mu-col>
        </mu-row>
        <mu-text-field  :max-length="200" icon="comment" v-model="orderInfo.teacher.remark" placeholder="备注信息" multi-line :rows="3" :rows-max="6" full-width></mu-text-field>
      </div>
    </div>
    <Footerbar :pid="proInfo.pid" submitorder = "true" :allprice ="getAllPrice"></Footerbar>
  </div>
</template>


<script>
  export default {
    name: 'Index',
    components:{

    },
    data () {
      return {
        proInfo:{pimgs:[{image:'/static/image/banner.jpg',title:'111'},{image:'/static/image/banner.jpg',title:'222'}],pid:'123',pname:'精品研学精品研学精品研学精品研学精品研学',pdesc:['精品研学','研学经典'],price:'6999',quality:[{type:1,val: '课程介绍'},{type:1,val: '课程介绍'},{type:1,val: '课程介绍'}],content:'<div>是</div>',img:"/static/image/pic1.jpg"},
        msg: '',
        orderInfo:{comfigs:[true],student:[{name:'',cardType:'身份证',cardId:'',phone:''}],teacher:{name:'',phone:'',ver:'',remark:''}},
        allprice:0,
        proInfoList:[],
        options : ['身份证','学生证']
      }

    },
    mounted(){
      this.allprice = this.proInfo.price;
      this.proInfoList.push(this.proInfo);

    },
    computed:{
      getAllPrice:function(){
        return this.allprice*this.orderInfo.student.length;
      }
    },
    methods:{
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
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
