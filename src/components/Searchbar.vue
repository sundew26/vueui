<template>
  <div class="searchbar" :class="barActive?'active':''">
    <div class="search-content" @click="showbar">
      <i class="iconfont icon-search">{{barActive?'':'搜索'}}</i>
      <input class="search-text" type="text" placeholder="请输入搜索内容" v-model="searchValue"/>
      <i class="iconfont icon-close-outline" v-show="searchValue" @click="clearVal"></i>
    </div>
    <div class="btn-search" @click="search">{{searchValue?'搜索':'取消'}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      active: {
        type: [String, Boolean],
        twoWay: true,
        default: false
      },
      searchVal: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        barActive: this.active,
        searchValue: this.searchVal
      }
    },
    watch: {
      'searchVal': function (val, old) {
        this.searchValue = val
      }
    },
    methods: {
      showbar () {
        if (this.barActive) {
          return false
        } else {
          this.barActive = true
        }
      },
      search () {
        if (this.barActive && this.searchValue) {
          this.$emit('search', this.searchValue, this.barActive)
        } else {
          this.barActive = false
        }
      },
      clearVal () {
        this.searchValue = ''
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/common.scss";
  @import "../static/iconfont.scss";
  @import "../static/color.scss";
  .searchbar {
    color: $color9;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    width: 60px;
    transition: width .3s ease;
    overflow: hidden;
    .search-content {
      width: 60px;
      border-radius: 15px;
      height: 30px;
      background: rgba(170, 170, 170, 0.1);
      border: 0 none;
      display: flex;
      box-sizing: border-box;
      .icon-search {
        max-width: 56px;
        line-height: 30px;
        padding: 0 10px;
      }
      .search-text {
        display: none;
        flex: 1;
      }
    }
    .btn-search {
      display: none;
    }
    &.active {
      color: $color6;
      display: flex;
      width: 100%;
      .search-content {
        flex: 1;
        justify-content: center;
        align-items: center;
        position: relative;
        .search-text {
          flex: 1;
          display: inline-block;
          border: 0 none;
          height: 18px;
          line-height: 18px;
          background-color: $white;
          margin-right: 15px;
          padding-right: 18px;
        }
        .icon-close-outline {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 18px;
          color: $color9;
        }
      }
      .btn-search {
        display: inline-block;
        border-radius: 15px;
        height: 30px;
        line-height: 28px;
        margin-left: 10px;
      }
    }
  }
</style>
