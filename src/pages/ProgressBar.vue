<template>
  <div class="content">
    <panel>
      <div slot="title" class="title">默认</div>
      <progress-bar></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">百分之25</div>
      <progress-bar percentage="25"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">百分比位置调整为上</div>
      <progress-bar percentage="25" position="top"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">百分比位置调整为下</div>
      <progress-bar percentage="50" position="bottom"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">百分比位置调整为左</div>
      <progress-bar percentage="175" position="left"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">百分比位置调整为右</div>
      <progress-bar percentage="100" position="right"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">百分比位置调整为内部</div>
      <progress-bar percentage="100" position="inner"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">高度20百分比位置调整为上</div>
      <progress-bar percentage="25" position="top" p-h="20"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">高度20百分比位置调整为下</div>
      <progress-bar percentage="50" position="bottom" p-h="20"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">高度20百分比位置调整为左</div>
      <progress-bar percentage="175" position="left" p-h="20"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">高度20百分比位置调整为右</div>
      <progress-bar percentage="100" position="right" p-h="20"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">高度20百分比位置调整为内部</div>
      <progress-bar percentage="100" position="inner" p-h="20"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">调整高</div>
      <progress-bar p-h="20" percentage="50"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">调整高度使用百分比</div>
      <progress-bar percentage="50"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">环形百分比</div>
      <progress-bar p-type="circle"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">百分之25</div>
      <progress-bar p-type="circle" percentage="50"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">百分比位置调整为内部</div>
      <progress-bar p-type="circle" percentage="75" position="inner"></progress-bar>
    </panel>

    <panel>
      <div slot="title" class="title">调整环高</div>
      <progress-bar p-type="circle" p-h="20" percentage="100"></progress-bar>
    </panel>
  </div>
</template>

<script>
  import ProgressBar from '../components/ProgressBar.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      ProgressBar,
      Panel
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
</style>
