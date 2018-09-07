<template>
  <div class="noticebar" ref="noticebar">
    <div class="icon"></div>
    <div class="scoller" ref="scroller">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
    },
    data () {
      return {
        itvl: '', // 定时器
        tm: '' // timeout定时器
      }
    },
    watch: {
    },
    methods: {
    },
    mounted () {
      const scrollerInner = this.$refs.scroller
      const scrollerInnerWidth = scrollerInner.offsetWidth
      const barWidth = this.$refs.noticebar.offsetWidth
      if (scrollerInnerWidth > barWidth) {
        const v = 60
        const scrollWidth = scrollerInnerWidth + barWidth
        let left = barWidth
        let time = scrollWidth / v
        scrollerInner.style.left = left + 'px'
        scrollerInner.style.transition = 'transform ' + time + 's linear 0s'
        scrollerInner.style.transform = 'translateX(-' + scrollWidth + 'px)'
        clearInterval(this.itvl)
        this.itvl = setInterval(() => {
          this.$nextTick(() => {
            scrollerInner.style.transition = 'transform 1ms linear 0s'
            scrollerInner.style.transform = 'translateX(-0px)'
            clearInterval(this.tm)
            this.tm = setTimeout(() => {
              scrollerInner.style.transition = 'transform ' + time + 's linear 0s'
              scrollerInner.style.transform = 'translateX(-' + scrollWidth + 'px)'
            }, 100)
          })
        }, time * 1000 + 100)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";
  .noticebar {
    width: 100%;
    min-height: 30px;
    box-sizing: border-box;
    position: relative;
  }
  .scoller {
    line-height: 30px;
    height: 30px;
    white-space: nowrap;
    position: absolute;
    left: 0;
    top: 0;
    // transition: all linear 3s;
    // -webkit-transition: all linear 3s;
  }
</style>
