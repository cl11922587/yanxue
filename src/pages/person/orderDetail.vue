<template>
  <div>
    <div>
      <OrderCard v-bind:orderInfo ="orderDetail"></OrderCard>
      <div class="student-box mgb10 bc-fff">
        <div class="student-item" v-for="(item,key) in orderInfo.student">
          <div  class="student-title">学生{{key +1}}</div>
          <div class="student-list">
            <mu-text-field readonly v-model="item.name" type="text"  placeholder="姓名"  icon="account_circle" full-width></mu-text-field>
            <mu-select readonly  v-model="item.cardType" icon="grade"  full-width>
              <mu-option v-for="(option,index) in options" :key="index" :label="option" :value="option"></mu-option>
            </mu-select>
            <mu-text-field readonly  v-model="item.cardId" placeholder="证件号码"  icon="comment" full-width></mu-text-field>
            <mu-text-field  readonly  v-model="item.phone"  placeholder="手机号码"  icon="phone" full-width></mu-text-field>
          </div>
        </div>
      </div>
      <div class="teacher-box mgb10 bc-fff">
        <div  class="student-title">联系人信息</div>
        <div class="student-list">
          <mu-text-field readonly v-model="orderInfo.teacher.name" placeholder="姓名"  icon="account_circle" full-width></mu-text-field>
          <mu-text-field readonly   v-model="orderInfo.teacher.phone"  placeholder="手机号码"  icon="phone" full-width></mu-text-field>
          <mu-text-field  readonly  icon="comment" v-model="orderInfo.teacher.remark" placeholder="备注信息" multi-line :rows="3" :rows-max="6" full-width></mu-text-field>
        </div>
      </div>
    </div>
    <div class="teacher-box mgb20 bc-fff">
      <div  class="student-title">订单信息</div>
      <div class="step-box">
        <mu-stepper  orientation="vertical":active-step="vactiveStep" active-step="5">
          <mu-step>
            <mu-step-label>
              下单时间<br/>
              2019-09-09
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              下单时间<br/>
              2019-09-09
            </mu-step-label>
            <mu-step-content>
              <p>
                2019-09-09
              </p>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              确认时间
            </mu-step-label>
            <mu-step-content>
              <p>
                2019-09-09
              </p>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              支付时间
            </mu-step-label>
            <mu-step-content>
              <p>
                2019-09-09
              </p>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              出行时间
            </mu-step-label>
            <mu-step-content>
              <p>
                2019-09-09
              </p>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              结束时间
            </mu-step-label>
            <mu-step-content>
              <p>
                2019-09-09
              </p>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              退款时间
            </mu-step-label>
            <mu-step-content>
              <p>
                2019-09-09
              </p>
            </mu-step-content>
          </mu-step>
        </mu-stepper>
      </div>
    </div>
  </div>
</template>


<script>


  export default {
    name: 'orderList',
    components:{

    },
    data () {
      return {
        orderDetail:{orderNo:'123',orderCreatTime:'2018-02-02',pimg:'/static/image/pic1.jpg',pname:'我是产品我是产品我是产品我是产品',num:'12',price:'3999',status:'1'},
        orderInfo:{comfigs:[true],student:[{name:'',cardType:'身份证',cardId:'',phone:''}],teacher:{name:'',phone:'',ver:'',remark:''}},
      }

    },
    mounted(){


    },
    computed:{

    },
    methods:{

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  body{ text-align: left}
  .numBox{margin: 10px;text-align: left}
  .numBox .addnum{ width:31px; height:31px; border: 1px solid #ccc; border-radius: 5px; display: inline-block;}
  .student-title{
    text-align: left;
    background: #666;
    color:#fff;
    padding:10px;
  }
  .student-list{
    padding:10px 10px 0 10px;
  }
  .teacher-box{
    margin-top: 10px;
    text-align: left;
  }
  .step-box{
    padding: 20px 0;
  }
</style>
