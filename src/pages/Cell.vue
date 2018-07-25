<template>
  <div class="content">
    <p>标准</p>
    <cell :icon-pic="cell[0].pic" :text-content="cell[0].content" :link="cell[0].link" :first="first" @item-tap="transPage"></cell>
    <cell :icon-pic="cell[1].pic" :text-content="cell[1].content" :link="cell[1].link" @item-tap="transPage"></cell>
    <div class="divder"></div>
    <p>无icon</p>
    <cell :icon-show="cell[2].iconShow" :icon-pic="cell[2].pic" :text-content="cell[2].content" :link="cell[2].link"
          :first="first" @item-tap="transPage"></cell>
    <div class="divder"></div>
    <p>无箭头</p>
    <cell :right="cell[3].right" :icon-pic="cell[3].pic" :text-content="cell[3].content" :link="cell[3].link"
          :first="first" @item-tap="transPage"></cell>
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
            link: 'https://stardew516.github.io/',
            pic: 'icon-beauty',  // iconfont里已经有了的
            content: '我是一个iconfont的cell'
          },
          {
            pic: 'https://avatars0.githubusercontent.com/u/15061629',  // 图片
            content: '我是pic类型的cell'
          },
          {
            iconShow: false,
            pic: 'https://avatars0.githubusercontent.com/u/15061629',
            content: '我没有icon'
          },
          {
            pic: 'https://avatars0.githubusercontent.com/u/15061629',
            content: '我没有右侧箭头',
            right: false
          }
        ]
      }
    },
    methods: {
      transPage (link) {
        window.location.href = link
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
