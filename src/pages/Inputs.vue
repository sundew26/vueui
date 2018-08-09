<template>
  <div class="content padding-10">
    <panel>
      <div slot="title" class="title">默认</div>
      <input-item
      class="mgb10"
      :valid-callback="validCallback"
      name='title'></input-item>
    </panel>

    <panel>
      <div slot="title" class="title">最多15个字符，超出不截断</div>
      <input-item
      class="mgb10"
      :valid-callback="validCallback"
      :maxlength="15"
      :clip=false
      :visible-error="true"
      maxlength-errormsg="请限制在15个字符内"
      name='title'></input-item>
    </panel>

    <panel>
      <div slot="title" class="title">最多15个字符，超出截断</div>
      <input-item
      class="mgb10"
      :valid-callback="validCallback"
      :maxlength="15"
      :visible-error="true"
      maxlength-errormsg="请限制在15个字符内"
      name='title'
      placeholder-text="不能超过15个字符"></input-item>
    </panel>

    <panel>
      <div slot="title" class="title">必填</div>
      <input-item
      class="mgb10"
      :valid-callback="validCallback"
      :value="title"
      :visible-error="true"
      required-errormsg="标题是必填项"
      name='title'></input-item>
    </panel>

    <panel>
      <div slot="title" class="title">必须1开头2结尾</div>
      <input-item
      class="mgb10"
      :valid-callback="validCallback"
      :value="title" :pattern="titlePattern"
      :clip=true
      :visible-error="true"
      required-errormsg="标题是必填项"
      name='title'
      placeholder-text="1开头2结尾"></input-item>
    </panel>

    <panel>
      <div slot="title" class="title">必填，不能超过15个字符，且必须1开头2结尾</div>
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
      placeholder-text="不能超过15个字符"></input-item>
    </panel>

    <panel>
      <div slot="title" class="title">不显示错误信息</div>
      <input-item
      class="mgb10"
      :valid-callback="validCallback"
      :value="title" :pattern="titlePattern"
      :clip=true
      :visible-error="false"
      maxlength-errormsg="请限制在15个字符内"
      required-errormsg="标题是必填项"
      name='title'
      placeholder-text="不显示错误信息"></input-item>
    </panel>

    

    <panel>
      <div slot="title" class="title">禁用</div>
      <input-item
      class="mgb10"
      :disable="true"
      name='title'
      placeholder-text="不能被编辑"></input-item>
    </panel>

    <panel>
      <div slot="title" class="title">文本框</div>
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
    </panel>
    
  </div>
</template>

<script>
  import InputItem from '../components/Inputs.vue'
  import Panel from '../components/Panel.vue'
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
      InputItem,
      Panel
    },
    methods: {
      validCallback () {
        console.log('arguments', arguments)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../static/common.scss';
</style>
