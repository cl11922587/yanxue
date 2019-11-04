<template>
  <div>
    <Carousel></Carousel>
    <FooterTab activeItem="0"></FooterTab>
    <van-tabs v-model="active" animated>
      <van-tab title="全部">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        <Pcard class=""  v-for="item in guoneiData"   v-bind:guoneiData="item"  ></Pcard>
        </van-list>
      </van-tab>
      <van-tab title="国内研学">
        <Pcard   v-for="item in guoneiData2"   v-bind:guoneiData="item"  v-if="guoneiData2.length>0"></Pcard>
        <Nodate  v-if="guoneiData2.length<=0"></Nodate>
      </van-tab>
      <van-tab title="国际研学">
        <Pcard  v-for="item in guoneiData3"    v-bind:guoneiData="item" v-if="guoneiData3.length>0"></Pcard>
        <Nodate  v-if="guoneiData3.length<=0"></Nodate>
      </van-tab>
    </van-tabs>
  </div>

</template>


<script>
  import axios from 'axios';
  import  getDate from './server/getDate'
  export default {
    name: 'Index',
    components: {},
    created() {
   //   this.getProductList(this.limit, this.page, this.ptype);
    },
    data() {
      return {
        msg: '',
        isBack: false,
        active: 0,
        limit: 4,
        page: 0,
        ptype: 1,
        loading: false,
        finished: false,
        guoneiData: [],
        guoneiData2: [],
        guoneiData3: [],
        total:100
      }
    },
    methods: {
      getProductList: function (limit, page, type) {
        var _this = this;
        getDate.getIndexList({limit:limit,page:page,type:type},(response)=>{
          if (response.success) {
                if (type == 1) {
                  this.guoneiData.push(...response.data.results.rows);
                  this.total =response.data.results.count;
                }
                if (type == 2) {
                  this.guoneiData2.push(...response.data.results.rows);
                }
                if (type == 2) {
                  this.guoneiData3.push(...response.data.results.rows);
                }
              }
        },(exception)=>{

        })

      },
      gettype: function (type) {
        this.$store.commit('TEST_INCREMENT')
        if (this.ptype == type) {
          return
        } else {
          this.limit = 10;
          this.page = 1;
          this.ptype = type;
          // this.getProductList(this.limit,this.page,this.ptype);
        }
      },
      onLoad() {
          if(this.total > this.page*this.limit){
            this.page++;
            this.getProductList(this.limit,this.page,this.ptype);
            this.loading = false;
          }else{
            console.log(1);
            this.finished=true;
            this.loading = false;
          }
      }
    }
  }
</script>


<style scoped>
  body {
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .font12 {
    font-size: 12px;
  }

</style>
