<template>
  <div class="content padding-10">
    <panel>
      <div slot="title" class="title">横向步骤条3步</div>
      <stepbar :steps="steps"></stepbar>
    </panel>
    <panel>
      <div slot="title" class="title">横向步骤条4步</div>
      <stepbar :steps="steps1"></stepbar>
    </panel>
  </div>
</template>

<script>
  import Stepbar from '../components/Stepbar.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Stepbar,
      Panel
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
        },
        steps1: {
          stepto: 2,
          content: [
            {
              text: ['第一步', '2017-01-11 10:25:13']
            },
            {
              text: ['第二步', '2017-01-12 10:25:13']
            },
            {
              text: ['第三步', '2018-01-12 10:25:13']
            },
            {
              text: ['第四部', '']
            }
          ]
        }
      }
    }
  }
</script>

<style>
@import "../static/common.scss";
  .stepbar-texts {
    height: 72px;
  }
</style>
