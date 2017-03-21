<template>
  <div class="content">
    <progress-bar p-w="200" p-h="10" position="top"></progress-bar>
    <progress-bar p-w="200" percentage="30" position="top"></progress-bar>
    <progress-bar p-w="200" p-h="10" percentage="60" position="top"></progress-bar>
    <progress-bar p-w="200" percentage="100" position="top"></progress-bar>
    <progress-bar percentage="50" p-w="100%" position="top"></progress-bar>
    <progress-bar p-w="200" p-h="10" position="left"></progress-bar>
    <progress-bar p-w="200" percentage="30" position="left"></progress-bar>
    <progress-bar p-w="200" p-h="10" percentage="60" position="left"></progress-bar>
    <progress-bar p-w="200" percentage="100" position="left"></progress-bar>
    <progress-bar p-w="100%" percentage="100" position="left"></progress-bar>
    <progress-bar p-w="200" p-h="10" position="right"></progress-bar>
    <progress-bar p-w="200" percentage="30" position="right"></progress-bar>
    <progress-bar p-w="200" p-h="10" percentage="60" position="right"></progress-bar>
    <progress-bar p-w="200" percentage="100" position="right"></progress-bar>
    <progress-bar p-w="100%" position="right"></progress-bar>
    <progress-bar p-w="200" p-h="10" position="inner"></progress-bar>
    <progress-bar p-w="200" percentage="30" position="inner"></progress-bar>
    <progress-bar p-w="200" p-h="10" percentage="60" position="inner"></progress-bar>
    <progress-bar p-w="200" percentage="100" position="inner"></progress-bar>
    <progress-bar p-w="100%" percentage="60" position="inner"></progress-bar>
    <progress-bar p-w="200" p-h="10" position="bottom"></progress-bar>
    <progress-bar p-w="200" percentage="30" position="bottom"></progress-bar>
    <progress-bar p-w="200" p-h="10" percentage="60" position="bottom"></progress-bar>
    <progress-bar p-w="200" percentage="100" position="bottom"></progress-bar>
    <progress-bar p-w="100%" percentage="30" position="bottom"></progress-bar>
    <progress-bar p-type="circle" percentage="20" p-h="10" size="100"></progress-bar>
    <progress-bar p-type="circle" percentage="50" p-h="10" size="100"></progress-bar>
    <progress-bar p-type="circle" percentage="60" p-h="10" size="100"></progress-bar>
    <progress-bar p-type="circle" percentage="100" p-h="10" size="100"></progress-bar>
    <div class="clearfix"></div>
    <progress-bar p-type="circle" percentage="30"></progress-bar>
    <progress-bar p-type="circle" percentage="50" p-h="10"></progress-bar>
    <progress-bar p-type="circle" percentage="70" p-h="10"></progress-bar>
    <progress-bar p-type="circle" percentage="100" p-h="10"></progress-bar>
    <div class="clearfix"></div>
    <progress-bar p-type="circle" percentage="30" p-h="5"></progress-bar>
    <progress-bar p-type="circle" percentage="50" p-h="5"></progress-bar>
    <progress-bar p-type="circle" percentage="70" p-h="5"></progress-bar>
    <progress-bar p-type="circle" percentage="100" p-h="5"></progress-bar>
    <progress-bar p-type="circle" percentage="80" size="400" p-h="5"></progress-bar>
  </div>
</template>

<script>
  import ProgressBar from '../components/ProgressBar.vue'
  export default {
    components: {
      ProgressBar
    }
  }
</script>

<style scoped>
@import "../static/common.scss";
  .content {
    padding: 50px;
  }
  .progress-bar-outer {
    margin: 20px;
    float: left;
  }
</style>
