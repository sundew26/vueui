<template>
  <div class="content padding-10">
    <panel>
      <div slot="title" class="title">默认</div>
      <cell :first="first" :text-content="cell[0].content"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">带箭头</div>
      <cell :text-content="cell[1].content" :link="cell[1].link"
          :first="first" @item-tap="transPage"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">带icon</div>
      <cell :right="cell[2].right" :icon-pic="cell[2].pic" :text-content="cell[2].content" :link="cell[2].link"
          :first="first" @item-tap="transPage"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">带pic</div>
      <cell :right="cell[3].right" :icon-pic="cell[3].pic" :text-content="cell[3].content" :link="cell[3].link"
          :first="first" @item-tap="transPage"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">icon列表</div>
      <cell :right="cell[2].right" :icon-pic="cell[2].pic" :text-content="cell[2].content" :link="cell[2].link" :first="first" @item-tap="transPage"></cell>
      <cell :right="cell[2].right" :icon-pic="cell[2].pic" :text-content="cell[2].content" :link="cell[2].link" @item-tap="transPage"></cell>
      <cell :right="cell[2].right" :icon-pic="cell[2].pic" :text-content="cell[2].content" :link="cell[2].link" @item-tap="transPage"></cell>
      <cell :right="cell[2].right" :icon-pic="cell[2].pic" :text-content="cell[2].content" :link="cell[2].link" @item-tap="transPage"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">picture列表</div>
      <cell :icon-pic="cell[3].pic" :text-content="cell[3].content" :link="cell[3].link" :first="first" @item-tap="transPage"></cell>
      <cell :icon-pic="cell[3].pic" :text-content="cell[3].content" :link="cell[3].link" @item-tap="transPage"></cell>
      <cell :icon-pic="cell[3].pic" :text-content="cell[3].content" :link="cell[3].link" @item-tap="transPage"></cell>
      <cell :icon-pic="cell[3].pic" :text-content="cell[3].content" :link="cell[3].link" @item-tap="transPage"></cell>
    </panel>

    
    
    <div class="divder"></div>
    <p></p>
    
    <div class="divder"></div>
    <p></p>
    
  </div>
</template>

<script>
  import Cell from '../components/Cell.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Cell,
      Panel
    },
    data () {
      return {
        first: true,
        cell: [
          {
            content: '默认'
          },
          {
            link: 'https://stardew516.github.io/',
            content: '有箭头'
          },
          {
            link: 'https://stardew516.github.io/',
            pic: 'icon-beauty',  // iconfont里已经有了的
            content: 'cell有iconfont'
          },
          {
            pic: 'https://avatars0.githubusercontent.com/u/15061629',  // 图片
            content: 'cell有picture'
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
</style>
