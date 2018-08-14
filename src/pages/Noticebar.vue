<template>
  <div class="content">
    <noticebar>这是一个noticebar，滚动文字很长。循环滚动，时间间隔可以自己设置。</noticebar>
  </div>
</template>

<script>
  import Noticebar from '../components/Noticebar'
  export default {
    components: {
      Noticebar
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../static/common.scss";
 
</style>
