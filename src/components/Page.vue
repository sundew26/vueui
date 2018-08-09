<template>
  <div class="page-nav">
    <ul >
      <li v-for="(item, idx) in pages" :key="idx"
          v-show="item !== '···' || idx === 1 && pages[idx + 1] > 2  || idx === 7 && pageCount - pages[idx - 1] > 1"
          :class="{ active: current == item, 'no-border': item === '···'}">
        <a @click="clickNav(item)">{{item}}</a>
      </li>
      <li>
        <span>前往</span>
        <input type="number" v-model="jumpPage" class="jump" value="" @keydown.13="autoJump()"/>
        <span>页</span>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    props: {
      // 分页总数
      pageCount: {
        type: Number,
        required: true
      },
      // 每页数量
      pageSize: {
        type: Number,
        default: 10
      },
      // 当前页码
      current: {
        type: Number,
        twoWay: true,
        default: 1
      },
      pageChange: {
        type: Function,
        default: function () {
          return function () {}
        }
      }
    },
    methods: {
      clickNav: function (item) {
        // console.log('click nav')
        if (item === '···' || item === this.current) {
          return
        }
        this.changeCurrent(item)
        this.pageChange(item)
      },
      changeCurrent: function (item) {
        this.$emit('change-current', item)
      },
      autoJump: function () {
        console.log('enter', this.jumpPage)
        this.$emit('change-current', Number(this.jumpPage))
      }
    },
    data () {
      return {
        thisActive: 0,
        jumpPage: ''
      }
    },
    computed: {
      pages: function () {
        var left = 1
        var right = this.pageCount
        var pageArr = []
        // 如果总数大于7
        if (this.pageCount >= 7) {
          // 如果当前点击是第4页
          if (this.current > 3 && this.current < this.pageCount - 3) {
            left = this.current - 3
            right = this.current + 3
          } else {
            if (this.current <= 3) {
              left = 1
              right = 7
            } else {
              right = this.pageCount
              left = this.pageCount - 5
            }
          }
        }
        pageArr.push(1)
        pageArr.push('···')
        while (left + 1 < right) {
          pageArr.push(left + 1)
          left++
        }
        pageArr.push('···')
        pageArr.push(this.pageCount)
        return pageArr
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../static/color.scss";

  .page-nav ul{
    list-style:none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  .page-nav ul li {
    min-width: 22px;
    height: 22px;
    margin: 0;
    border: 1px solid $color9;
    color: $color6;
    line-height: 22px;
    text-align: center;
    border-left: 0 none;
    display: flex;
    flex-direction: row;
  }
  .page-nav ul li:first-child {
    border-left:1px solid $color9;
  }
  .page-nav ul li:last-child {
    padding-left: 10px;
    border: 0 none;
  }
  .page-nav ul li.active {
    background: $success;
  }
  .page-nav ul li.active a{
    color: #fff;
  }
  .page-nav ul li a {
    width: 100%;
    display: block;
    cursor: pointer;
    color: $color6;
  }
  .jump {
    border: 1px solid $color9;
    width: 50px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    margin: 0 5px;
    box-sizing: border-box;
    color: $color6;
  }
  .jump:focus {
    border: 1px solid $color9;
    outline: none;
  }
  .page-nav span {
    font-size: 12px;
  }
  .no-border {
    height: 24px!important;
    border-top: 0 none!important;
    border-left: 0 none!important;
    border-bottom: 0 none!important;
  }
</style>
