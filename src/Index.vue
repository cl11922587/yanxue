<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-search
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @keyup="onSearch"
        @cancel="onCancel"
      >
      </van-search>
      <transition name="slide-height">
      <div class="searchBox" v-if="searchShow" >
        <ul>
          <li  v-for="(i,key) in option1" v-html="sizeColor(i.name,searchValue)" @click="Gotoproduct(i)"></li>
        </ul>
      </div>
      </transition>
      <Carousel></Carousel>
      <van-tabs v-model="active" animated>
        <van-tab title="研学产品">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <Pcard class=""
                   v-for="item in guoneiData"
                   v-bind:guoneiData="item"
                   :key="item.id">
            </Pcard>
          </van-list>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
    <Bgloding :show="isShowBg"></Bgloding>
  </div>
</template>


<script>
  import axios from 'axios';
  import getDate from './server/getDate'
  let lodash  = require('lodash');

  export default {
    name: 'Index',
    data() {
      return {
        searchValue: '',
        isShowBg: true,
        isLoading: false,
        active: 0,
        limit: 10,
        page: 0,
        ptype: 1,
        loading: false,
        finished: false,
        guoneiData: [],
        total: 11,
        searchShow:false,
        option1: [

        ],
        timeSame :null
      }
    },computed:{

    },
    methods: {
      /*
      * 获取数据接口
      * */
      async getProductList (limit, page, type) {
        await  getDate.getIndexList({limit: limit, page: page, type: type}, (response) => {
          if (response.success) {
            if (type == 1) {
              this.isShowBg = false;
              this.guoneiData.push(...response.data.results.rows);
              this.total = response.data.results.count;
            }
          }
        }, (exception) => {

        })
      },
      onLoad() {
        if (this.total > this.page * this.limit) {
          this.page++;
          if (this.page == 1) {
            this.getProductList(this.limit, this.page, this.ptype);
            this.loading = false;
          } else {
            setTimeout(() => {
              this.getProductList(this.limit, this.page, this.ptype);
              this.loading = false;
            }, 1000)
          }
        } else {
          this.finished = true;
          this.loading = false;
        }
      },
      onSearch:lodash.debounce(function(){
        this.option1=[];
        if(this.searchValue !=""){
          this.searchShow=true;
          getDate.getSearchProduct({keyWord:this.searchValue},(response)=>{
            this.option1.push(...response.data.results.rows)  ;
          },()=>{

          })
        }else{
          this.searchShow=false;
        }
      },600),
      onRefresh() {
        setTimeout(() => {
          this.guoneiData.splice(0, this.guoneiData.length);
          this.page = 1;
          this.$toast('刷新成功');
          this.isLoading = false;
          this.getProductList(this.limit, this.page, this.ptype);
          this.finished = false;
        }, 1000)
      },
      sizeColor(value,size){
        var reg = new RegExp(size, "g");;
        return value.replace(reg,'<span class="red">'+size+'</span>');
      },
      Gotoproduct(i){
        this.$router.push('/product/'+i.id+'');
      },
      onCancel(){
        this.option1=[];
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
  }

  a {
    color: #42b983;
  }

  .font12 {
    font-size: 12px;
  }
 .searchBox{
   position: absolute;
   z-index: 8;
   background: #fff;
   width: 100%;
   box-sizing: border-box;
   border-bottom: 1px solid #dbdbdb;
 }
  .searchBox li{
    color:#969799;
    display: block;
    padding: 0 20px;
    border-bottom: 1px dotted #dbdbdb;
    line-height: 30px;
    font-size: 13px;
    background: #fff;
  }
  .searchBox li:hover{
    background: #fbfbfb;
  }
  .searchBox li:last-child{
    border-bottom: 0;
  }
  .slide-height-leave-active {
    animation: bounce-in .5s reverse;
  }
  .slide-height-enter-active {
    animation: bounce-in .5s;
  }
  @keyframes bounce-in {
    0% {
      height: 0;
    }
    100% {
     height:auto;
    }
  }

</style>
