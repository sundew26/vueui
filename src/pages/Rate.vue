<template>
  <div class="content">
    <panel>
      <div class="title" slot="title">默认</div>
      <div v-for="(item, index) in ratadata" :key="index">
        <rate :number="item.num" :active="item.active" @rate-active="rateActive"></rate>
      </div>
    </panel>

    <panel>
      <div class="title" slot="title"> success </div>
      <div v-for="(item, index) in ratadata" :key="index">
        <rate :number="item.num" :active="item.active" @rate-active="rateActive" class="success"></rate>
      </div>
    </panel>

    <panel>
      <div class="title" slot="title"> warn </div>
      <div v-for="(item, index) in ratadata" :key="index">
        <rate :number="item.num" :active="item.active" @rate-active="rateActive" class="warn"></rate>
      </div>
    </panel>

    <panel>
      <div class="title" slot="title"> danger </div>
      <div v-for="(item, index) in ratadata" :key="index">
        <rate :number="item.num" :active="item.active" @rate-active="rateActive" class="danger"></rate>
      </div>
    </panel>
  </div>
</template>

<script>
  import Rate from '../components/Rate'
  import Panel from '../components/Panel'
  export default {
    components: {
      Rate,
      Panel
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

<style lang="scss">
  @import "../static/common.scss";
  @import "../static/color.scss";
  .success {
    color: $success;
  }
  .warn {
    color: $warn;
  }
  .danger {
    color: $danger;
  }
</style>
