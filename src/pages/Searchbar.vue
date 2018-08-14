<template>
  <div class="content">
    <searchbar :active="active" :search-val="searchVal" @search="search"></searchbar>
  </div>
</template>

<script>
  import Searchbar from '../components/Searchbar'
  export default {
    components: {
      Searchbar
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../static/common.scss";
  .list {
    color: #808080;
  }
  .bold {
    font-weight: bold;
  }
</style>
