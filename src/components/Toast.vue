<template>
  <transition name="toast">
    <div class="toast" v-show="options.show==true"
         :class="{top: options.position==='top', middle: options.position==='middle', bottom: options.position==='bottom'}">
      <span v-if="options.type==='cancel'" class="icon-cancel"></span>
      <span v-if="options.type==='warn'" class="icon-warn"></span>
      {{options.msg}}
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      toast: {
        type: Object,
        default: function () {
          return {
            show: false, // 显示toast
            position: 'middle', // toast位置 top middle bottom
            type: 'text', // 类型 text cancel warn
            time: '3000' // 显示时间 默认3s
          }
        }
      }
    },
    data () {
      return {
        options: this.toast
      }
    },
    methods: {
      autoHide (time) {
        setTimeout(function () {
          this.options.show = false
        }.bind(this), time)
      }
    },
    mounted () {
      this.autoHide(this.options.time)
    },
    watch: {
      toast: {
        handler: function (option) {
          this.options = option
          this.autoHide(option.time)
        },
        deep: true
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";
  .toast {
    padding: 0 10px;
    max-width: 80%;
    line-height: 30px;
    height: 30px;
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
  .toast-enter-active, .toast-leave-active {
    transition: opacity .6s;
    opacity: 1;
  }
  .toast-enter, .toast-leave-to{
    opacity: 0;
  }
</style>
