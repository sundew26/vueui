<template>
  <div class="tag" :class="type ? type : ''">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        twoWay: true,
        default: ''
      }
    },
    data () {
      return {
      }
    },
    watch: {
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  @import '../static/color.scss';

  .tag {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    line-height: 16px;
    padding: 0 5px;
    border-radius: 2px;
    -webkit-text-size-adjust: none;
    font-size: 10px;
    background: $white;
    text-align: center;
    color: $color6;
  }

  .tag::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    border: 0 solid border;
    border-width: 1px;
    border-radius: 4px;
  }

  .tag-plain {
    background: $white;
    border: 1px solid $border;
    color: $color6;
  }

  .tag-primary::after {
    border-color: $border;
  }

  .tag-primary {
    color: $white;
    background-color: $success;
  }

  .tag-primary::after {
    border-color: $success;
  }

  .tag-primary.tag-empty {
    color: $success;
    background: $white;
    border: 1px solid $primary;
  }

  .tag-danger {
    color: $white;;
    background: $danger;
  }

  .tag-danger::after {
    border-color: $danger;
  }

  .tag-danger.tag-empty {
    color: $danger;
    background: $white;
    border: 1px solid $danger;
  }

  .tag-warn {
    color: $white;
    background: $warn;
  }

  .tag-warn::after {
    border-color: $warn;
  }

  .tag-warn.tag-empty {
    color: $warn;
    background: $white;
    border: 1px solid $warn;
  }

  .tag-disabled {
    color: $disabled !important;
    background: $border;
  }

  .tag-disabled::after {
    border-color: $disabled;
  }
</style>
