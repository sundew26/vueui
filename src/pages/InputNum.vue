<template>
  <div class="content">
    <input-num name="price" init-val="5" max="10" min="2" increase="3"></input-num>
    <input-num></input-num>
    <input-num init-val="500" max="100" min="20" increase="3"></input-num>
  </div>
</template>

<script>
  import InputNum from '../components/InputNum.vue'
  export default {
    components: {
      InputNum
    }
  }
</script>

<style scoped>
@import "../static/common.scss";
  .content {
    margin: 20px 0;
  }
  .divder {
    margin: 20px;
  }
</style>
