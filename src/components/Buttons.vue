<template>
  <button :class="belongs"
          :disabled="btnDisable" @click="btnClick()">
    <i v-if="btnActive" class="iconfont icon-loading" :class="{active: btnActive}"></i>{{value}}
  </button>
</template>
<script>
  export default {
    props: {
      value: {  // 按钮值
        type: String,
        default: '按钮'
      },
      belongs: {  // 样式 min small btn large
        typy: String,
        default: 'btn'
      },
      disable: {  // 不可用 disabled
        type: Boolean,
        default: false
      },
      active: { // loading激活
        type: Boolean,
        twoWay: true,
        default: false
      },
      callback: { // 点击之后的回调函数
        type: Function,
        default: function () {
          return function () {}
        }
      }
    },
    data () {
      return {
        btnActive: this.active,
        btnDisable: this.disable,
        loading: this.belongs
      }
    },
    watch: {
      active () {
        this.btnActive = this.active
      },
      disable () {
        this.btnDisable = this.disable
      }
    },
    methods: {
      btnClick () {
        if (this.disable) {
          return
        }
        console.log(this.loading, this.loading.indexOf('btn-loading'))
        if (this.loading.indexOf('btn-loading') >= 0) {
          this.btnActive = true
        }
        let that = this
        this.callback(
          function () {
            that.btnActive = false
          }
        )
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  @import "../static/color.scss";
  
  .btn {
    height: 44px;
    font-size: 14px;
    outline: none;
    line-height: 42px;
    box-sizing: border-box;
    text-align: center;
    color: $white;
    cursor: pointer;
    background-color: $info;
    // border: 1px solid $white;
    border: 0 none;
    display: block;
    width: 100%;
  }
  .min-radius {
    border-radius: 4px;
  }
  .btn-min {
    display: inline-block;
    height: 22px;
    line-height: 18px;
    width: auto;
    .radius {
      border-radius: 11px;
    }
  }

  .btn-small {
    display: inline-block;
    height: 32px;
    line-height: 28px;
    width: auto;
    .radius {
      border-radius: 16px;
    }
  }

  .btn-large {
    height: 50px;
    line-height: 46px;
    .radius {
      border-radius: 24px;
    }
  }

  .btn-success {
    color: $white;
    background-color: $success;
  }

  .btn-warn {
    color: $white;
    background-color: $warn;
  }

  .btn-danger {
    color: $white;
    background-color: $danger;
  }

  .btn-disabled {
    color: $white;
    background-color: $disabled;
  }

  .btn-empty {
    color: $color6;
    background-color: $white;
    border: 1px solid $border;
  }

  .active {
    display: inline-block;
    animation: rotates 1.2s linear;
    animation-iteration-count: infinite;
    width: 14px;
    height: 14px;
    &.iconfont {
      margin-right: 5px;
    }
  }
  @keyframes rotates {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
