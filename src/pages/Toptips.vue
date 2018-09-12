<template>
  <div class="content">
    <button class="btn btn-info mgb10" @click="showToast(0)">普通</button>
    <button class="btn btn-danger mgb10" @click="showToast(1)">错误</button>
    <button class="btn btn-warn mgb10" @click="showToast(2)">警告</button>
    <button class="btn btn-success mgb10" @click="showToast(3)">成功</button>
    <toptips :show.sync="show0" msg="这是一个普通的提示条" @toast-end="toastEnd"/>
    <toptips type="error" :show.sync="show1" msg="这是一个错误信息提示条" @toast-end="toastEnd"/>
    <toptips type="warn" :show.sync="show2" msg="这是一个警告信息提示条" @toast-end="toastEnd"/>
    <toptips type="success" :show.sync="show3" msg="这是一个成功信息提示条" @toast-end="toastEnd"/>
  </div>
</template>

<script>
  import toptips from '../components/Toptips'
  export default {
    components: {
      toptips
    },
    data () {
      return {
        show0: false,
        show1: false,
        show2: false,
        show3: false
      }
    },
    methods: {
      showToast (i) {
        const show = 'show' + i
        this[show] = true
      },
      toastEnd () {
        console.log('toast end')
        this.show0 = false
        this.show1 = false
        this.show2 = false
        this.show3 = false
      }
    },
    mounted () {
      // const options = {
      //   a: 1
      // }
      // console.log(this.$on.toptips)
      // this.$on.toptips('show', options)
      console.log(this)
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
  .content {
    margin-top: 50px;
  }
</style>
