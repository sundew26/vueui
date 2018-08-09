<template>
  <div class="content">
    <div class="kai-content icon-container layout">
        <div v-for="(item, index) in list" :key="index" class="col col-6 icon-block">
          <icon :type.sync="item" event="icon-tap" @icon-tap="iconTap"></icon>
          <span class="icon-title">{{item}}</span>
        </div>
    </div>
  </div>
</template>

<script>
  import Icon from '../components/Icon.vue'
  export default {
    components: {
      Icon
    },
    data () {
      return {
        list: [
          'icon-delete', 'icon-upload', 'icon-upload2', 'icon-download2', 'icon-rank',
          'icon-refresh', 'icon-edit-outline', 'icon-edit', 'icon-setting-outline', 'icon-setting',
          'icon-share', 'icon-loading', 'icon-picture-outline', 'icon-picture', 'icon-callinging',
          'icon-call', 'icon-location-outline', 'icon-location', 'icon-more-outline', 'icon-more',
          'icon-phone', 'icon-service', 'icon-menu', 'icon-star-outline', 'icon-star',
          'icon-view', 'icon-time', 'icon-message', 'icon-printer', 'icon-bell',
          'icon-date', 'icon-news', 'icon-goods-soldout', 'icon-goods', 'icon-sort',
          'icon-sort-down', 'icon-sort-up', 'icon-ticket', 'icon-document', 'icon-zoom-out',
          'icon-zoom-in', 'icon-search', 'icon-double-left', 'icon-double-right', 'icon-plus-outline',
          'icon-plus-circle', 'icon-plus', 'icon-minus-outline', 'icon-minus-circle', 'icon-minus',
          'icon-success-outline', 'icon-success-circle', 'icon-success', 'icon-close-outline', 'icon-close-circle',
          'icon-close', 'icon-caret', 'icon-caret-up', 'icon-caret-right', 'icon-caret-down',
          'icon-caret-left', 'icon-info', 'icon-warning', 'icon-right', 'icon-left',
          'icon-up', 'icon-down', 'icon-question', 'icon-back', 'icon-components'
        ]
      }
    },
    methods: {
      iconTap: function (type) {
        console.log(type)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../static/common.scss";
@import "../static/iconfont.scss";
  .icon-container{
    background-color:#fff;
  }
  .icon-block{
    background-color:#fff;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconfont {
      font-size:30px;
      margin-bottom:5px;
      color:#999;
    }
    .icon-title{
      font-size:12px;
      color:#999;
      text-align: center;
    }
    > div{
      width:100%;
      display:flex;
      align-items:center;
      justify-content: center;
    }
  }
</style>
