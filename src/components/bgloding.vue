<template>
  <van-overlay :show="show">
    <van-loading type="spinner" class="position-loading" color="#ffffff" />
  </van-overlay>
</template>

<script>
    export default {
        name: "bgloding",
       props:['show'],
    }
</script>

<style scoped>
.position-loading{ position: absolute; top: 50%;left: 50%; transform: translate(-50%, -50%)}
</style>
