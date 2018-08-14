<template>
  <div class="toptips" :class="type+' '+toastShow">
    <div class="toptips-text" :class="iconType[type]+' '+(iconType[type]?'iconfont':'')">{{msg}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      msg: {
        type: String,
        twoWay: true,
        default: ''
      },
      type: {
        type: String,
        twoWay: true,
        default: ''
      },
      show: {
        type: Boolean,
        twoWay: true,
        default: false
      }
    },
    data () {
      return {
        iconType: {
          success: 'icon-success-circle',
          error: 'icon-close-circle',
          warn: 'icon-warning'
        },
        toastShow: this.show,
        timeout: ''
      }
    },
    watch: {
      'show' (val) {
        console.log('show components', val)
        this.toastShow = val
        clearTimeout(this.timeout)
        if (val) {
          this.timeout = setTimeout(() => {
            this.toastShow = false
            this.$emit('toast-end', this.toastShow)
          }, 3000)
        }
      }
    },
    methods: {
      showToast (options) {
        this.msg = options.msg
        this.type = options.type
        console.log('options', options)
      }
    },
    mounted () {
      console.log(this.show, this.type, this.msg)
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  @import "../static/color.scss";

  .toptips {
    position: fixed;
    font-size: 12px;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: $border;
    color: $color9;
    z-index: 999;
    transform: translateY(-100%);
    box-sizing: border-box;
    transition: all .4s ease;
    opacity: 1;
    &.true {
      transform: translateY(0);
    }
    &.warn {
      background-color: $warn;
    }
    &.error {
      background-color: $danger;
      color: $white;
    }
    &.success {
      background-color: $success;
      color: $white;
    }
    .iconfont:before {
      margin-right: 5px;
    }
    .toptips-text {
      line-height: 30px;
    }
  }
</style>
