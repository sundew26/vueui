<template>
  <transition name="pop">
    <div class="pop-mask"  transition="pop" v-show="popOption.show==true">
      <div class="pop-wrapper">
        <div class="pop-container pop-container-padding"
             :style="{width: options.width ? ((options.width + '').indexOf('%') > 0 ? options.width : options.width + 'px') : 'auto',
             height: options.height ? ((options.height + '').indexOf('%') > 0 ? options.height : options.height + 'px') : 'auto'}">
          <a class="pop-close"
             @click="hide"
             v-if="options.showClose">X
          </a>
          <div class="pop-header">
            <slot name="header">
              header
            </slot>
          </div>

          <div class="pop-body">
            <slot name="body">
              body
            </slot>
          </div>

          <div class="pop-footer"
               :class="{left: options.btnAlign === 'left', center: options.btnAlign === 'center', right: options.btnAlign === 'right'}">
            <slot name="footer">
                <button class="pop-default-button pop-default-cancel"
                  v-show="options.btnCancel.show"
                  @click="btnCancelClick">
                  {{ options.btnCancel.name }}
                </button>
                <button class="pop-default-button pop-default-sure"
                  v-show="options.btnConfirm.show"
                  @click="btnConfirmClick">
                  {{ options.btnConfirm.name }}
                </button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      popOption: {
        type: Object,
        twoWay: true,
        default: function () {
          // name: 按钮名称  show: 是否显示按钮
          return {
            show: true,
            showClose: true, // 是否显示右上角叉叉
            btnAlign: 'center',
            btnConfirm: { // 确定按钮默认设置
              name: '确定',
              show: true
            },
            btnCancel: { // 取消按钮默认设置
              name: '取消',
              show: true
            }
          }
        }
      },
      btnConfirmCallback: { // 确定按钮默认回调方法
        type: Function,
        default: function () {
          return function () {}
        }
      },
      btnCancelCallback: { // 取消按钮默认回调方法
        type: Function,
        default: function () {
          return function () {}
        }
      }
    },
    data () {
      return {
        options: this.popOption
      }
    },
    methods: {
      btnConfirmClick () {
        this.hide()
        this.btnConfirmCallback()
      },
      btnCancelClick () {
        this.hide()
        this.btnCancelCallback()
      },
      hide () {
        this.options.show = false
      }
    },
    watch: {
      popOption: {
        handler: function (options) {
          this.options = options
        },
        deep: true
      }
    }
  }
</script>
<style scoped>
  .pop-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .pop-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .pop-container {
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  }
  .pop-container-padding {
    padding: 20px 30px;
  }
  .pop-close{
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position:absolute;
    color:#999;
    background-color: #F5F5F5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    cursor: pointer;
    z-index: 2;
    top: -10px;
    right: -10px;
    transition: all ease .3s;
  }
  .pop-close:hover {
    transform: scale(1.1);
  }
  .pop-header {
    margin-top: 0;
    color: #333;
    text-align: center;
  }
  .pop-body {
    margin: 20px 0;
  }
  .pop-body-zero{
    margin:0;
    line-height: 0;
  }
  .pop-footer{
    overflow: hidden;
  }
  .pop-default-button {
    height: 40px;
    width: 80px;
    margin: 10px;
    border: none;
    font-size: 14px;
  }
  .right {
    text-align: right;

  }
  .left {
    text-align: left;
  }
  .center {
    text-align: center
  }
  .pop-default-cancel{
    color:#666;
    background: #E1E1E1;
  }
  .pop-default-sure{
    color:#fff;
    background: #34A853;
  }

  /*vue2.0 transition*/
  .pop-enter-active, .pop-leave-active {
    transition: opacity .6s;
    opacity: 1;
  }
  .pop-enter, .pop-leave-to{
    opacity: 0;
  }

  .pop-enter .pop-container,
  .pop-leave-to .pop-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
