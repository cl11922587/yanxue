<template>
  <div id="mine" v-if="userInfo.token">
    <!--用户-->
    <van-cell-group>
      <van-cell
        style="background-color: #1989fa;color:#FFF; padding-top: 2.6rem;"
        label-class="labelClass"
        is-link
        :center=true
      >
        <template slot="title">
          <div class="personMsg">
            <img class="iconImage" :src="info.icon_url" alt="" @click="getMsg">
            <div class="personInfo">
              <span>{{info.real_name}}</span>
              <span>手机号：{{info.phone}}</span>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <!--我的订单-->
    <van-cell-group>
      <van-cell
        title="我的订单"
        icon="label"
        value="查看全部订单"
        @click="$router.push({path: '/orderList'})"
        is-link>
      </van-cell>
      <router-link tag="div" :to="{path: '/orderList'}">
        <van-grid>
          <van-grid-item
            v-for="(order, index) in orderData"
            :key="index"
            :icon="order.icon"
            :text="order.title">
          </van-grid-item>
        </van-grid>
      </router-link>
    </van-cell-group>
    <!--我的优惠券-->
    <!--<van-cell-group style="margin-top: 0.4rem">-->
      <!--<van-cell title="我的优惠券" icon="gold-coin" value="0张" is-link></van-cell>-->
      <!--<van-cell title="我的收货地址" icon="todo-list" is-link></van-cell>-->
    <!--</van-cell-group>-->
    <!--联系客服-->
    <van-cell-group style="margin-top: 0.4rem">
      <van-cell title="联系客服" icon="phone" value="客服时间 07:00-22:00" is-link></van-cell>
      <van-cell title="意见反馈" icon="smile-comment" is-link  @click="mout()"></van-cell>
    </van-cell-group>
    <!--路由的出口-->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  <Login v-else/>

</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: "Mine",
    data() {
      return {
        orderData: [
          {icon: 'cart-circle-o', title: '待支付'},
          {icon: 'logistics', title: '待出行'},
          {icon: 'smile-comment-o', title: '已出行'},
          {icon: 'thumb-circle-o', title: '已完成'},
        ],

      }
    },
    computed: {
      ...mapState(["userInfo"]),
      info(){
        return  JSON.parse(this.userInfo.info);
      }
    },
    components: {
    },
    methods:{
      ...mapMutations(["RESET_USER_INFO"]),
      getMsg(){
        // 清空本地的数据
        this.RESET_USER_INFO();
        this.$toast('退出成功')
      },
      mout(){
        this.$toast('敬请期待');
      }
    }
  }
</script>

<style scoped>
  #mine {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }

  .van-nav-bar {
    background-color: #3bba63;
  }

  .van-nav-bar__title {
    color: #fff;
    font-size: 1rem;
  }

  .personMsg {
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .personMsg > img {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    border: 0.12rem solid #FFF;
  }

  .personInfo {
    display: flex;
    flex-direction: column;
    margin-left: 0.8rem;
  }

  .van-cell__left-icon {
    color: orangered;
    font-size: 1.2rem;
  }

  /*转场动画*/
  .router-slider-enter-active, .router-slider-leave-active{
    transition: all 0.3s;
  }

  .router-slider-enter, .router-slider-leave-active{
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>
