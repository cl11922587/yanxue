<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <OrderCard  v-for="(item,index) in orderList" v-bind:orderInfo ="item"></OrderCard>
    </van-list>
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
        orderList:[],
        limit:10,
        page:0,
        loading:false,
        finished:false,
        total:11
      }

    },
    created(){
    },
    mounted(){


    },
    computed:{

    },
    methods:{
        getOrderList(){
          getDate.getOrderList({limit:this.limit,page:this.page},(response)=>{
            if(response.success){
              this.orderList.push(...response.data.results.rows);
              this.total = response.data.results.count
            }

          },()=>{

          })

        },
        onLoad() {
          if(this.total > this.page*this.limit){
            this.page++;
            if(this.page ==1){
              this.getOrderList(this.limit,this.page);
              this.loading = false;
            }else{
              setTimeout(()=>{
                this.getOrderList(this.limit,this.page);
                this.loading = false;
              },500)
            }
          }else{
            this.finished=true;
            this.loading = false;
          }
  },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  body{ text-align: left}
 .numBox{margin: 10px;text-align: left}
  .numBox .addnum{ width:31px; height:31px; border: 1px solid #ccc; border-radius: 5px; display: inline-block;}

</style>
