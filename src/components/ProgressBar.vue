<template>
  <div class="progress-bar-outer" :style="{width: pW==='100%'?'100%' : ''}">
    <div v-if="pType==='liner'" class="progress-bar bg-gray"
      :style="{height: pH + 'px', width: (pW + '').indexOf('%') > -1 ? pW : (pW + 'px'), 'border-radius': Number(pH)/2 + 'px'}">
      <span class="progress-inner"
        :class="Number(percentage) <= 0 ? '' : Number(percentage) < 50 ? 'bg-red' : Number(percentage) === 50 ? 'bg-yellow' : Number(percentage) < 100 ? 'bg-blue' : 'bg-green'"
        :style="{width: (pW + '').indexOf('%') > -1 ? (Number(pW.split('%')[0]) * Number(percentage) / 100 + '%') : (Number(pW) * Number(percentage) / 100 + 'px'), 'border-radius': Number(pH)/2 + 'px'}">
      </span>
      <i :class="position" :style="{'margin-left': Number(percentage) === 0 && position==='inner' ? 0 : position==='inner' ?  (pW + '').indexOf('%') > -1 ? 'calc(' + (Number(pW.split('%')[0]) * Number(percentage) / 100 + '%') + ' - 40px)' : (Number(pW) * Number(percentage) / 100 - 40 + 'px') :''}">{{percentage +'%'}}</i>
    </div>
    <div v-if="pType==='circle'" class="progress-circle">
      <i class="circle-text">{{percentage + '%'}}</i>
      <!--viewbox:x y width height ---视区盒子 x:左上角横坐标，y:左上角纵坐标，width:宽度，height:高度-->
      <svg :width="Number(size)*2" :height="Number(size)*2"
        :viewbox="'0 0 ' + Number(size)*2 + ' ' + Number(size)*2">
        <!--cx, cy: 圆心坐标  r: 半径  stroke-width: 圆环宽度-->
        <circle :cx="Number(size)" :cy="Number(size)" :r="Number(size)-Number(pH)" :stroke-width="Number(pH)" stroke="#d1d3d7" fill="none"></circle>
        <!--matrix(0,-1,1,0,0,size): http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/ -->
        <!--stroke-dasharray(a b):  虚线  a: 虚线的宽度 b: 虚线的间距-->
        <circle :cx="Number(size)" :cy="Number(size)" :r="Number(size)-Number(pH)" :stroke-width="Number(pH)"
          :stroke="Number(percentage) <= 0 ? '' : Number(percentage) < 50 ? 'red' : Number(percentage) === 50 ? 'yellow' : Number(percentage) < 100 ? 'blue' : 'green'" fill="none"
          :transform="'matrix(0,-1,1,0,0,'+Number(size)*2+')'" stroke-dasharray="0 1069"></circle>
      </svg>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      percentage: {  // 百分比值 0-100
        type: [String, Number],
        default: 0
      },
      pType: {  // 进度条类型 环形 线型 circle/liner
        type: String,
        default: 'liner'
      },
      pW: { // 宽度: 百分比/数值
        type: [String, Number],
        default: 300
      },
      pH: {  // 高度
        type: [String, Number],
        default: 20
      },
      position: {  // 数值在进度条的位置  top inner bottom left right hide(不展示)
        type: String,
        default: 'top'
      },
      status: { // 进度条的状态 success error
        type: String,
        default: 'success'
      },
      size: { // circle 的大小 size - pH 就是半径
        type: [Number, String],
        default: 50
      }
    },
    mounted: function () {
      if (this.pType === 'circle') {
        const circle = this.$el.children[0].lastChild.lastChild
        const percent = Number(this.percentage) / 100
        const perimeter = Math.PI * 2 * (Number(this.size) - Number(this.pH))
        circle.setAttribute('stroke-dasharray', perimeter * percent + ' ' + perimeter * (1 - percent))
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";
  i {
    font-style: normal;
  }
  .progress-bar {
    position: relative;
    text-align: left;
  }
  .bg-gray {
    background-color: #e6e6e6;
  }
  .progress-inner {
    display: inline-block;
    height: 100%;
    text-align: right;
    box-sizing: border-box;
    top: 0;
    position: absolute;
  }
  .progress-bar i {
    color: #fff;
    font-size: 12px;
    line-height: 20px;
    position: absolute;
    vertical-align: middle;
    width: 32px;
  }
  .progress-bar .top {
    top: -20px;
    color: #333;
    left: 50%;
    margin-left: -16px;
    text-align: center;
  }
  .progress-bar .inner {
    margin-left: -40px;
    top: 50%;
    margin-top: -10px;
    text-align: right;
  }
  .progress-bar .bottom {
    bottom: -20px;
    color: #333;
    left: 50%;
    margin-left: -16px;
  }
  .progress-bar .left {
    left: -36px;
    color: #333;
    text-align: right;
    box-sizing: border-box;
    top: 50%;
    margin-top: -10px;
  }
  .progress-bar .right {
    right: -36px;
    color: #333;
    text-align: left;
    box-sizing: border-box;
    top: 50%;
    margin-top: -10px;
  }
  .bg-red {
    background-color: red;
  }
  .bg-yellow {
    background-color: yellow;
  }
  .bg-blue {
    background-color: blue;
  }
  .bg-green {
    background-color: green;
  }

  circle {
    -webkit-transition: stroke-dasharray .25s;
    transition: stroke-dasharray .25s;
  }
  .progress-circle {
    position: relative;
  }
  .progress-circle i {
    position: absolute;
    top: 50%;
    margin-top: -15px;
    left: 50%;
    margin-left: -25px;
    width: 50px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
  }
</style>
