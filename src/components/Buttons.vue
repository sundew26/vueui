<template>
  <button :class="belongs"
          :style="{width: btnW && (btnW + '').indexOf('%') > 0 ? btnW : btnW + 'px'}"
          :disabled="btnDisable" @click="btnClick()">
    <i v-if="loading && btnActive" class="icon-btn-loading" :class="{active: btnActive}"></i>{{value}}
  </button>
</template>
<script>
  export default {
    props: {
      value: {  // 按钮值
        type: String,
        default: '按钮'
      },
      belongs: {  // 样式
        typy: String,
        default: 'btn'
      },
      btnW: { // 宽度: 百分比/数值
        type: [String, Number]
      },
      disable: {  // 不可用 disabled
        type: Boolean,
        default: false
      },
      loading: {  // 是否有loading功能
        type: [Boolean, String],
        default: false
      },
      active: { // loading激活
        type: Boolean,
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
        btnDisable: this.disable
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
        var that = this
        function hideLoad () {
          if (that.loading) {
            that.btnActive = false
          }
          that.btnDisable = false
        }
        this.btnDisable = true
        if (this.loading) {
          this.btnActive = true
        }
        this.callback(hideLoad)
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";
  /***按钮样式   start  ***/
  [class^="btn-"],
  .btn {
    display: inline-block;
    width: 120px;
    height: 40px;
    font-size: 14px;
    outline: none;
    line-height: 30px;
    box-sizing: border-box;
    text-align: center;
    color: #666;
    cursor: pointer;
    background-color: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  /*normal 次按钮*/

  /*普通主按钮*/
  [class^="btn-primary"],
  .btn-primary {
    color: white;
    background-color: #34A853;
    border: none;
  }

  /* 普通幽灵按钮, 幽灵按钮就是没有背景的按钮 */
  [class^="btn-ghost"],
  .btn-ghost {
    background-color: transparent;
  }
  /*普通查看更多按钮*/
  [class^="btn-more"],
  .btn-more {
    padding: 1px 0;
    border: none;
    background-color: white;
  }
  /*disabled的按钮*/
  [class^="btn-disable"],
  .btn-disable {
    padding: 1px 0;
    border: none;
    background-color: #ddd;
    cursor: not-allowed;
  }
  /*delete的按钮*/
  [class^="btn-delete"],
  .btn-delete {
    padding: 1px 0;
    border: none;
    background-color: #E64340;
    color: #fff;
  }
  /*warn的按钮*/
  [class^="btn-warn"],
  .btn-warn {
    padding: 1px 0;
    border: none;
    background-color: #ff9900;
    color: #fff;
  }
  /*次按钮 ，幽灵按钮，更多按钮的hover状态*/
  [class^="btn"]:hover,
  .btn:hover,
  .btn-more:hover,
  .btn-ghost:hover{
    color: #5CB975;
    border-color: #5CB975;
  }
  .btn:hover{
    background-color: white;
  }
  [class^="btn-primary"]:hover,
  .btn-primary:hover{
    color: white;
    background-color: #5CB975;
  }
  [class^="btn-disable"]:hover,
  .btn-disable:hover {
    color: #666;
    background-color: #ddd;
  }
  [class^="btn-delete"]:hover,
  .btn-delete:hover {
    color: #fff;
    background-color: #e66d72;
  }
  [class^="btn-warn"]:hover,
  .btn-warn:hover {
    color: #fff;
    background-color: #ffb435;
  }
  .btn-primary .click,
  .btn-primary .disable,
  .btn-ghost .click,
  .btn-ghost .disable,
  .btn-more .click,
  .btn-more .disable,
  .btn-input,
  .btn-input:hover{
  }

  /***按钮样式   end  ***/
  .radius {
    border-radius: 10px;
  }
  .radius20 {
    border-radius: 20px;
  }
  .active {
    display: inline-block;
    animation: rotates 1.2s steps(12, end) infinite;
  }
  @keyframes rotates {
    0% {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
    100% {
      -webkit-transform: rotate3d(0, 0, 1, 360deg);
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
</style>
