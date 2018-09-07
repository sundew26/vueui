<template>
  <div class="content">
    <panel>
      <div slot="title" class="title">默认：加载中</div>
      <loadmore :more.sync="more1"></loadmore>
    </panel>

    <panel>
      <div slot="title" class="title">默认：加载完成</div>
      <loadmore :more.sync="more2"></loadmore>
    </panel>

    <panel>
      <div slot="title" class="title">修改文案：加载中</div>
      <loadmore :more.sync="more3"></loadmore>
    </panel>

    <panel>
      <div slot="title" class="title">修改文案：加载完成</div>
      <loadmore :more.sync="more4"></loadmore>
    </panel>
  </div>
</template>

<script>
  import Loadmore from '../components/Loadmore.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Loadmore,
      Panel
    },
    data () {
      return {
        more1: {
          type: true
        },
        more2: {
          type: false
        },
        more3: {
          type: true,
          loading: 'loading',
          loaded: '加载完成'
        },
        more4: {
          type: false,
          loading: '加载中',
          loaded: '我们是有底线的'
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
</style>
