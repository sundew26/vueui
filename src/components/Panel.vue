<template>
  <div class="panel">
    <slot name="title"></slot>
    <div class="info" :style="{'border-width': border}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      border: {
        type: [Number, String],
        default: 0
      }
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
  .panel {
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin-top: 10rpx;
    .title {
      padding: 20rpx;
      font-size: 12px;
    }
    .info {
      border-style: solid;
      border-color: #e1e1e1;
      border-width: 0;
      font-size: 12px;
      background-color: #fff;
      display: block;
      padding: 10px;
    }
  }
</style>
