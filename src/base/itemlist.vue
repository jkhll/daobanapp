<template>
  <div class="types">
    <h3 class="title">分类浏览</h3>
    <ul class="typeswrapper">
      <li class="item" v-for="item in items" :key="item.id">
        <a :href="baseUri + item.href">{{item.title}}</a><span class="iconfont icon-youjiaobiao"></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      baseUri: 'https://m.douban.com/',
      items: [
        {
          title: '经典',
          href: 'movie/classic'
        },
        {
          title: '冷门佳片',
          href: 'movie/underrated'
        },
        {
          title: '豆瓣高分',
          href: 'movie/doubantop'
        },
        {
          title: '动作',
          href: 'movie/action'
        },
        {
          title: '喜剧',
          href: 'movie/comedy'
        },
        {
          title: '爱情',
          href: 'movie/love'
        },
        {
          title: '悬疑',
          href: 'movie/mystery'
        },
        {
          title: '恐怖',
          href: 'movie/horror'
        },
        {
          title: '科幻',
          href: 'movie/scifi'
        },
        {
          title: '治愈',
          href: 'movie/sweet'
        },
        {
          title: '文艺',
          href: 'movie/artfilm'
        },
        {
          title: '成长',
          href: 'movie/youth'
        },
        {
          title: '动画',
          href: 'movie/animation'
        },
        {
          title: '华语',
          href: 'movie/chinese'
        },
        {
          title: '欧美',
          href: 'movie/western'
        },
        {
          title: '韩国',
          href: 'movie/korean'
        },
        {
          title: '日本',
          href: 'movie/japanese'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.types {
  padding-left: 15px;
  .title {
    font-weight: 500;
  }
  .item {
    box-sizing: border-box;
    display: inline-block;
    width: 50%;
    height: 2.64rem;
    line-height: 2.64rem;
    border-top: solid 1px #eee;
    border-right: solid 1px #eee;
    &:last-child {
      border-bottom: solid 1px #eee;
    }
    &:nth-last-child(2) {
      border-bottom: solid 1px #eee;
    }
    a {
      color: #42bd56;
      padding-left: 15px;
    }
    span {
      font-size: .7rem;
      margin-right: 15px;
      float: right;
      color: #ccc;
    }
  }
}
</style>
