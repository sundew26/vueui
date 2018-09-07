<template>
  <div class="loadmore">
    <div v-if="more.type">
      <span class="iconfont icon-loading"></span><span>{{more.loading || '加载中'}}</span>
    </div>
    <div v-else>
      <span class="lighter">————</span><span> {{more.loaded || '加载完成'}} </span><span class="lighter">————</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      more: {
        type: Object,
        twoWay: true,
        default: function () {
          return {}
        }
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
  .loadmore {
    font-size: 12px;
    margin-bottom: 20px;
    color: #aaa;
    position: relative;
    width: 65%;
    margin: 0 auto;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    padding: 21px 0;
    .icon-loading {
      display:inline-block;
      animation: icon-spin 2s linear;
      animation-iteration-count: infinite;
      margin-right: 5px;
    }
  }

  @keyframes icon-spin {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>
