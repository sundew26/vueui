<template>
  <div class="content padding-10">
    <panel>
      <div slot="title" class="title">四个tab，bar宽度1</div>
      <tabbar :tabbar="tabbar" :tab-color="tabColor" :callback="callback"></tabbar>
      <ul>
        <li v-for="(item, index) in tabbar" :key="index" v-show="index===selIdx">{{index}}{{item}}</li>
      </ul>
    </panel>

    <panel>
      <div slot="title" class="title">两个tab，bar宽度2</div>
      <tabbar :tabbar="tabbar1" bottom-height="2" :tab-color="tabColor1" :callback="callback1"></tabbar>
      <ul>
        <li v-for="(item, index) in tabbar1" :key="index" v-show="index===selIdx1">{{index}}{{item}}</li>
      </ul>
    </panel>
    
  </div>
</template>

<script>
  import Tabbar from '../components/Tabbar.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Tabbar,
      Panel
    },
    data () {
      return {
        tabbar: ['蓝色妖姬', '彼岸花', '洛神花', '夕颜花'], // tabbar的四个item内容
        tabColor: '#208A00',  // 点击状态item的颜色
        selIdx: 0,  // 默认选中
        tabbar1: ['六月雪', '凤凰木'],
        tabColor1: '#F40000',
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
