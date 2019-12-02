<template>
  <div class="news-box">
    <div class="news-name">{{newsInfo.name}}</div>
    <div class="news-content" v-html="newsInfo.content"></div>
    <div class="font14 news-ready c-666 bor1-e6e6e6 mgb5"><span class="pull-right">{{newsInfo.creatTime | forMat}}</span><span class="pull-left">阅读（{{newsInfo.read}}）</span> </div>
    <!--<a class="tl font14 p5 db c-666">上一篇：111</a>-->
    <!--<a  class="tl font14 p5 db c-666">下一篇：222</a>-->
  </div>
</template>


<script>
  import  getDate from '../../server/getDate'
  export default {
    name: 'news',
    data () {
      return {
        msg: '',
        selected:"all",
        newsInfo:{},
        id:1,
      }
    },
    created(){
      this.getNewLits()
    },
    methods:{
      async getNewLits (){
        await  getDate.getNewDetail({id:this.$route.params.id},(e)=>{
          if(e.success){
            this.newsInfo = e.data.results;
          }
        },()=>{
        })
      },
      // async getReader(){
      //   await getDate.ReaderNews({id:this.$route.params.id},()=>{
      //
      //   },()=>{
      //   })
      // }


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .news-box{
   padding: 10px;
   background: #fff;
  }
  .news-name{
    text-align: center;
    padding: 5px 0;
    border-bottom: 1px  solid #e6e6e6;
    line-height: 30px;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;

  }
  .news-content{
    margin-bottom: 20px;
    width: 100%;
    overflow: hidden;
  }
  .news-content img{
    width: 100%;
    height: auto;
  }
  .news-ready{
    clear: both;
    zoom:1;
    overflow: hidden;
    padding: 5px 0;
  }
</style>
