<template>
  <div class="content">
    <panel>
      <div slot="title" class="title">微型按钮</div>
      <btn value="btn-min" belongs="btn btn-min" :callback="callback"></btn>
      <btn value="btn-min btn-success" belongs="btn btn-min btn-success" :callback="callback"></btn>
      <btn value="btn-min btn-warn" belongs="btn btn-min btn-warn" :callback="callback"></btn>
      <btn value="btn-min btn-danger" belongs="btn btn-min btn-danger" :callback="callback"></btn>
      <btn value="btn-min btn-disabled" belongs="btn btn-min btn-disabled" :callback="callback"></btn>
      <btn value="btn-min btn-empty" belongs="btn btn-min btn-empty" :callback="callback"></btn>
    </panel>
    
    <panel>
      <div slot="title" class="title">小型按钮</div>
      <btn value="btn-small" belongs="btn btn-small" :callback="callback"></btn>
      <btn value="btn-small btn-success" belongs="btn btn-small btn-success" :callback="callback"></btn>
      <btn value="btn-small btn-warn" belongs="btn btn-small btn-warn" :callback="callback"></btn>
      <btn value="btn-small btn-danger" belongs="btn btn-small btn-danger" :callback="callback"></btn>
      <btn value="btn-small btn-disabled" belongs="btn btn-small btn-disabled" :callback="callback"></btn>
      <btn value="btn-small btn-empty" belongs="btn btn-small btn-empty" :callback="callback"></btn>
    </panel>

    <panel>
      <div slot="title" class="title">标准按钮</div>
      <btn value="btn" belongs="btn" :callback="callback"></btn>
      <btn value="btn btn-success" belongs="btn btn-success" :callback="callback"></btn>
      <btn value="btn btn-warn" belongs="btn btn-warn" :callback="callback"></btn>
      <btn value="btn btn-danger" belongs="btn btn-danger" :callback="callback"></btn>
      <btn value="btn btn-disabled" belongs="btn btn-disabled" :callback="callback"></btn>
      <btn value="btn btn-empty" belongs="btn btn-empty" :callback="callback"></btn>
    </panel>

    <panel>
      <div slot="title" class="title">大型按钮</div>
      <btn value="btn-large" belongs="btn btn-large" :callback="callback"></btn>
      <btn value="btn-large btn-success" belongs="btn btn-large btn-success" :callback="callback"></btn>
      <btn value="btn-large btn-warn" belongs="btn btn-large btn-warn" :callback="callback"></btn>
      <btn value="btn-large btn-danger" belongs="btn btn-large btn-danger" :callback="callback"></btn>
      <btn value="btn-large btn-disabled" belongs="btn btn-large btn-disabled" :callback="callback"></btn>
      <btn value="btn-large btn-empty" belongs="btn btn-large btn-empty" :callback="callback"></btn>
    </panel>

    <panel>
      <div slot="title" class="title">加载按钮</div>
      <btn value="btn btn-loading" belongs="btn btn-loading" :callback="callback"></btn>
      <btn value="btn btn-success btn-loading" belongs="btn btn-success btn-loading" :callback="callback"></btn>
      <btn value="btn btn-warn btn-loading" belongs="btn btn-warn btn-loading" :callback="callback"></btn>
      <btn value="btn btn-danger btn-loading" belongs="btn btn-danger btn-loading" :callback="callback"></btn>
      <btn value="btn btn-disabled btn-loading" belongs="btn btn-disabled btn-loading" disabled :callback="callback"></btn>
      <btn value="btn btn-empty btn-loading" belongs="btn btn-empty btn-loading" :callback="callback"></btn>
    </panel>
  </div>
</template>

<script>
  import Btn from '../components/Buttons.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Btn,
      Panel
    },
    data () {
      return {
        active: true
      }
    },
    methods: {
      callback (cb) {
        setTimeout(function () {
          console.log(111, '回调结束')
          cb && cb()
          this.disable = false
          this.active = false
        }.bind(this), 3000)
        console.log('callback', this.active)
      }
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
  button {
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  .info {
    padding: 10px;
  }
</style>
