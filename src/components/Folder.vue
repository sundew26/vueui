<template>
  <div class="folder">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      accordion: {  // 是否是手风琴菜单
        type: [Boolean, String],
        default: false
      }
    },
    mounted: function () {
      if (this.accordion) {
        var $t = this
        const el = this.$el.getElementsByClassName('folder-title')
        for (let i = 0, len = el.length; i < len; i++) {
          el[i].addEventListener('click', function () {
            $t.$emit('folder-accordion', i)
          })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  @import "../static/color.scss";

  .folder {
    border: 1px solid $info;
    border-top: 0 none;
    &.success {
      border: 1px solid $success;
    }
    &.warn {
      border: 1px solid $warn;
    }
    &.danger {
      border: 1px solid $danger;
    }
  }

</style>
