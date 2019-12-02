<template>
  <div>
    <div>
      <OrderCard v-bind:orderInfo ="orderInfo"></OrderCard>
      <div class="student-box mgb10 bc-fff">
        <div class="student-item" v-for="(item,key) in travelList">
          <div  class="student-title">学生{{key +1}}</div>
          <div class="student-list">
            <van-field readonly v-model="item.peopleName" type="text"  placeholder="姓名"  icon="account_circle" full-width></van-field>
            <van-field readonly  v-model="item.peopleCardId" placeholder="证件号码"  icon="comment" full-width></van-field>
            <van-field  readonly  v-model="item.peoplePhone"  placeholder="手机号码"  icon="phone" full-width></van-field>
          </div>
        </div>
      </div>
      <div class="teacher-box mgb10 bc-fff">
        <div  class="student-title">联系人信息</div>
        <div class="student-list">
          <van-field readonly v-model="orderInfo.concatName" placeholder="姓名"  icon="account_circle" full-width></van-field>
          <van-field readonly   v-model="orderInfo.concatPhone"  placeholder="手机号码"  icon="phone" full-width></van-field>
          <van-field  readonly  icon="comment" v-model="orderInfo.remark" placeholder="备注信息" multi-line :rows="3" :rows-max="6" full-width></van-field>
        </div>
      </div>
    </div>
    <div class="teacher-box mgb20 bc-fff">
      <div  class="student-title">订单信息</div>
      <div class="step-box">
        <van-steps direction="vertical" :active="orderInfo.state-1">
          <van-step>
            <h3 class="font14">下单时间</h3>
            <p>{{orderInfo.createTime  | forMat}}</p>
          </van-step>
          <van-step>
            <h3  class="font14">支付时间</h3>
            <p>{{orderInfo.payTime? (orderInfo.payTime | forMat) :''}}</p>
          </van-step>
          <van-step>
            <h3  class="font14">出行时间</h3>
            <p>{{orderInfo.travelTime? (orderInfo.travelTime | forMat) :''}}</p>
          </van-step>
          <van-step v-if="orderInfo.state==4">
            <h3  class="font14">退款时间</h3>
            <p>{{orderInfo.blackTime? (orderInfo.blackTime | forMat) :''}}</p>
          </van-step>
          <van-step>
            <h3  class="font14">完成时间</h3>
            <p>{{orderInfo.orderComTime? (orderInfo.orderComTime | forMat) :''}}</p>
          </van-step>
        </van-steps>
      </div>
    </div>
  </div>
</template>


<script>
  import  getDate from '../../server/getDate'
  export default {
    name: 'orderList',
    components:{

    },
    data () {
      return {
        orderInfo:{},
        travelList:{},
      }

    },
    mounted(){


    },
    created(){
      this.getOrderDetails();
    },
    computed:{

    },
    methods:{
      getOrderDetails(){
        getDate.getOrderDetail({id:this.$route.params.id},(response)=>{
          if(response.success){
            this.orderInfo = response.data.results.orderInfo;
            this.travelList  = response.data.results.travelList.rows;
          }

        },()=>{

        })

      },
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
