<template>
  <div class="content">
    <panel>
      <div slot="title" class="title">短消息，不滚动</div>
      <noticebar>忆江南</noticebar>
    </panel>

    <panel>
      <div slot="title" class="title">长消息，滚动</div>
      <noticebar>江南好，风景旧曾谙；日出江花红胜火，春来江水绿如蓝。能不忆江南？ </noticebar>
    </panel>

    <panel>
      <div slot="title" class="title">长消息，滚动</div>
      <noticebar class="success">江南忆，最忆是杭州；山寺月中寻桂子，郡亭枕上看潮头。何日更重游！ </noticebar>
    </panel>

    <panel>
      <div slot="title" class="title">长消息，滚动</div>
      <noticebar class="warn">江南忆，其次忆吴宫；吴酒一杯春竹叶，吴娃双舞醉芙蓉。早晚复相逢！ </noticebar>
    </panel>

    <panel>
      <div slot="title" class="title">长消息，滚动</div>
      <noticebar class="danger">江南好，风景旧曾谙；日出江花红胜火，春来江水绿如蓝。能不忆江南？江南忆，最忆是杭州；山寺月中寻桂子，郡亭枕上看潮头。何日更重游！江南忆，其次忆吴宫；吴酒一杯春竹叶，吴娃双舞醉芙蓉。早晚复相逢！ </noticebar>
    </panel>
  </div>
</template>

<script>
  import Panel from '../components/Panel'
  import Noticebar from '../components/Noticebar'
  export default {
    components: {
      Noticebar,
      Panel
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
  .info {
    padding: 0 10px;
  }
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
