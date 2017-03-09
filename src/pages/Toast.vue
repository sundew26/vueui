<template>
  <div class="content">
    <input type="button" @click="showToast(1)" value="默认"/>
    <input type="button" @click="showToast(2)" value="中部"/>
    <input type="button" @click="showToast(3)" value="顶部"/>
    <input type="button" @click="showToast(4)" value="底部"/>
    <input type="button" @click="showToast(5)" value="警告"/>
    <input type="button" @click="showToast(6)" value="取消"/>
    <input type="button" @click="showToast(7)" value="1s消失"/>
    <Toast @toast-hide="toastHide" :show="toast.show" :position="toast.position" :type="toast.type" :time="toast.time"
            :msg="toast.msg"></Toast>
  </div>
</template>

<script>
  import Toast from '../components/Toast.vue'
  export default {
    components: {
      Toast
    },
    data () {
      return {
        toast: {  // 这些参数不用都写上 此处为展示多个
          show: true,
          position: 'top',
          type: 'text',
          time: '2000',
          msg: 'hello vueUI'
        }
      }
    },
    methods: {
      toastHide () {  // 这个得加, 因为vue2.0默认无法在子组件修改父组件的值
        this.toast.show = false
      },
      showToast (item) {
        switch (item) {
          case 1:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'text',
              time: '3000',
              msg: '默认就是我这样的'
            }
            break
          case 2:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'text',
              time: '2000',
              msg: '我显示2s'
            }
            break
          case 3:
            this.toast = {
              show: true,
              position: 'top',
              type: 'text',
              time: '3000',
              msg: '我在顶部显示'
            }
            break
          case 4:
            this.toast = {
              show: true,
              position: 'bottom',
              type: 'text',
              time: '3000',
              msg: '我在底部显示'
            }
            break
          case 5:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'warn',
              time: '3000',
              msg: '我是警告类型的提示'
            }
            break
          case 6:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'cancel',
              time: '6000',
              msg: '我是取消类型的提示, 我会展示6s哦'
            }
            break
          case 7:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'cancel',
              time: '1000',
              msg: '我只显示1s, 看好了'
            }
            break
        }
      }
    }
  }
</script>

<style scoped>

</style>
