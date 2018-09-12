<template>
  <div class="content">
    <panel>
      <div slot="title" class="title">5页</div>
      <page @change-current="changeCurrent" :page-count="5" :current="current" :page-size="10"
          :page-change="pageChange"></page>
      
    </panel>

    <panel>
      <div slot="title" class="title">7页</div>
      <page @change-current="changeCurrent" :page-count="7" :current="current" :page-size="10"
          :page-change="pageChange"></page>
    </panel>

    <panel>
      <div slot="title" class="title">10页</div>
      <page @change-current="changeCurrent" :page-count="10" :current="current" :page-size="10"
          :page-change="pageChange"></page>
    </panel>

    <panel>
      <div slot="title" class="title">100页</div>
      <page @change-current="changeCurrent" :page-count="pageCount" :current="current" :page-size="pageSize"
          :page-change="pageChange"></page>
    </panel>
  </div>
</template>

<script>
  import Page from '../components/Page.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Page,
      Panel
    },
    data () {
      return {
        pageCount: 100,
        current: 2,
        pageSize: 10
      }
    },
    methods: {
      changeCurrent (index) {
        this.current = index
      },
      pageChange (index) {
        console.log('page changed', index)
      }
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
  .btn {
    margin-top: 10px;
  }
  .info {
    padding: 10px;
  }
</style>
