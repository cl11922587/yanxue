<template>
  <div >
    <Footer-Tab activeItem="1"></Footer-Tab>

    <van-tabs v-model="active" animated>
      <van-tab title="全部">
        <NewsCard  v-bind:guoneiData ="guoneiData"></NewsCard>
      </van-tab>
      <van-tab title="政策">
        <NewsCard  v-bind:guoneiData ="guoneiData"></NewsCard>
      </van-tab>
      <van-tab title="往期记录">
        <NewsCard  v-bind:guoneiData ="guoneiData2"></NewsCard>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
  // import  {getNewLit} from '../../../sever/getDate' //加载静态数据
  import  getDate from '../../server/getDate'

  export default {
    name: 'newsList',
    components:{

    },
    mounted(){
      // NewList().then(res=>{
      //   res.data.forEach((key)=>{
      //     this.guoneiData.push(key);
      //     this.guoneiData2.push(key)
      //   });
      // }).catch(err=>{
      //
      // })
    },
    created(){
      this.getNewLits();
    },
    data () {
      return {
        active:0,
        msg: '',
        selected:0,
        guoneiData:[],
        guoneiData2:[],
        guoneiData3:[],
        loadings:true,
      }
    },
    methods:{
      getNewLits(){
        var _this =this;
        getDate.getNewLit({type:1,page:1,limit:10},function(e){
            if(e.success){
              e.data.results.forEach((key)=>{
                _this.guoneiData.push(key);
                _this.guoneiData2.push(key);
                _this.loadings=false;
              })
            }
        },function (e) {
          _this.loadings=false;
        })

      },
      loading () {

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
  .font12{
    font-size: 12px;
  }
</style>
