<template>
  <div class="content">
    <panel>
      <div slot="title" class="title">小标记</div>
      <div class="list list-last-child">
        <tag v-for="(item, index) in types" :key="index" :type="item.type">{{item.text}}</tag>
      </div>
    </panel>

    <panel>
      <div slot="title" class="title">空标记</div>
      <div class="list list-last-child">
        <tag v-for="(item, index) in types1" :key="index" :type="item.type">{{item.text}}</tag>
      </div>
    </panel>
  </div>
</template>

<script>
  import Tag from '../components/Tag.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Tag,
      Panel
    },
    data () {
      return {
        types: [
          {
            type: 'tag-plain',
            text: 'tag-plain'
          },
          {
            type: 'tag-primary',
            text: 'tag-primary'
          },
          {
            type: 'tag-danger',
            text: 'tag-danger'
          },
          {
            type: 'tag-warn',
            text: 'tag-warn'
          },
          {
            type: 'tag-disabled',
            text: 'tag-disabled'
          }
        ],
        types1: [
          {
            type: 'tag-plain tag-empty',
            text: 'tag-plain tag-empty'
          },
          {
            type: 'tag-primary tag-empty',
            text: 'tag-primary tag-empty'
          },
          {
            type: 'tag-danger tag-empty',
            text: 'tag-danger tag-empty'
          },
          {
            type: 'tag-warn tag-empty',
            text: 'tag-warn tag-empty'
          },
          {
            type: 'tag-disabled tag-empty',
            text: 'tag-disabled tag-empty'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "../static/common.scss";
  .tag{
    margin: 10px;
  }
</style>
