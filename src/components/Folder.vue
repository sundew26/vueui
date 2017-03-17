<template>
  <div class="folder">
    <slot name="folder-item">
    </slot>
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
<style scoped>
  @import "../static/iconfont.scss";

  .folder {
    border: 1px solid #edacac;
    border-top: 0 none;
  }

</style>
