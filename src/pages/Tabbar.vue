<template>
  <div class="content">
    <tabbar :tabbar="tabbar" :tab-color="tabColor" :callback="callback"></tabbar>
    <ul>
      <li v-for="(item, index) in tabbar" v-show="index===selIdx">{{index}}{{item}}</li>
    </ul>

    <tabbar :tabbar="tabbar1" bottom-height="2" :tab-color="tabColor1" :callback="callback1"></tabbar>
    <ul>
      <li v-for="(item, index) in tabbar1" v-show="index===selIdx1">{{index}}{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import Tabbar from '../components/Tabbar.vue'
  export default {
    components: {
      Tabbar
    },
    data () {
      return {
        tabbar: ['民宿', '餐饮', '农业', '其它'],
        tabColor: 'green',
        selIdx: 0,
        tabbar1: ['民宿', '餐饮'],
        tabColor1: '#ff5000',
        selIdx1: 0
      }
    },
    methods: {
      callback (idx) {
        this.selIdx = idx
        console.log('您选择了' + idx)
      },
      callback1 (idx) {
        this.selIdx1 = idx
        console.log('您选择了' + idx)
      }
    }
  }
</script>

<style scoped>
@import "../static/common.scss";
  ul li {
    list-style: none;
  }
</style>
