<template>
  <div class="content">
  <switchs @switch-change="switchChange" :value="value" name="first" on-text="on" off-text="off" on-color="green"
           off-color="red"></switchs>
  <switchs :value="value" on-text="on" off-text="off" on-color="blue" off-color="gold"></switchs>
  <switchs :value="value" on-text="on" off-text="off" on-color="pink" off-color="purple"></switchs>
  <switchs :value="value" on-text="on" off-text="off"></switchs>
  </div>
</template>

<script>
  import Switchs from '../components/Switchs.vue'
  export default {
    components: {
      Switchs
    },
    data () {
      return {
        value: true
      }
    },
    methods: {
      switchChange (val) {
        console.log('值为', val)
      }
    }
  }
</script>

<style scoped>
@import "../static/common.scss";
  .content {
    padding: 20px;
  }
</style>
