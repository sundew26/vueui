<template>
  <div class="content">
    <input type="button" @click="showToast(1)" value="默认"/>
    <input type="button" @click="showToast(2)" value="中部"/>
    <input type="button" @click="showToast(3)" value="顶部"/>
    <input type="button" @click="showToast(4)" value="底部"/>
    <input type="button" @click="showToast(5)" value="警告"/>
    <input type="button" @click="showToast(6)" value="取消"/>
    <input type="button" @click="showToast(7)" value="1s消失"/>
    <Toast :toast="toast"></Toast>
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
        toast: {
          show: true,
          position: 'top',
          type: 'text',
          time: '2000',
          msg: 'hello vueUI'
        }
      }
    },
    methods: {
      showToast (item) {
        switch (item) {
          case 1:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'text',
              time: '3000',
              msg: 'hello vueUI'
            }
            break
          case 2:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'text',
              time: '3000',
              msg: 'hello vueUI'
            }
            break
          case 3:
            this.toast = {
              show: true,
              position: 'top',
              type: 'text',
              time: '3000',
              msg: 'hello vueUI'
            }
            break
          case 4:
            this.toast = {
              show: true,
              position: 'bottom',
              type: 'text',
              time: '3000',
              msg: 'hello vueUI'
            }
            break
          case 5:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'warn',
              time: '3000',
              msg: 'hello vueUI'
            }
            break
          case 6:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'cancel',
              time: '6000',
              msg: 'hello vueUI'
            }
            break
          case 7:
            this.toast = {
              show: true,
              position: 'middle',
              type: 'cancel',
              time: '1000',
              msg: 'hello vueUI'
            }
            break
        }
      }
    }
  }
</script>

<style>

</style>
