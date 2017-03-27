<template>
  <div class="folder-item">
    <div class="folder-title" :class="{active: nofolder}" @click="open">
      <i class="icon-right folder-icon" :class="{unfolder: nofolder}"></i>
      {{title}}
      <div :class="{halo: titleBg}"></div>
    </div>
    <div class="folder-content" :class="{hide: !nofolder}">
      <div class="inner-content">
        <slot name="content">
          {{content}}
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      unfolder: { // 默认折叠状态, 未展开
        type: Boolean,
        default: false
      },
      title: {  // 标题
        type: String,
        default: ''
      },
      content: {  // 内容
        type: String,
        default: ''
      }
    },
    data () {
      return {
        titleBg: false,  // 显示点击光环用的
        nofolder: this.unfolder // 修改unfolder增加变量
      }
    },
    watch: {
      unfolder: function (val) {
        this.nofolder = val
      }
    },
    methods: {
      open: function () {
        this.titleBg = true
        this.nofolder = !this.nofolder
        setTimeout(function () {
          this.titleBg = false
        }.bind(this), 300)
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";

  .folder-title {
    text-align: left;
    color: #fff;
    line-height: 40px;
    padding: 0 10px;
    background-color: #ed5565;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .folder-title.active {
    background-color: #d60f23;
  }
  .folder-content {
    border-top: 1px solid #ed5565;
    transition: all linear .6s;
    /*overflow: hidden;*/
    text-align: left;
    max-height: 1000px;
    overflow: scroll;
    background-color: #fbfdff;
  }
  .inner-content {
    padding: 10px;
  }
  .folder-icon {
    display: inline-block;
    transition: all ease .6s;
    transform: rotate(0deg);
  }
  .unfolder {
    transform: rotate(90deg);
  }
  .hide {
    opacity: .3;
    max-height: 0;
  }

  /* 光环halo */
  .halo {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 9;
  }
  .halo:before,
  .halo:after {
    content: '';
    display: block;
    position: absolute;
    width: 240px;
    height: 240px;
    left: -120px;
    top: 0;
    border-radius: 240px;
    animation-name: Grow;
    animation-duration: .3s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    -webkit-animation-name: Grow;
    -webkit-animation-duration: .3s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: linear;
  }
  .halo:before {
    box-shadow: 0 0 100px 10px #fff;
  }
  .halo:after {
    box-shadow: inset 0 0 100px 10px #fff;
  }
  @-webkit-keyframes Grow {
    0% {
      transform: scale(0.1);
      -ms-transform: scale(0.1);
      -webkit-transform: scale(0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(2);
      -ms-transform: scale(2);
      -webkit-transform: scale(2);
      opacity: 0;
    }
  }

</style>
