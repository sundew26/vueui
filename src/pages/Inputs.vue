<template>
  <div class="content">
    <div class="w400">
      <input-item
        class="mgb10"
        :valid-callback="validCallback"
        :value="title" :pattern="titlePattern"
        :maxlength="15"
        :clip=true
        :visible-error="true"
        maxlength-errormsg="请限制在15个字符内"
        required-errormsg="标题是必填项"
        name='title'
        placeholder-text="请填写名称"></input-item>
      <input-item
        tag="textarea"
        :valid-callback="validCallback"
        :value.sync="title" :pattern="titlePattern"
        :maxlength="100"
        :clip=false
        :visible-error="true"
        maxlength-errormsg="请限制在100个字符内"
        required-errormsg="标题是必填项"
        name='title'
        placeholder-text="请填写详情"></input-item>
    </div>
  </div>
</template>

<script>
  import InputItem from '../components/Inputs.vue'
  export default {
    name: 'inputs',
    data () {
      return {
        title: '',
        titlePattern: [
          {
            name: '姓名详情',
            reg: /^1/,
            errormsg: '必须1开头'
          },
          {
            name: '姓名详情',
            reg: /2$/,
            errormsg: '必须2结束'
          }
        ]
      }
    },
    components: {
      InputItem
    },
    methods: {
      validCallback () {
        console.log('arguments', arguments)
      }
    }
  }
</script>

<style>
  @import '../static/common.scss';

</style>
