<template>
  <div class="content padding-10">
    <panel>
      <div slot="title" class="title">默认</div>
      <input-num></input-num>
    </panel>

    <panel>
      <div slot="title" class="title">初始化5</div>
      <input-num name="price" init-val="5"></input-num>
    </panel>

    <panel>
      <div slot="title" class="title">最大10，最小2</div>
      <input-num name="price" init-val="5" max="10" min="2"></input-num>
    </panel>

    <panel>
      <div slot="title" class="title">最大10，最小2，自增2</div>
      <input-num name="price" init-val="5" max="10" min="2" increase="2"></input-num>
    </panel>

    <panel>
      <div slot="title" class="title">箭头类型</div>
      <input-num arrow="true"></input-num>
    </panel>

    <panel>
      <div slot="title" class="title">箭头类型，初始化5</div>
      <input-num arrow="true" name="price" init-val="5"></input-num>
    </panel>

    <panel>
      <div slot="title" class="title">箭头类型，最大10，最小2</div>
      <input-num arrow="true" name="price" init-val="5" max="10" min="2"></input-num>
    </panel>

    <panel>
      <div slot="title" class="title">箭头类型，初始化5，最大100，最小10，自增5</div>
      <input-num arrow="true" name="price" init-val="5" max="100" min="10" increase="5"></input-num>
    </panel>
  </div>
</template>

<script>
  import InputNum from '../components/InputNum.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      InputNum,
      Panel
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
