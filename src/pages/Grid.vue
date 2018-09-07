<template>
  <div class="content">
    <panel class="no-padding">
      <div slot="title" class="title">16宫格</div>
      <div class="panel">
        <grid :rows="rows4" :cols="cols4">
          <div v-for="(item, index) in gridlist4" :key="index" class="grid-items" :class="item.class">
            <icon :type="item.icon"></icon>
            <div class="">{{item.text}}</div>
          </div>
        </grid>
      </div>
    </panel>
    <panel class="no-padding">
      <div slot="title" class="title">9宫格</div>
      <div class="panel">
        <grid :rows="rows3" :cols="cols3">
          <div v-for="(item, index) in gridlist3" :key="index" class="grid-items" :class="item.class">
            <icon :type="item.icon"></icon>
            <div class="">{{item.text}}</div>
          </div>
        </grid>
      </div>
    </panel>
    <panel class="no-padding">
      <div slot="title" class="title">4宫格</div>
      <div class="panel">
        <grid :rows="rows2" :cols="cols2">
          <div v-for="(item, index) in gridlist2" :key="index" class="grid-items" :class="item.class">
            <icon :type="item.icon"></icon>
            <div class="">{{item.text}}</div>
          </div>
        </grid>
      </div>
    </panel>
    <panel class="no-padding">
      <div slot="title" class="title">1宫格</div>
      <div class="panel">
        <grid :rows="rows1" :cols="cols1">
          <div v-for="(item, index) in gridlist1" :key="index" class="grid-items" :class="item.class">
            <icon :type="item.icon"></icon>
            <div class="">{{item.text}}</div>
          </div>
        </grid>
      </div>
    </panel>
  </div>
</template>

<script>
  import Grid from '../components/Grid.vue'
  import Panel from '../components/Panel.vue'
  import Icon from '../components/Icon.vue'
  export default {
    components: {
      Grid,
      Panel,
      Icon
    },
    data () {
      return {
        rows1: 1,
        cols1: 1,
        rows2: 2,
        cols2: 2,
        rows3: 3,
        cols3: 3,
        rows4: 4,
        cols4: 4,
        gridlist1: [],
        gridlist2: [],
        gridlist3: [],
        gridlist4: [],
        gridItems: [
          {
            icon: 'icon-message',
            text: '消息'
          },
          {
            icon: 'icon-star-outline',
            text: '收藏'
          },
          {
            icon: 'icon-news',
            text: '新闻'
          },
          {
            icon: 'icon-printer',
            text: '打印'
          },
          {
            icon: 'icon-goods',
            text: '商品'
          },
          {
            icon: 'icon-ticket',
            text: '票务'
          },
          {
            icon: 'icon-components',
            text: '组件'
          },
          {
            icon: 'icon-upload',
            text: '上传'
          },
          {
            icon: 'icon-picture-outline',
            text: '图像'
          },
          {
            icon: 'icon-phone',
            text: '手机'
          },
          {
            icon: 'icon-service',
            text: '服务'
          },
          {
            icon: 'icon-time',
            text: '时间'
          },
          {
            icon: 'icon-goods-soldout',
            text: '售罄'
          },
          {
            icon: 'icon-document',
            text: '文件'
          },
          {
            icon: 'icon-menu',
            text: '菜单'
          },
          {
            icon: 'icon-picture',
            text: '图画'
          }
        ]
      }
    },
    methods: {
      initData (rows, cols, gridItems, gridlist) {
        // 初始化grid
        console.log(rows, cols, gridItems)
        for (let i = 1, k = 0; i <= rows; i++) {
          for (let j = 1; j <= cols; j++) {
            gridlist.push({
              class: 'grid-items' + i + j,
              name: 'row' + i + '-col' + j,
              icon: gridItems[k].icon,
              text: gridItems[k].text
            })
            k++
          }
        }
        console.log(this.gridlist)
        // 初始化grid
      }
    },
    mounted () {
      const {rows1, cols1, gridItems, gridlist1, rows2, cols2, gridlist2, rows3, cols3, gridlist3, rows4, cols4, gridlist4} = this
      this.initData(rows1, cols1, gridItems, gridlist1)
      this.initData(rows2, cols2, gridItems, gridlist2)
      this.initData(rows3, cols3, gridItems, gridlist3)
      this.initData(rows4, cols4, gridItems, gridlist4)
    }
  }
  
</script>

<style lang="scss">
  @import "../static/common.scss";
  @import "../static/iconfont.scss";
  .grid-outer {
    background-color: #fff;
    font-size: 12px;
    margin-top: 20px;
  }
  .grid-container {
    background-color: #ccc;
  }
  .grid-items {
    height: 80px;
    text-align: center;
    line-height: 20px;
    background: #fff;
    color: #666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .no-padding .info{
    padding: 0;
  }
</style>
