<template>
  <div>
    <div v-for="(item,index) in orderList">
      <OrderCard v-bind:orderInfo ="item"></OrderCard>
    </div>
  </div>
</template>


<script>


  export default {
    name: 'orderList',
    components:{

    },
    data () {
      return {
        orderList:[{orderNo:'123',orderCreatTime:'2018-02-02',pimg:'/static/image/pic1.jpg',pname:'我是产品我是产品我是产品我是产品',num:'12',price:'3999',status:'1'},{orderNo:'123',orderCreatTime:'2018-02-02',pimg:'/static/image/pic1.jpg',pname:'我是产品',num:'12',price:'3999',status:'3'}]
      }

    },
    mounted(){


    },
    computed:{

    },
    methods:{

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  body{ text-align: left}
 .numBox{margin: 10px;text-align: left}
  .numBox .addnum{ width:31px; height:31px; border: 1px solid #ccc; border-radius: 5px; display: inline-block;}

</style>
