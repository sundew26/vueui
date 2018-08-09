<template>
  <transition name="dialog">
    <div class="dialog-mask"  transition="dialog" v-show="dialogOption.show==true">
      <div class="dialog-wrapper">
        <div class="dialog-container dialog-container-padding"
             :style="{width: options.width ? ((options.width + '').indexOf('%') > 0 ? options.width : options.width + 'px') : 'auto',
             height: options.height ? ((options.height + '').indexOf('%') > 0 ? options.height : options.height + 'px') : 'auto'}">
          <a class="dialog-close"
             @click="hide"
             v-if="options.showClose">X
          </a>
          <div class="dialog-header">
            <slot name="header">
              header
            </slot>
          </div>

          <div class="dialog-body">
            <slot name="body">
              body
            </slot>
          </div>

          <div class="dialog-footer"
               :class="{left: options.btnAlign === 'left', center: options.btnAlign === 'center', right: options.btnAlign === 'right'}">
            <slot name="footer">
                <button class="dialog-default-button dialog-default-cancel"
                  v-show="options.btnCancel.show"
                  @click="btnCancelClick">
                  {{ options.btnCancel.name }}
                </button>
                <button class="dialog-default-button dialog-default-sure"
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
      dialogOption: {
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
        options: this.dialogOption
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
      dialogOption: {
        handler: function (options) {
          this.options = options
        },
        deep: true
      }
    }
  }
</script>
<style scoped>
  .dialog-mask {
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

  .dialog-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .dialog-container {
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  }
  .dialog-container-padding {
    padding: 20px 30px;
  }
  .dialog-close{
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
  .dialog-close:hover {
    transform: scale(1.1);
  }
  .dialog-header {
    margin-top: 0;
    color: #333;
    text-align: center;
  }
  .dialog-body {
    margin: 20px 0;
  }
  .dialog-body-zero{
    margin:0;
    line-height: 0;
  }
  .dialog-footer{
    overflow: hidden;
  }
  .dialog-default-button {
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
  .dialog-default-cancel{
    color:#666;
    background: #E1E1E1;
  }
  .dialog-default-sure{
    color:#fff;
    background: #34A853;
  }

  /*vue2.0 transition*/
  .dialog-enter-active, .dialog-leave-active {
    transition: opacity .6s;
    opacity: 1;
  }
  .dialog-enter, .dialog-leave-to{
    opacity: 0;
  }

  .dialog-enter .dialog-container,
  .dialog-leave-to .dialog-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
