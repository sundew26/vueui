<template>
  <div class="content">
    <page @change-current="changeCurrent" :page-count="pageCount" :current="current" :page-size="pageSize"
          :page-change="pageChange"></page>
    <page @change-current="changeCurrent" :page-count="7" :current="current" :page-size="10"
          :page-change="pageChange"></page>
    <page @change-current="changeCurrent" :page-count="10" :current="current" :page-size="10"
          :page-change="pageChange"></page>
    <page @change-current="changeCurrent" :page-count="5" :current="current" :page-size="10"
          :page-change="pageChange"></page>
  </div>
</template>

<script>
  import Page from '../components/Page.vue'
  export default {
    components: {
      Page
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

<style scoped>
@import "../static/common.scss";
  .content {
    padding: 20px;
  }
  button {
    margin: 5px;
    box-sizing: border-box;
  }
</style>
