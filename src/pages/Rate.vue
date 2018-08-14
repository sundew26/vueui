<template>
  <div class="content">
      <div v-for="(item, index) in ratadata" :key="index">
        <rate :number="item.num" :active="item.active" @rate-active="rateActive"></rate>
      </div>
  </div>
</template>

<script>
  import Rate from '../components/Rate'
  export default {
    components: {
      Rate
    },
    data () {
      return {
        ratadata: [
          {
            num: 5,
            active: 1
          },
          {
            num: 5,
            active: 2
          },
          {
            num: 5,
            active: 3
          },
          {
            num: 10,
            active: 3
          },
          {
            num: 10,
            active: 6
          },
          {
            num: 10,
            active: 9
          }
        ]
      }
    },
    methods: {
      rateActive (i) {
        console.log('rate', i)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../static/common.scss";
  
</style>
