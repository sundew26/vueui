<template>
  <div class="ac-container" :class="asData.show ? 'ac-show': ''">
    <div class="ac-mask" @click="selectIndex('close', 'close', true)"></div>
    <div class="ac-content" :class="asData.top ? 'top' : 'bottom'">
      <div v-for="(item, index) in asData.itemList" :key="index">
        <div class="ac-list" :class="item.class" @click="selectIndex(asData.index, index, false)">
          <div v-if="item.slot">
            <div v-html="item.slot"></div>
          </div>
          <div v-else>{{item.value}}</div>
        </div>
        <div class="ac-list mt5" v-if="index===asData.itemList.length-1" @click="selectIndex(asData.index, index, true)">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      asData: {
        type: Object,
        twoWay: true,
        defaut: function () {
          return {}
        }
      }
    },
    data () {
      return {
        tapIndex: 0
      }
    },
    watch: {
    },
    methods: {
      selectIndex (i, index, close) {
        console.log(i, index, close)
        if (close === true) {
          console.log('you choose close')
          this.asData.show = false
        } else {
          this.tapIndex = index
          const evt = this.asData.itemList[index].event ? this.asData.itemList[index].event : 'action-sheet'
          this.$emit(evt, i, index, close)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../static/iconfont.scss";

  div {
    overflow: visible;
  }
  .ac-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: rgba(0, 0, 0, .5);
    display: none
  }
  .ac-container {
    position: fixed;
    left: 0;
    z-index: 11;
    width: 100%;
  }
  .ac-content {
    position: fixed;
    left: 0;
    background-color: #E7E6EB;
    transform: translate3d(0, 0, 0);
    transform-origin: center;
    transition: all .4s ease;
    z-index: 100;
    width: 100%;
    opacity: 0
  }
  .ac-content.top {
    top: -100vh;
  }
  .ac-content.bottom {
    bottom: -100vh;
  }
  .ac-show .top {
    opacity: 1;
    top: 0;
  }
  .ac-show .bottom {
    opacity: 1;
    bottom: 0;
  }
  .ac-show .ac-mask{
    display: block
  }
  .ac-list {
    text-align: center;
    font-size: 12px;
    border-bottom: 1rpx solid #e1e1e1;
    min-height: 45px;
    line-height: 45px;
    background: #fff;
    &:last-of-type {
      border-bottom: none;
    }
    &.mt5 {
      margin-top: 5px;
    }
  }
</style>
