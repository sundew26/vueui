<template>
  <div class="iconfont" :class="type" @click="iconTap"></div>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        twoWay: true,
        default: ''
      },
      event: {
        type: String,
        twoWay: true,
        default: ''
      }
    },
    data () {
      return {
      }
    },
    watch: {
    },
    methods: {
      iconTap () {
        const {event, type} = this
        if (event) {
          this.$emit(event, type)
        }
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";
  
</style>
