<template>
  <div class="content">
    <panel>
      <div class="title" slot="title">搜索条</div>
      <searchbar :active="active" :search-val.sync="searchVal" @search="search" class="mgb10"></searchbar>
      <div class="search-value" v-show="searchVal">搜索词为：{{searchVal}}</div>
    </panel>
  </div>
</template>

<script>
  import Panel from '../components/Panel'
  import Searchbar from '../components/Searchbar'
  export default {
    components: {
      Searchbar,
      Panel
    },
    data () {
      return {
        active: false,
        searchVal: ''
      }
    },
    methods: {
      search (val, active) {
        console.log('search val', val, active)
        this.searchVal = val
      }
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
  .info {
    padding: 10px;
  }
</style>
