<template>
  <div class="content">
    <div class="common">
      <p>普通折叠</p>
      <folder>
        <div slot="folder-item">
          <folder-item v-for="(item, idx) in content" :key="idx" :title="item.title">
            <div slot="content">
              <p>你是一个笨蛋</p>
              {{item.content}}
            </div>
          </folder-item>
        </div>
      </folder>
    </div>
    <div class="accordion">
      <p>手风琴折叠</p>
      <folder accordion="true" @folder-accordion="folderAccordion">
        <div slot="folder-item">
          <folder-item v-for="(item, idx) in content" :key="idx"
                       :unfolder="idx===selIdx?unfolder:!unfolder"
                       :title="item.title">
            <div slot="content">
              {{item.content}}
            </div>
          </folder-item>
        </div>
      </folder>
    </div>
  </div>
</template>

<script>
  import Folder from '../components/Folder.vue'
  import FolderItem from '../components/FolderItem.vue'
  export default {
    components: {
      Folder,
      FolderItem
    },
    methods: {
      folderAccordion: function (now) {
        this.selIdx = now
      }
    },
    data () {
      return {
        selIdx: -1,
        unfolder: true,
        content: [
          {
            title: '用人之道',
            content: '去过庙的人都知道，一进庙门，首先是弥陀佛，笑脸迎客，而在他的北面，则是黑口黑脸的韦陀。但相传在很久以前，他们并不在同一个庙里，而是分别掌管不同的庙。弥乐佛热情快乐，所以来的人非常多，但他什么都不在乎，丢三拉四，没有好好的管理账务，所以依然入不敷出。而韦陀虽然管账是一把好手，但成天阴着个脸，太过严肃，搞得人越来越少，最后香火断绝。佛祖在查香火的时候发现了这个问题，就将他们俩放在同一个庙里，由弥乐佛负责公关，笑迎八方客，于是香火大旺。而韦陀铁面无私，锱珠必较，则让他负责财务，严格把关。在两人的分工合作中，庙里一派欣欣向荣景象。'
          },
          {
            title: '所长无用',
            content: '有个鲁国人擅长编草鞋，他妻子擅长织白绢。他想迁到越国去。友人对他说：“你到越国去，一定会贫穷的。”“为什么？”“草鞋，是用来穿着走路的，但越国人习惯于赤足走路；白绢，是用来做帽子的，但越国人习惯于披头散发。凭着你的长处，到用不到你的地方去，这样，要使自己不贫穷，难道可能吗？”'
          },
          {
            title: '袋鼠与笼子',
            content: ' 一天动物园管理员发现袋鼠从笼子里跑出来了，于是开会讨论，一致认为是笼子的高度过低。所以他们决定将笼子的高度由原来的10米加高到20米。结果第二天他们发现袋鼠还是跑到外面来，所以他们又决定再将高度加高到30米。没想到隔天居然又看到袋鼠全跑到外面，于是管理员们大为紧张，决定一不做二不休，将笼子的高度加高到100米。一天长颈鹿和几只袋鼠们在闲聊，“你们看，这些人会不会再继续加高你们的笼子？长颈鹿问。“很难说。袋鼠说∶“如果他们再继续忘记关门的话！'
          },
          {
            title: '扁鹊的医术',
            content: ' 魏文王问名医扁鹊说：“你们家兄弟三人，都精于医术，到底哪一位最好呢？扁鹊答：“长兄最好，中兄次之，我最差。文王再问：“那么为什么你最出名呢？扁鹊答：“长兄治病，是治病于病情发作之前。由于一般人不知道他事先能铲除病因，所以他的名气无法传出去；中兄治病，是治病于病情初起时。一般人以为他只能治轻微的小病，所以他的名气只及本乡里。而我是治病于病情严重之时。一般人都看到我在经脉上穿针管放血、在皮肤上敷药等大手术，所以以为我的医术高明，名气因此响遍全国。'
          },
          {
            title: '曲突徒薪',
            content: '有位客人到某人家里做客，看见主人家的灶上烟囱是直的，旁边又有很多木材。客人告诉主人说，烟囱要改曲，木材须移去，否则将来可能会有火灾，主人听了没有作任何表示。不久主人家里果然失火，四周的邻居赶紧跑来救火，最后火被扑灭了，于是主人烹羊宰牛，宴请四邻，以酬谢他们救火的功劳，但并没有请当初建议他将木材移走，烟囱改曲的人。有人对主人说：“如果当初听了那位先生的话，今天也不用准备筵席，而且没有火灾的损失，现在论功行赏，原先给你建议的人没有被感恩，而救火的人却是座上客，真是很奇怪的事呢！主人顿时省悟，赶紧去邀请当初给予建议的那个客人来吃酒。'
          }
        ]
      }
    }
  }
</script>

<style scoped>
@import "../static/common.scss";
  .content {
    padding: 20px;
  }
</style>
