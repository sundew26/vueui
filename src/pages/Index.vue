<template>
  <div class="content">
    <p>索引</p>
    <cell v-for="(item, idx) in cell" :key="item.content" :target="item.target" :icon-pic="item.pic"
          :text-content="item.content"
          :link="item.link"
          :first="idx===0"
          @item-tap="transPage"></cell>
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
            content: 'Input 输入框',
            target: '_blank'
          },
          {
            link: '../demo/cell.html',
            pic: 'icon-cell',
            content: 'Cell 列表',
            target: '_blank'
          },
          {
            link: '../demo/dialog.html',
            pic: 'icon-dialog',
            content: 'Dialog 弹窗',
            target: '_blank'
          },
          {
            link: '../demo/popups.html',
            pic: 'icon-popups',
            content: 'PopUps 弹出层',
            target: '_blank'
          },
          {
            link: '../demo/tabbar.html',
            pic: 'icon-tabbar',
            content: 'Tabbar 标签',
            target: '_blank'
          },
          {
            link: '../demo/toast.html',
            pic: 'icon-toast',
            content: 'Toast 提示框',
            target: '_blank'
          },
          {
            link: '../demo/buttons.html',
            pic: 'icon-buttons',
            content: 'Button 按钮',
            target: '_blank'
          },
          {
            link: '../demo/page.html',
            pic: 'icon-page',
            content: 'Page 分页',
            target: '_blank'
          },
          {
            link: '../demo/switchs.html',
            pic: 'icon-switchs',
            content: 'Switch 开关',
            target: '_blank'
          },
          {
            link: '../demo/folder.html',
            pic: 'icon-folder',
            content: 'Folder 折叠面板',
            target: '_blank'
          },
          {
            link: '../demo/progressBar.html',
            pic: 'icon-progress',
            content: 'ProgressBar 进度条',
            target: '_blank'
          },
          {
            link: '../demo/inputNum.html',
            pic: 'icon-inputNum',
            content: 'InputNum 计数器',
            target: '_blank'
          },
          {
            link: '../demo/stepbar.html',
            pic: 'icon-step',
            content: 'Stepbar 步骤条',
            target: '_blank'
          },
          {
            link: '../demo/actionsheet.html',
            pic: 'icon-actionsheet',
            content: 'ActionSheet 操作盘',
            target: '_blank'
          },
          {
            link: '../demo/grid.html',
            pic: 'icon-grid',
            content: 'Grid 宫格',
            target: '_blank'
          },
          {
            link: '../demo/icon.html',
            pic: 'icon-icon',
            content: 'Icon 图标',
            target: '_blank'
          },
          {
            link: '../demo/layout.html',
            pic: 'icon-layout',
            content: 'Layout 布局',
            target: '_blank'
          },
          {
            link: '../demo/loadmore.html',
            pic: 'icon-loadmore',
            content: 'Loadmore 加载更多',
            target: '_blank'
          },
          {
            link: '../demo/panel.html',
            pic: 'icon-panel',
            content: 'Panel 面板',
            target: '_blank'
          },
          {
            link: '../demo/tag.html',
            pic: 'icon-tag',
            content: 'Tag 标记',
            target: '_blank'
          }
        ]
      }
    },
    methods: {
      transPage: function (link) {
        console.log(link)
        window.location.href = link
      }
    },
    events: {
      'transPage': function (link) {
        console.log(link)
        window.location.href = 'link'
      }
    }
  }
</script>

<style scoped>
  @import '../static/common.scss';
</style>
