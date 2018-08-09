<template>
  <div  class="input-num-box clearfix" :init-val="initVal" :max="max" :min="min" :increase="increase">
    <div v-if="!!arrow">
      <span class="minus arrow-down icon-down" :class="{gray: Number(inputVal) <= Number(min)}" @click="minus"></span>
      <input v-model="inputVal" :name="name" type="text" @keyup="valid" value="0" class="input-number"/>
      <span class="add arrow-up icon-up" :class="{gray: Number(inputVal) >= Number(max)}" @click="add"></span>
    </div>
    <div v-if="!arrow">
      <span class="minus icon-minus" :class="{gray: Number(inputVal) <= Number(min)}" @click="minus"></span>
      <input v-model="inputVal" :name="name" type="text" @keyup="valid" value="0" class="input-number"/>
      <span class="add icon-plus" :class="{gray: Number(inputVal) >= Number(max)}" @click="add"></span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      initVal: {  // 初始化值
        type: [Number, String],
        default: 0
      },
      min: {  // 最小值
        type: [Number, String],
        default: 0
      },
      max: {  // 最大值
        type: [Number, String],
        default: 99999
      },
      increase: { // 值的增量
        type: [Number, String],
        default: 1
      },
      name: { // 数值框的name  为了传值方便
        type: String,
        default: 'inputName'
      },
      arrow: { // 是否是箭头样式的
        type: [Boolean, String],
        default: false
      }
    },
    data () {
      return {
        // 初始化展示值
        inputVal: parseInt(this.initVal, 10) < parseInt(this.min, 10) ? this.min : parseInt(this.initVal, 10) > parseInt(this.max, 10) ? this.max : this.initVal
      }
    },
    methods: {
      // 点击加号操作
      add: function () {
        if (parseInt(this.inputVal, 10) <= parseInt(this.max, 10) - parseInt(this.increase, 10)) {
          this.inputVal = parseInt(this.inputVal, 10) + parseInt(this.increase, 10)
        } else {
          this.inputVal = parseInt(this.max, 10)
        }
      },
      minus: function () {
        // 点击减号操作
        if (parseInt(this.inputVal, 10) > parseInt(this.min, 10) + parseInt(this.increase, 10)) {
          this.inputVal = parseInt(this.inputVal, 10) - parseInt(this.increase, 10)
        } else {
          this.inputVal = parseInt(this.min, 10)
        }
      },
      valid: function () {
        // 校验文本框输入的是否是数字
        if (/^[0]+[0-9]*$/gi.test(this.inputVal)) {
          this.inputVal = parseInt(this.inputVal, 10)
        }
        if (!/^[1-9]+[0-9]*$/gi.test(this.inputVal)) {
          this.inputVal = (this.inputVal + '').replace(/[^0-9]/gi, '')
        }
        // 输入值是数字时 超过最大值  以及小于最小值的操作
        if (parseInt(this.inputVal, 10) > parseInt(this.max, 10)) {
          this.inputVal = parseInt(this.max, 10)
        } else if (this.inputVal === '' || parseInt(this.inputVal, 10) < parseInt(this.min, 10)) {
          this.inputVal = parseInt(this.min, 10)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  @import "../static/color.scss";
  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    overflow: hidden;
    clear: both;
  }
  .input-num-box {
    overflow: hidden;
    border: 1px solid $border;
    display: inline-block;
    border-radius: 4px;
    position: relative;
    min-width: 75px;
    max-width: 120px;
  }
  .add {
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: $white;
    background-color: $danger;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .input-number {
    width: 60px;
    float: left;
    height: 30px;
    padding: 0;
    line-height: 30px;
    text-align: center;
    color: $color6;
    outline: none;
    border: 0 none;
    box-sizing: border-box;
  }
  .minus {
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: $white;
    background-color: $danger;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .gray {
    background-color: $disabled;
    cursor: default;
  }
  .arrow-up {
    position: absolute;
    width: 15px;
    height: 15px;
    line-height: 15px;
    top: 0;
    right: 0;
    font-size: 10px;
    border-bottom: 1px solid $border;
  }
  .arrow-down {
    position: absolute;
    width: 15px;
    height: 15px;
    line-height: 15px;
    bottom: 0;
    right: 0;
    font-size: 10px;
  }
</style>
