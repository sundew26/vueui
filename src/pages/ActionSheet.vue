<template>
  <div class="content">
    <div class="kai-content">
      <div class="padding-10">
        <button class="btn btn-success" @click="showActionSheet(0)">从顶部弹出popup</button>
        <button class="btn btn-kai" @click="showActionSheet(1)">从底部弹出ActionSheet</button>
      </div>
      <action-sheet v-for="(item, index) in asData" :key="index" :as-data.sync="item" @action-sheet="actionSheet"></action-sheet>
    </div>
  </div>
</template>

<script>
  import ActionSheet from '../components/ActionSheet.vue'
  export default {
    components: {
      ActionSheet
    },
    data () {
      return {
        asData: [
          {
            itemList: [{
              class: 'list bold',
              value: '江南忆',
              event: '',
              slotid: 'slotid0',
              slot: '<div class="iconfont icon-success">alot1</div><div class="iconfont icon-delete">alot11</div>'
            },
            {
              class: 'list',
              value: '其次忆吴宫',
              event: '',
              slotid: 'slotid1',
              slot: '<div class="iconfont icon-minus">slot2</div><div class="iconfont icon-plus">alot21</div>'
            },
            {
              class: 'list',
              value: '吴酒一杯春竹叶',
              event: ''
            },
            {
              class: 'list',
              value: '吴娃双舞醉芙蓉',
              event: ''
            },
            {
              class: 'list',
              value: '早晚复相逢',
              event: ''
            }],
            top: true,
            index: 0,
            show: false
          },
          {
            itemList: [{
              class: 'bold list1',
              value: '自定义',
              event: ''
            },
            {
              value: '拍摄',
              event: ''
            },
            {
              value: '从手机相册选择',
              event: ''
            }],
            index: 1,
            show: false
          }
        ]
      }
    },
    methods: {
      showActionSheet (i) {
        this.asData.map((r, i) => {
          r.show = false
        })
        this.asData[i].show = true
      },
      hideActionsheet (i) {
        this.asData[i].show = false
      },
      actionSheet (i, index, close) {
        console.log(i, index, close)
        if (close === 'true') {
          console.log('您选择了取消')
        } else {
          console.log(i, index)
        }
        this.hideActionsheet(i)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../static/common.scss";
  .list {
    color: #808080;
  }
  .bold {
    font-weight: bold;
  }
</style>
