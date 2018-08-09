<template>
  <div id="tabbar" class="tabbar" ref="bar">
    <div class="tabbar-item" v-for="(item, idx) in tabbar" :key="idx"
         :class="idx===selIdx ? 'selected' : ''"
         :style="{color: idx===selIdx ? tabColor : '', 'border-bottom': idx===selIdx ? bottomHeight + 'px solid' : ''}"
         @click="selectItem(idx)">{{item}}</div>
    <!--拖尾巴的效果使用的是css3的transition的ease-->
    <div class="tarbar-bottom" :style="{width: itmW + 'px', height: bottomHeight + 'px', 'background-color': tabColor, left: selIdx * itmW + 'px'}"></div>
  </div>
</template>
<script>
  export default {
    props: {
      tabbar: { // item的项目名
        type: Array,
        default: function () {
          return []
        }
      },
      tabColor: { // 希望显示的颜色 默认绿色
        type: String,
        default: 'green'
      },
      callback: { // 点击item之后的回调
        type: Function,
        default: function () {
          return function () {}
        }
      },
      bottomHeight: { // 底部条的高度
        type: [Number, String],
        default: 1
      }
    },
    data () {
      return {
        selIdx: 0, // 点击tab
        itmW: (100 / this.tabbar.length) + '%'  // 每个人item的宽度
      }
    },
    mounted () {
      const tabW = this.$refs.bar.offsetWidth
      this.itmW = tabW / this.tabbar.length
    },
    methods: {
      selectItem (idx) {
        this.selIdx = idx
        this.callback(idx)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  @import "../static/color.scss";
  .tabbar {
    display: flex;
    flex-direction: row;
    background-color: $white;
    position: relative;
    width: 100%;
  }
  .tabbar-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    color: $color3;
    text-align: center;
  }
  .tabbar-item.selected {
    color: $success;
    border-bottom: 1px solid;
  }
  .tarbar-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    transition: all ease-in-out .3s;
  }
</style>
