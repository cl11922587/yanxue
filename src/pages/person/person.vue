<template>
  <div>
    <div class="person-banner">
      <mu-row justify-content="center" class="head">
        <mu-avatar :size="size">
          <img src="../../assets/image/toux.jpg">
        </mu-avatar>
      </mu-row>
    </div>

    <mu-row gutter class="" class="rowList">
      <mu-col span="12">
        <mu-paper :z-depth="3" >
          <mu-list>
            <mu-list-item  button  :ripple="false" to="/orderList">
              <mu-list-item-action>
                <mu-icon value="assignment"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>我的订单</mu-list-item-title>
                </mu-list-item-content>
            </mu-list-item>
          </mu-list>
        </mu-paper>
      </mu-col>
    </mu-row>
    <FooterTab active-item="person"></FooterTab>

  </div>
</template>


<script>
  export default {
    name: 'newsList',
    components:{

    },
    data () {
      return {
        msg: '',
        selected:"all",
        size:100

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
  .person-banner{
    background: #ff6600;
    width: 100%;
    height: 210px;
    position: relative;
  }
  .head{
    position: absolute;
    bottom: -50px;right: 40px;
  }
  .rowList{
    padding-top: 80px;
    text-align: left;
    background: #fff;
  }
</style>
