<template>
  <div class="content">
    <p>索引</p>
    <cell v-for="(item, idx) in cell" :key="item.content" :target="item.target" :icon-pic="item.pic"
          :text-content="item.content"
          :link="item.link"
          :first="idx===0"></cell>
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
            link: '../demo/inputs.html',
            pic: 'icon-inputs',
            content: '输入框组件',
            target: '_blank'
          },
          {
            link: '../demo/cell.html',
            pic: 'icon-cell',
            content: 'cell组件',
            target: '_blank'
          },
          {
            link: '../demo/loading.html',
            pic: 'icon-loading',
            content: 'loading组件',
            target: '_blank'
          },
          {
            link: '../demo/popups.html',
            pic: 'icon-popups',
            content: '弹窗组件',
            target: '_blank'
          },
          {
            link: '../demo/tabbar.html',
            pic: 'icon-tabbar',
            content: 'tabbar组件',
            target: '_blank'
          },
          {
            link: '../demo/toast.html',
            pic: 'icon-toast',
            content: 'toast组件',
            target: '_blank'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import '../static/common.scss';
</style>
