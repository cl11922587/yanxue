<template>
  <div class="nodata">
    <van-icon name="warn-o"  size ="30" color="#666666" /><br/>
    很抱歉没有更多数据...
  </div>
</template>

<script>
    export default {
        name: "nodate"
    }
</script>

<style scoped>
  .nodata{
    background: #fff;
    padding: 40px;
    text-align: center;
    margin-top: 10px;
    color:#666666;
  }
</style>
