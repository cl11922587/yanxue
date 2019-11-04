<template>
  <div >
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <Carousel></Carousel>
    <FooterTab activeItem="0"></FooterTab>
    <van-tabs v-model="active" animated>
      <van-tab title="研学产品">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
            <Pcard class=""  v-for="item in guoneiData"   v-bind:guoneiData="item"  ></Pcard>
        </van-list>
      </van-tab>
    </van-tabs>
    </van-pull-refresh>
  </div>
</template>


<script>
  import axios from 'axios';
  import  getDate from './server/getDate'
  export default {
    name: 'Index',
    components: {},
    created() {
    },
    data() {
      return {
        msg: '',
        value:'',
        isBack: false,
        isLoading:false,
        show:true,
        active: 0,
        limit: 4,
        page: 0,
        ptype: 1,
        loading: false,
        finished: false,
        guoneiData: [],
        total:100
      }
    },
    methods: {
      getProductList: function (limit, page, type) {
        getDate.getIndexList({limit:limit,page:page,type:type},(response)=>{
          if (response.success) {
                if (type == 1) {
                  this.guoneiData.push(...response.data.results.rows);
                  this.total =response.data.results.count;
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
            this.finished=true;
            this.loading = false;
          }
      },
      onSearch(){

      },
      onRefresh(){
        setTimeout(()=>{
          this.guoneiData.splice(0,this.guoneiData.length);
          this.page =1;
          this.$toast('刷新成功');
          this.isLoading = false;
          this.getProductList(this.limit,this.page,this.ptype);
          this.finished=false;
        },1000)

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
