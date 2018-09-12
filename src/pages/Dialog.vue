<template>
  <div class="content">
    <button class="btn btn-info" @click="showDialog('80%', '')">宽度80% 高度自适应</button>
    <button class="btn btn-success" @click="showDialog('70%', 300)">宽度70% 高度300px</button>
    <button class="btn btn-warn" @click="showDialog('65%', '')">宽度65%</button>
    <button class="btn btn-danger" @click="showDialog('80%', '', true)">不显示叉叉</button>
    <Dialog
      :dialog-option.sync="dialogOption"
      :btn-confirm-callback="modalConfirm"
      :btn-cancel-callback="modalCancel"
      :show-close="dialogOption.showClose"
    >
      <div slot="header">
        这里是头部
      </div>

      <div slot="body">
        这里是内容
      </div>
    </Dialog>
  </div>
</template>

<script>
  import Dialog from '../components/Dialog.vue'
  export default {
    components: {
      Dialog
    },
    data () {
      return {
        dialogOption: {
          show: true,
          width: 300, // width,height 可以数值 可以百分比
          showClose: true,
          btnAlign: 'right',  // right:按钮靠右 center: 居中(默认)  left: 靠左
          btnConfirm: {
            name: '不确定',
            show: true
          },
          btnCancel: {
            name: '取消',
            show: true
          }
        }
      }
    },
    methods: {
      showDialog (w, h, nox) {
        this.dialogOption.width = w
        this.dialogOption.height = h
        if (nox) {
          this.dialogOption.showClose = false
        } else {
          this.dialogOption.showClose = true
        }
        this.dialogOption.show = true
      },
      modalConfirm () {
        console.log('confirm')
      },
      modalCancel () {
        console.log('cancel')
      }
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
  .btn {
    margin-top: 10px;
  }
</style>
