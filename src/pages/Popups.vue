<template>
  <div class="content">
    <input type="button" @click="showPop('80%', '40%')" value="大">
    <input type="button" @click="showPop('60%')" value="中">
    <input type="button" @click="showPop('40%', 200)" value="小">
    <input type="button" @click="showPop('60%', 200, true)" value="不显示叉叉">
    <popups
      :pop-option.sync="popOption"
      :btn-confirm-callback="modalConfirm"
      :btn-cancel-callback="modalCancel"
      :show-close="popOption.showClose"
    >
      <div slot="header">
        这里是头部
      </div>

      <div slot="body">
        这里是内容
      </div>
    </popups>
  </div>
</template>

<script>
  import Popups from '../components/Popups.vue'
  export default {
    components: {
      Popups
    },
    data () {
      return {
        popOption: {
          show: true,
          width: 400, // width,height 可以数值 可以百分比
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
      showPop (w, h, nox) {
        this.popOption.width = w
        this.popOption.height = h
        if (nox) {
          this.popOption.showClose = false
        } else {
          this.popOption.showClose = true
        }
        this.popOption.show = true
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

<style>

</style>
