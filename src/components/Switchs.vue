<template>
  <label class="switch" @click="switchPan" :style="{'background-color': this.bg}">
    <input type="checkbox" :name="name" v-model="switchVal" :value="value" style="display: none"/>
    <span class="pan" :class="switchVal?'right10':'left10'">{{showText
      }}</span>
    <span class="turn" :class="switchVal?'left5':'right5'"></span>
  </label>
</template>
<script>
  export default {
    props: {
      onText: {
        type: String,
        default: ''
      },
      offText: {
        type: String,
        default: ''
      },
      onColor: {
        type: String,
        default: '#34a853'
      },
      offColor: {
        type: String,
        default: '#e66d72'
      },
      value: {
        type: Boolean,
        default: true
      },
      name: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        showText: this.value ? this.onText : this.offText,
        bg: this.value ? this.onColor : this.offColor,
        switchVal: this.value
      }
    },
    watch: {
      switchVal: function (val) {
        this.showText = val ? this.onText : this.offText
        this.bg = val ? this.onColor : this.offColor
        this.$emit('switch-change', val)
      }
    },
    methods: {
      switchPan: function () {
        console.log(this.showText, this.value, this.switchVal)
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";

  .switch {
    display: inline-block;
    width: 60px;
    height: 20px;
    border-radius: 10px;
    position: relative;
    transition: all ease .6s;
    border: 1px solid #eee;
    box-sizing: border-box;
  }
  .pan {
    display: inline-block;
    position: absolute;
    top: 0;
    line-height: 18px;
    font-size: 14px;
    color: #fff;
    transition: all ease .6s;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .turn {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 3px;
    transition: all ease .6s;
    border: 1px solid #eee;
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
