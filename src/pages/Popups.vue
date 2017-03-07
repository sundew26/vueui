<template>
  <div class="content">
    <input type="button" @click="showPop('big')" value="大">
    <input type="button" @click="showPop('middle')" value="中">
    <input type="button" @click="showPop('small')" value="小">
    <input type="button" @click="showPop('middle', true)" value="不显示叉叉">
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
          size: 'middle',
          width: 400, // width,height 优先级高于size size大中小: 80% 60% 40%
          height: 200, // width height和size 可二选一
          showClose: true,
          btnAlign: 'right',
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
      showPop (sz, nox) {
        this.popOption.size = sz
        if (nox) {
          this.popOption.showClose = false
        } else {
          this.popOption.showClose = true
        }
        this.popOption.show = true
        console.log('size', this.popOption)
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
