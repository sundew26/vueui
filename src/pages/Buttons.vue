<template>
  <div class="content">
    <p>标准</p>
    <btn btn-w="100%" value="btn 100%" belongs="btn" :callback="callback()"></btn>
    <btn btn-w="30%" value="btn-primary 30%" belongs="btn-primary" :callback="callback"></btn>
    <btn btn-w="30%" loading="true" value="btn-primary" belongs="btn-primary radius" :callback="callback"></btn>
    <btn btn-w="30%" value="btn-primary 30%" belongs="btn-primary" :callback="callback"></btn>
    <btn btn-w="30%" value="btn-warn" belongs="btn-warn" :callback="callback"></btn>
    <btn btn-w="30%" loading="true" value="btn-warn" belongs="btn-warn radius" :callback="callback"></btn>
    <btn btn-w="30%" value="btn-warn" belongs="btn-warn radius20" :callback="callback"></btn>
    <btn btn-w="30%" value="btn-delete"  belongs="btn-delete" :callback="callback"></btn>
    <btn btn-w="30%" loading="true" value="btn-delete"  belongs="btn-delete radius" :callback="callback"></btn>
    <btn btn-w="30%" value="btn-delete"  belongs="btn-delete radius20" :callback="callback"></btn>
    <btn btn-w="30%" value="btn-ghost 30%" belongs="btn-ghost" :callback="callback"></btn>
    <btn btn-w="30%" value="btn-ghost 30%" belongs="btn-ghost radius" :callback="callback"></btn>
    <btn btn-w="30%" value="btn-ghost 30%" belongs="btn-ghost radius20" :callback="callback"></btn>
    <btn btn-w="20%" value="btn-more 200px" :disable="false" belongs="btn-more" :callback="callback"></btn>
    <btn btn-w="20%" value="btn-disable" loading="true" :active="active" :disable="true" belongs="btn-disable" :callback="callback"></btn>
    <btn btn-w="20%" value="btn-loading" loading="true" belongs="btn-loading" :callback="callback"></btn>
    </div>
</template>

<script>
  import Btn from '../components/Buttons.vue'
  export default {
    components: {
      Btn
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
        }.bind(this), 3000)
        console.log('callback', this.active)
      }
    }
  }
</script>

<style scoped>
@import "../static/common.scss";
  .content {
    padding: 20px;
  }
  button {
    margin: 5px;
    box-sizing: border-box;
  }
</style>
