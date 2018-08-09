<template>
  <label class="switch" :style="{'background-color': this.bg, width: width + 'px', height: height + 'px', 'border-radius': height/2 + 'px'}">
    <input type="checkbox" :name="name" v-model="switchVal" :value="value" style="display: none"/>
    <span class="pan" :class="switchVal?'left10':'right10'"
          :style="{'line-height': height - 2 + 'px', 'font-size': parseInt(turnH, 10) + 2 + 'px'}">{{showText}}</span>
    <span class="turn"
          :style="{width: turnH + 'px', height: turnH + 'px', 'border-radius': turnH/2 + 'px', top: (height - turnH - 2 ) / 2 + 'px', left: switchVal? Number(width) - Number(turnH) - 5 + 'px'  : 5 + 'px'}"></span>
  </label>
</template>
<script>
  export default {
    props: {
      width: {  // switch 的宽度
        type: [String, Number],
        default: 60
      },
      height: { // switch的高度
        type: [String, Number],
        default: 22
      },
      turnH: {  // switch里小圆圈的宽高
        type: [String, Number],
        default: 12
      },
      onText: { // on状态的文字显示
        type: String,
        default: ''
      },
      offText: {  // off状态的文字显示
        type: String,
        default: ''
      },
      onColor: {  // on状态的颜色
        type: String,
        default: '#34a853'
      },
      offColor: { // off状态的颜色
        type: String,
        default: '#e66d72'
      },
      value: {  // true  false值  true时 状态为on false状态为off
        type: Boolean,
        default: true
      },
      name: { // switch名称  用于form传值
        type: String,
        default: ''
      }
    },
    data () {
      return {
        showText: this.value ? this.onText : this.offText,  // 展示的文字
        bg: this.value ? this.onColor : this.offColor,  // 背景
        switchVal: this.value // 值
      }
    },
    watch: {
      switchVal: function (val) {
        this.showText = val ? this.onText : this.offText
        this.bg = val ? this.onColor : this.offColor
        // 点击切换switch  事件
        this.$emit('switch-change', val)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  @import "../static/color.scss";

  .switch {
    display: inline-block;
    position: relative;
    transition: all ease .3s;
    border: 1px solid $border;
    box-sizing: border-box;
    width: 60px;
    height: 22px;
    border-radius: 11px;
  }
  .pan {
    display: inline-block;
    position: absolute;
    font-size: 14px;
    color: $white;
    transition: all ease .6s;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .turn {
    display: inline-block;
    background-color: $white;
    position: absolute;
    transition: all ease .3s;
    border: 1px solid $border;
    box-sizing: border-box;
  }
  .left10 {
    left: 10px;
  }
  .right10 {
    right: 10px;
  }
  .left5 {
    left: 5px;
  }
  .right5 {
    right: 5px;
  }
</style>
