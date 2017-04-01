<template>
  <div class="content">
    <stepbar :steps="steps"></stepbar>
  </div>
</template>

<script>
  import Stepbar from '../components/Stepbar.vue'
  export default {
    components: {
      Stepbar
    },
    data () {
      return {
        steps: {
          stepto: 1,
          content: [
            {
              text: ['申请退款', '2017-01-11 10:25:13']
            },
            {
              text: ['审核通过', '2017-01-12 10:25:13']
            },
            {
              text: ['退款成功', '']
            }
          ]
        }
      }
    }
  }
</script>

<style>
@import "../static/common.scss";
  .content {
    margin: 20px 0;
  }
  .stepbar-texts {
    height: 72px;
  }
</style>
