<template>
  <div >

    <ProductImg v-bind:imgdata = "proInfo.imgArray"></ProductImg>
    <div class="p-d-info mgb10">
      <h2>{{proInfo.name}}</h2>
      <div class="p-d-desc"><span class="em" v-for="(pds,key) in JSON.parse(proInfo.desc||'{}')">{{pds}}</span></div>
      <div class="p-d-price"><span class="font12">￥</span>{{proInfo.price | priceDoubel}}</div>
    </div>
    <div class="p-d-quality mgb10">
      <ul>
        <li v-for="(item,key) in JSON.parse(proInfo.quality||'{}')">●&nbsp;{{item.val}}</li>
      </ul>
    </div>
    <div class="p-d-content mgb60" v-html="proInfo.content||''">
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"  url="tel:8852252" />
      <van-goods-action-button type="danger" text="立即预订" @click="goOrder(proInfo)" />
    </van-goods-action>
    <Bgloding :show="show"></Bgloding>

  </div>
</template>


<script>
  import  getDate from '../../server/getDate'
  import {mapActions,mapState} from 'vuex'
  export default {
    name: 'Index',
    components: {},
    data() {
      return {
        proInfo: {},
        msg: '',
        show:true
      }
    },
    computed: {
      ...mapState(["userInfo"])
    },
    created() {
      this.getProductInfo();
    },
    methods: {
        getProductInfo() {
        getDate.getProDetail({id:this.$route.params.id},(e)=>{
           if(e.success){
             this.show =false;
             this.proInfo =e.data.results;
           }
         },(e)=>{

         })

      },
      goOrder(data){
          if(this.userInfo.token){
            this.$router.push('/order/'+data.id+'');
          }else{
            this.$router.push('/login?page=/order/'+data.id);
          }


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

 .p-d-info{
   padding: 10px;
   max-height:105px;
   text-align: left;
   position: relative;
   line-height: 20px;
   background: #fff;
 }
 .p-d-info h2{
   font-size: 16px;
   margin: 0 0 5px 0;
   line-height: 24px;
   width: 100%;
   overflow: hidden;
 }
 .p-d-price{
   position: absolute;
   bottom: 10px;
   right:10px;
   color:#ff0000;
   font-size: 18px;
 }
 .p-d-desc{

 }
 .p-d-desc .em{
   font-size: 12px;
   background: #ff6600;
   color:#fff;
   text-align: center;
   padding: 2px 5px;
   display: inline-block;
   margin: 0 3px;
   border-radius: 3px;
 }
  .p-d-quality,.p-d-content{
    padding: 10px;
    background: #fff;
  }
  .p-d-quality li{
    text-align: left;
    color:#333;
    font-size: 14px;
    line-height: 25px;
  }
  .p-d-content{
      color:#333;
     text-align: left;
  }
 .p-d-content img{
   width: 100%;
 }
</style>
