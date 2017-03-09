<template>
  <transition name="toast">
    <div class="toast" v-show="toastShow==true"
         :class="{top: position==='top', middle: position==='middle', bottom: position==='bottom'}">
      <span v-if="type==='cancel'" class="icon-cancel"></span>
      <span v-if="type==='warn'" class="icon-warn"></span>
      {{msg}}
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      show: { // 显示toast
        type: Boolean,
        default: false
      },
      position: { // toast位置 top middle bottom
        type: String,
        default: 'middle'
      },
      type: { // 类型 text cancel warn
        type: String,
        default: 'text'
      },
      time: { // 显示时间 默认3s
        type: String,
        default: '3000'
      },
      msg: {  // 内容
        type: String,
        default: ''
      }
    },
    data () {
      return {
        toastShow: this.show
      }
    },
    methods: {
      autoShowHide () {
        this.toastShow = this.show
        setTimeout(function () {
          this.toastShow = false
          this.$emit('toast-hide')
        }.bind(this), this.time)
      }
    },
    mounted () {
      this.autoShowHide()
    },
    watch: {
      show () {
        this.autoShowHide()
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";
  .toast {
    padding: 0 10px;
    max-width: 80%;
    max-height: 60px;
    line-height: 30px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    text-align: center;
    position: fixed;
    color: #fff;
    font-size: 12px;
    box-sizing: border-box;
    z-index: 99999;
    transition: all ease .3s;
  }
  .top {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
  .middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
  .bottom {
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
  }

  /*vue2.0 transition*/
  .toast-enter {
    transform: translateX(-50%);
    opacity: 0.7;
  }
  .toast-enter-active {
    transition: all ease-in-out .6s;
    transform: translateX(-50%) scale(0.8);
    opacity: 0;
  }
  .toast-leave-active {
    transition: all ease-in-out 1s;
    transform: translateX(-50%);
    opacity: 0.7;
  }
  .toast-leave-to{
    opacity: 0;
    transform: translateX(-50%) scale(0.8);
  }

</style>
