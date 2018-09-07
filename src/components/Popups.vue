<template>
  <div class="popup" :class="('popup-'+position)+' '+(show ? 'popup-show' : '')">
    <div class="popup-mask" @tap="togglePopup(id, maskHide)"></div>
    <div class="popup-container" :class="(position=='top'||position=='bottom') ? 'container100':''">
      <slot name="popContainer"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      id: { // 弹窗id
        type: [Number, String],
        twoWay: true,
        default: 0
      },
      show: {  // 是否展示弹窗
        type: [Boolean, String],
        twoWay: true,
        default: false
      },
      position: { // 弹窗弹出位置
        type: String,
        twoWay: true,
        default: 'bottom'
      },
      maskHide: { // mask false点击不可关闭
        type: Boolean,
        twoWay: true,
        default: true
      }
    },
    data () {
      return {
      }
    },
    methods: {
      // i: 索引 close: 关闭
      togglePopup (i, close) {
        if (close === false) {
          return false
        } else {
          this.$emit('pop', i, close)
        }
      }
    }
  }
</script>
<style scoped>
  .popup-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: rgba(0, 0, 0, .7);
    display: none
  }

  .popup-container {
    position: fixed;
    left: 50%;
    top: 50%;
    background: #fff;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    transition: all .4s ease;
    z-index: 11;
    opacity: 0
  }
  
  .popup-center .popup-container {
    z-index: -1;
  }

  .container100 {
    width: 100%;
  }

  .popup-show .popup-container {
    opacity: 1;
    z-index: 11;
  }

  .popup-show .popup-mask {
    display: block
  }

  .popup-left .popup-container {
    left: 0;
    top: 0;
    transform: translate3d(-100%, 0, 0)
  }

  .popup-show.popup-left .popup-container {
    transform: translate3d(0, 0, 0);
    top: 0;
    height: 100%;
  }

  .popup-right .popup-container {
    right: 0;
    top: 0;
    left: auto;
    transform: translate3d(100%, 0, 0);
    height: 100%;
  }

  .popup-show.popup-right .popup-container {
    transform: translate3d(0, 0, 0)
  }

  .popup-bottom .popup-container {
    top: auto;
    left: 0;
    bottom: 0;
    transform: translate3d(0, 100%, 0)
  }

  .popup-show.popup-bottom .popup-container {
    transform: translate3d(0, 0, 0)
  }

  .popup-top .popup-container {
    top: 0;
    left: auto;
    transform: translate3d(0, -100%, 0)
  }

  .popup-show.popup-top .popup-container {
    transform: translate3d(0, 0, 0)
  }

</style>
