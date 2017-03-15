<template>
  <div class="content">
    <div>
      <switchs @switch-change="switchChange" :value="value" name="first" on-text="on" off-text="off" on-color="green" off-color="red"></switchs>
      <switchs :value="value" on-text="on" off-text="off" on-color="blue" off-color="gold"></switchs>
      <switchs :value="value" on-text="on" off-text="off" on-color="pink" off-color="purple"></switchs>
      <switchs :value="value" on-text="on" off-text="off"></switchs>
    </div>
    <div>
      <switchs width="60" height="30" @switch-change="switchChange" :value="value" name="first" on-text="on" off-text="off" on-color="green" off-color="red"></switchs>
      <switchs width="60" height="30" :value="value" on-text="on" off-text="off" on-color="blue" off-color="gold"></switchs>
      <switchs width="60" height="30" :value="value" on-text="on" off-text="off" on-color="pink" off-color="purple"></switchs>
      <switchs width="70" height="30" turn-h="20" :value="value" on-text="on" off-text="off"></switchs>
    </div>
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
