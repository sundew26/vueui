<template>
  <div class="content">
    <div class="padding-10">
      <input type="button" class="btn" @click="popPosition(0)" value="弹出popup"/>
      <input type="button" class="btn" @click="popPosition(1)" value="从顶部弹出popup"/>
      <input type="button" class="btn" @click="popPosition(3)" value="从底部弹出popup"/>
      <input type="button" class="btn" @click="popPosition(4)" value="从左边弹出popup"/>
      <input type="button" class="btn" @click="popPosition(2)" value="从右边弹出popup"/>
    </div>
    <div v-for="(item, i) in popData"  :key="i">
      <popups :show.sync="item.showPopup" :position.sync="item.position" :id.sync="i" :maskHide.sync="item.maskHide">
        <div slot="popContainer">
          <div class="pop-inner" :class="'pop-'+item.position">
            <div class="pop-text">忆江南</div>
            <div class="pop-text">江南好</div>
            <div class="pop-text">风景旧曾谙</div>
            <div class="pop-text">日出江花红胜火</div>
            <div class="pop-text">春来江水绿如蓝</div>
            <div class="pop-text">能不忆江南</div>
            <button class="btn btn-kai margin-top20" @click="close(i)">
              关闭 
            </button>
          </div>
        </div>
      </popups>
    </div> 
  </div>
</template>

<script>
  import Popups from '../components/Popups.vue'
  export default {
    components: {
      Popups
    },
    data () {
      return {
        popData: [
          {
            showPopup: true,
            position: 'center',
            maskHide: false
          },
          {
            showPopup: false,
            position: 'top',
            maskHide: false
          },
          {
            showPopup: false,
            position: 'right'
          },
          {
            showPopup: false,
            position: 'bottom'
          },
          {
            showPopup: false,
            position: 'left'
          }
        ]
      }
    },
    methods: {
      popPosition (i) {
        this.popData.map(function (r, i) {
          r.showPopup = false
        })
        this.popData[i].showPopup = true
      },
      close (i) {
        this.popData[i].showPopup = false
      }
    }
  }
</script>

<style lang="scss" scope>
  @import "../static/common.scss";
  .pop-inner {
    padding: 40px 20px;
    box-sizing: border-box;
  }
  .pop-text {
    font-size: 16px;
    text-align: center;
    line-height: 28px;
  }
  .pop-center {
    width: 240px;
    height: 300px;
  }
  .pop-right {
    width: 200px;
  }
  .pop-left {
    width: 200px;
  }
  .btn {
    margin-top: 20px;
  }
</style>
