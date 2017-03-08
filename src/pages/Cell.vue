<template>
  <div class="content">
    <p>标准</p>
    <cell :cell="cell[0]" :first="first"></cell>
    <cell :cell="cell[1]"></cell>
    <div class="divder"></div>
    <p>无icon</p>
    <cell :cell="cell[2]" :first="first"></cell>
    <div class="divder"></div>
    <p>无箭头</p>
    <cell :cell="cell[3]" :first="first"></cell>
  </div>
</template>

<script>
  import Cell from '../components/Cell.vue'
  export default {
    components: {
      Cell
    },
    data () {
      return {
        first: true,
        cell: [
          {
            link: 'https://www.kaistart.com/',
            icon: {
              show: true,
              pic: 'icon-beauty'  // iconfont里已经有了的
            },
            text: {
              show: true,
              value: '我是一个iconfont的cell'
            },
            right: {
              show: true
            }
          },
          {
            icon: {
              show: true,
              pic: 'http://images.kaistart.com/o_1b6341fst9q8ig51jab6bt14d67.jpeg'  // 图片
            },
            text: {
              show: true,
              value: '我是pic类型的cell'
            },
            right: {
              show: true
            }
          },
          {
            icon: {
              show: false,
              pic: 'http://images.kaistart.com/o_1b6341fst9q8ig51jab6bt14d67.jpeg'
            },
            text: {
              show: true,
              value: '我没有icon'
            },
            right: {
              show: true
            }
          },
          {
            icon: {
              show: true,
              pic: 'http://images.kaistart.com/o_1b6341fst9q8ig51jab6bt14d67.jpeg'
            },
            text: {
              show: true,
              value: '我没有右侧箭头'
            },
            right: {
              show: false
            }
          }
        ]
      }
    }
  }
</script>

<style>
@import "../static/common.scss";
  .content {
    margin: 20px 0;
  }
  .divder {
    margin: 20px;
  }
</style>
