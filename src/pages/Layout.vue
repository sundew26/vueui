<template>
  <div class="content">
    <div class="layout layout-list">
      <div class="col col-24">24: 100%</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-12">12: 50%</div><div class="col col-12">12: 50%</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-8">8: 33.33%</div><div class="col col-8">8: 33.33%</div><div class="col col-8">8: 33.33%</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-6">6: 25%</div><div class="col col-6">6: 25%</div><div class="col col-6">6: 25%</div><div class="col col-6">6: 25%</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-4">4: 16.66%</div><div class="col col-4">4: 16.66%</div><div class="col col-4">4: 16.66%</div><div class="col col-4">4: 16.66%</div><div class="col col-4">4: 16.66%</div><div class="col col-4">4: 16.66%</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-4">4</div><div class="col col-4 col-offset-4">4 4</div><div class="col col-4 col-offset-4">4 4</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-4  col-offset-4">4 4</div><div class="col col-4 col-offset-4">4 4</div><div class="col col-4 col-offset-4">4 4</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-8">8</div><div class="col col-8 col-offset-8">8 8</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-8 col-offset-8">8 8</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-4">col-4</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-4 col-offset-4">offset-4</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-8 col-offset-8">offset-8</div>
    </div>
    <div class="layout layout-list">
      <div class="col col-8 col-offset-16">offset-16</div>
    </div>
    <!-- <div class="layout layout-list">
      <div class="col col-1">1</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-2">2</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-3">3</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-4">4</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-5">5</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-6">6</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-7">7</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-8">8</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-9">9</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-10">10</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-11">11</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-12">12</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-13">13</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-14">14</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-15">15</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-16">16</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-17">17</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-18">18</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-19">19</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-20">20</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-21">21</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-22">22</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-23">23</div>
    </div>
     <div class="layout layout-list">
      <div class="col col-24">24</div>
    </div> -->
  </div>
</template>

<script>
  import Layout from '../components/Layout.vue'
  export default {
    components: {
      Layout
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
  @import "../static/color.scss";
  div {
    margin: 0;
  }
  .content {
    text-align: left;
  }
  .layout-list {
    margin-bottom: 10px;
    .col {
      background-color: $info;
      color: #fff;
      text-align: center;
      font-size: 12px;
      line-height: 30px;
      &:nth-child(2n) {
        background-color: $success;
      }
      &:nth-child(3n) {
        background-color: $warn;
      }
      &:nth-child(4n) {
        background-color: $danger;
      }
    }
  }
</style>
