<template>
  <a :href="link" :target="target" class="cell" :class="{'cell-first': !!first}">
    <span v-if="iconShow && iconPic.indexOf('.') < 0" class="cell-icon" :class="iconPic"></span>
    <img v-if="iconShow && iconPic.indexOf('.') >= 0" class="cell-img" :src="iconPic"/>
    <span v-if="textShow" class="cell-text">{{textContent}}</span>
    <span v-if="right" class="cell-right icon-right"></span>
  </a>
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
        default: '#'
      },
      target: { // _blank  新窗口  默认当前页打开
        type: String,
        default: ''
      },
      iconShow: { // 是否显示icon
        type: Boolean,
        default: true
      },
      iconPic: {  // icon地址
        type: String,
        default: ''
      },
      textShow: { // 是否显示内容
        type: Boolean,
        default: true
      },
      textContent: {  // 内容
        type: String,
        default: ''
      },
      right: {  // 是否显示右侧箭头
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";
  .cell {
    display: flex;
    background-color: #fff;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    line-height: 20px;
    color: #333;
    border-bottom: 1px solid #ddd;
    text-decoration: none;
  }
  .cell-first {
    border-top: 1px solid #ddd;
  }
  .cell-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  .cell-img {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 5px;
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
  }
</style>
