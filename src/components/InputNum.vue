<template>
  <div class="input-num-box clearfix" :init-val="initVal" :max="max" :min="min" :increase="increase">
    <span class="minus" :class="{gray: Number(inputVal) <= Number(min)}" @click="minus">-</span>
    <input v-model="inputVal" :name="name" type="text" @keyup="valid" value="0" class="input-number">
    <span class="add" :class="{gray: Number(inputVal) >= Number(max)}" @click="add">+</span>
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
<style scoped>
  @import "../static/iconfont.scss";
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
    border: 1px solid #ddd;
    display: inline-block;
    border-radius: 4px;
  }
  .add {
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background-color: #ff0000;
    border-left: 1px solid #ddd;
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
    color: #666;
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
    color: #fff;
    background-color: #ff0000;
    border-right: 1px solid #ddd;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .gray {
    background-color: #ddd;
    cursor: default;
  }
</style>
