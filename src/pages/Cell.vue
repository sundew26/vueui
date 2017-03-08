<template>
  <div class="content">
    <p>标准</p>
    <cell :icon-pic="cell[0].pic" :text-content="cell[0].content" :link="cell[0].link" :first="first"></cell>
    <cell :icon-pic="cell[1].pic" :text-content="cell[1].content" :link="cell[1].link"></cell>
    <div class="divder"></div>
    <p>无icon</p>
    <cell :icon-show="cell[2].iconShow" :icon-pic="cell[2].pic" :text-content="cell[2].content" :link="cell[2].link"
          :first="first"></cell>
    <div class="divder"></div>
    <p>无箭头</p>
    <cell :right="cell[3].right" :icon-pic="cell[3].pic" :text-content="cell[3].content" :link="cell[3].link"
          :first="first"></cell>
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
            pic: 'icon-beauty',  // iconfont里已经有了的
            content: '我是一个iconfont的cell'
          },
          {
            pic: 'http://images.kaistart.com/o_1b6341fst9q8ig51jab6bt14d67.jpeg',  // 图片
            content: '我是pic类型的cell'
          },
          {
            iconShow: false,
            pic: 'http://images.kaistart.com/o_1b6341fst9q8ig51jab6bt14d67.jpeg',
            content: '我没有icon'
          },
          {
            pic: 'http://images.kaistart.com/o_1b6341fst9q8ig51jab6bt14d67.jpeg',
            content: '我没有右侧箭头',
            right: false
          }
        ]
      }
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
