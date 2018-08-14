<template>
  <div class="rate">
      <span v-for="index in number" :key="index" @click="activeRate(index)">
        {{rateActive >= index ? '★':'☆'}}
      </span>
  </div>
</template>
<script>
  export default {
    props: {
      number: {
        type: Number,
        twoWay: true,
        default: 5
      },
      active: {
        type: Number,
        twoWay: true,
        default: 3
      }
    },
    data () {
      return {
        rateActive: this.active
      }
    },
    watch: {
    },
    methods: {
      activeRate (i) {
        this.rateActive = i
        this.$emit('rate-active', i)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  .rate {
    text-align: left;
  }
</style>
