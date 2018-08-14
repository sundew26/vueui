<template>
  <div class="noticebar">
    <div class="icon"></div>
    <div class="scoller">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
    },
    data () {
      return {
      }
    },
    watch: {
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  .scoller {
    width: 100%;
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    position: relative;
  }
</style>
