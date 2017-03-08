<template>
  <a :href="cell.link" class="cell" :class="{'cell-first': !!first}">
    <span v-if="cell.icon.show && cell.icon.pic.indexOf('.') < 0" class="cell-icon" :class="cell.icon.pic"></span>
    <img v-if="cell.icon.show && cell.icon.pic.indexOf('.') >= 0" class="cell-img" :src="cell.icon.pic"/>
    <span v-if="cell.text.show" class="cell-text">{{cell.text.value}}</span>
    <span v-if="cell.right.show" class="cell-right icon-right"></span>
  </a>
</template>
<script>
  export default {
    props: {
      first: {
        type: Boolean,
        default: false
      },
      cell: {
        type: Object,
        default: function () {
          return {
            link: '#',
            icon: {
              show: true,
              pic: ''
            },
            text: {
              show: true,
              value: ''
            },
            right: {
              show: true
            }
          }
        }
      }
    }
  }
</script>
<style scoped>
  @import "../static/iconfont.scss";
  .cell {
    display: flex;
    background-color: #fff;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    line-height: 20px;
    color: #333;
    border-bottom: 1px solid #ddd;
    text-decoration: none;
  }
  .cell-first {
    border-top: 1px solid #ddd;
  }
  .cell-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  .cell-img {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 5px;
  }
  .cell-text {
    display: inline-block;
    text-align: left;
    flex: 1;
  }
  .cell-right {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
</style>
