<template>
  <div class="news-box">
    <div class="news-name">{{newsInfo.name}}</div>
    <div class="" v-html="newsInfo.content"></div>
    <div class="font14 news-ready bor1-ccc mgb5"><span class="pull-right">{{newsInfo.creatTime | forMat}}</span><span class="pull-left">阅读（{{newsInfo.read}}）</span> </div>
    <a class="tl font14 p5 db">上一篇：111</a>
    <a  class="tl font14 p5 db">下一篇：222</a>
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
      this.getNewLits();
    },
    methods:{
      async getNewLits (){
        var _this =this;
        await  getDate.getNewDetail({id:this.$route.params.id},function(e){
          if(e.success){
            _this.newsInfo = e.data.results;
          }

        },function(){

        })
      }


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    margin:0;
    padding: 0;

  }
  .news-box{
   padding: 10px;
    float: left;
  }

  .news-name{
    padding: 5px 0;
  border-bottom: 1px  solid #ccc;
    line-height: 20px;
    margin-bottom: 10px;
    font-weight: bold;

  }
  .news-ready{
    clear: both;
    zoom:1;
    overflow: hidden;
    padding: 5px 0;
  }
</style>
