<template>
  <div class="content">
    <panel>
      <div slot="title" class="title">默认</div>
      <div class="panel-text">默认</div>
    </panel>
    <panel>
      <div slot="title" class="title">有标题</div>
      <div class="panel-text">有标题的panel</div>
    </panel>
    <panel border="1px">
      <div slot="title" class="title">有边框</div>
      <div class="panel-text">有边框的panel</div>
    </panel>
    <panel border="1px 0 1px 0">
      <div slot="title" class="title">边框自定义</div>
      <div class="panel-text">边框为1px 0 1px 0</div>
    </panel>
  </div>
</template>

<script>
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Panel
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
  .panel-text {
    line-height: 28px;
    padding: 0 10px;
  }
</style>
