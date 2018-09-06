<template>
  <div @click="translateToPage(link)" :target="target" class="cell" :class="{'cell-first': !!first}">
    <span v-if="iconPic && iconPic.indexOf('.') < 0" class="cell-icon" :class="iconPic"></span>
    <img v-if="iconPic && iconPic.indexOf('.') >= 0" class="cell-img" :src="iconPic"/>
    <span v-if="textContent" class="cell-text">{{textContent}}</span>
    <span v-if="addText" class="add-text">{{addText}}</span>
    <span v-if="link" class="cell-right icon-arrow"></span>
  </div>
</template>
<script>
  export default {
    props: {
      first: {  // 是不是第一个项目 用来判断  顶部border
        type: Boolean,
        default: false
      },
      link: { // 跳转链接
        type: String,
        default: ''
      },
      target: { // _blank  新窗口  默认当前页打开
        type: String,
        default: ''
      },
      iconPic: {  // icon地址
        type: String,
        default: ''
      },
      textContent: {  // 内容
        type: String,
        default: ''
      },
      addText: {  // 是否显示附加内容
        type: String,
        default: ''
      }
    },
    methods: {
      translateToPage (link) {
        console.log(link)
        this.$emit('item-tap', link)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  @import "../static/color.scss";
  .cell {
    display: flex;
    background-color: $white;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    line-height: 20px;
    color: $color3;
    border-bottom: 1px solid $border;
    text-decoration: none;
  }
  .cell-first {
    border-top: 1px solid $border;
  }
  .cell-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    margin-right: 10px;
  }
  .cell-img {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 10px;
  }
  .cell-text {
    display: inline-block;
    text-align: left;
    flex: 1;
  }
  .cell-right {
    display: inline-block;
    width: 20px;
    height: 20px;
    color: $color9;
  }
</style>
