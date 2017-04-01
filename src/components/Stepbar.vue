<template>
  <div class="stepbar">
    <div class="stepbar-list" v-for="(item, idx) in steps.content">
      <div class="stepbar-el" :class="{on: idx<=steps.stepto}">
        <div class="stepbar-texts">
          <p class="stepbar-text" v-for="txt in item.text">{{txt}}</p>
        </div>
        <div class="stepbar-steps">
          <span class="stepbar-line" :class="{'nobar': idx===0}"></span>
          <span class="icon-step" :class="{'icon-step-no': idx>steps.stepto, 'icon-step-yes': idx<=steps.stepto}"></span>
          <span class="stepbar-line" :class="{'nobar': idx>=steps.content.length-1}"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      steps: {  //
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";
  .stepbar {
    font-size: 12px;
    width: 100%;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
  }
  .stepbar-list {
    flex: 1;
  }
  .stepbar-steps {
    display: flex;
    align-items: center;
  }
  .stepbar-line {
    display: inline-block;
    flex: 1;
    height: 2px;
    background-color: #939393;
    margin-right: -2px;
  }
  .icon-step {
    color: #939393;
    margin-right: -2px;
  }
  .stepbar-el {

  }
  .stepbar-el.on .stepbar-line {
    background-color: #459945;
  }
  .stepbar-el.on .icon-step, .stepbar-el.on .stepbar-text {
    color: #459945;
  }
  .nobar {
    background-color: transparent!important;
  }
  .stepbar-text {
    font-size: 12px;
    margin: 0;
    line-height: 24px;
  }
</style>
