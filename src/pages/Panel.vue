<template>
  <div class="content">
    <panel class="padding-10">
      <div>默认</div>
    </panel>
    <panel class="padding-10">
      <div slot="title" class="title">有标题</div>
      <div>有标题的panel</div>
    </panel>
    <panel border="1px" class="padding-10">
      <div slot="title" class="title">有边框</div>
      <div>有边框的panel</div>
    </panel>
    <panel border="1px 0 1px 0" class="padding-10">
      <div slot="title" class="title">边框自定义</div>
      <div>边框为1px 0 1px 0</div>
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

<style scoped>
@import "../static/common.scss";
  
</style>
