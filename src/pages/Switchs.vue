<template>
  <div class="content">
    <panel>
      <div slot="title" class="title">默认</div>
      <switchs ></switchs>
    </panel>

    <panel>
      <div slot="title" class="title">自定义文案</div>
      <switchs @switch-change="switchChange" :value="value" name="first" on-text="on" off-text="off"></switchs>
      <switchs :value="value" on-text="开" off-text="关"></switchs>
    </panel>

    <panel>
      <div slot="title" class="title">默认false</div>
      <switchs @switch-change="switchChange" :value="!value" name="first" on-text="on" off-text="off"></switchs>
      <switchs :value="!value" on-text="开" off-text="关"></switchs>
    </panel>

    <panel>
      <div slot="title" class="title">自定义颜色</div>
      <switchs @switch-change="switchChange" :value="value" name="first" on-text="on" off-text="off" on-color="#6FD700" off-color="#F75500"></switchs>
      <switchs :value="value" on-text="on" off-text="off" on-color="#3594F5" off-color="#F6C900"></switchs>
      <switchs :value="value" on-text="on" off-text="off" on-color="pink" off-color="purple"></switchs>
      <switchs :value="value" on-text="on" off-text="off"></switchs>
    </panel>

    <panel>
      <div slot="title" class="title">自定义大小、文案、颜色</div>
      <switchs width="60" height="30" @switch-change="switchChange" :value="value" name="first" on-text="on" off-text="off" on-color="#6FD700" off-color="#F75500"></switchs>
      <switchs width="60" height="30" :value="value" on-text="on" off-text="off" on-color="#3594F5" off-color="#F6C900"></switchs>
      <switchs width="60" height="30" :value="value" on-text="on" off-text="off" on-color="pink" off-color="purple"></switchs>
      <switchs width="70" height="30" turn-h="20" :value="value" on-text="on" off-text="off"></switchs>
    </panel>
  </div>
</template>

<script>
  import Switchs from '../components/Switchs.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Switchs,
      Panel
    },
    data () {
      return {
        value: true
      }
    },
    methods: {
      switchChange (val) {
        console.log('值为', val)
      }
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
  @import "../static/color.scss";
  .info {
    padding: 10px;
  }
</style>
