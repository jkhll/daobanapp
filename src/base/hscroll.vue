<template>
  <div class="hscrollwrapper">
    <ul v-if="data.length" class='hasCover'>
      <li v-for="item in data" class="item" :key="item.id">
        <router-link :to="'/subject/' + item.id">
          <img :src="item.images.small" alt="电影">
          <p class="name">{{item.title}}</p>
          <div class="rating"  v-if="item.rating.average">
            <span v-for="star in itemClass(item.rating.average)" :key="star.id" class="iconfont" :class=star></span>
            {{item.rating.average}}
          </div>
          <div class="rating" v-else>暂无评分</div>
        </router-link>
      </li>
    </ul>
    <ul class="onlyString" v-if="onlyString.length">
      <li v-for="item in onlyString" :key="item.id" :style="{borderColor: item.color}">
        <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
const LENGTH = 5 // 定义星星个数
const CLS_ON = 'icon-star-full' // 定义全星的类名
const CLS_HALF = 'icon-star-half' // 定义半星的类名
const CLS_OFF = 'icon-star-empty' // 定义灰色全星的类名
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    onlyString: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    itemClass (score) {
      let result = []
      let fullstar = Math.floor(score / 2)
      let halfstar = Math.floor(score) % 2
      let emptystar = LENGTH - halfstar - fullstar
      for (let i = 0; i < fullstar; i++) {
        result.push(CLS_ON)
      }
      for (let i = 0; i < halfstar; i++) {
        result.push(CLS_HALF)
      }
      for (let i = 0; i < emptystar; i++) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>
<style lang="scss" scoped>
.hscrollwrapper {
  img {
    height: 10rem;
  }
  a {
    color: black;
  }
  .hasCover {
    white-space: nowrap;
    overflow-x: auto;
    text-align: center;
    padding: .3rem 0 .8rem .5rem;
    .item {
      vertical-align: top;
      display: inline-block;
      margin-left: 0.2rem;
      width: 7rem;
      .name {
        line-height: 1rem;
        font-size: 1rem;
        height: 1rem;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .rating {
        font-size: .7rem;
        line-height: 1rem;
        height: 1rem;
        .iconfont {
          color: orange;
          &::before {
            font-size: .7rem;
          }
        }
      }
    }
  }
  .onlyString {
    overflow-x: auto;
    white-space: nowrap;
    padding: 15px 15px 43px 15px;
    li {
      letter-spacing: 0.1rem;
      padding: 0 1.5rem;
      display: inline-block;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: solid 1px;
      border-radius: .25rem;
      margin: 0 0 8px 8px;
    }
    li:empty {
      width: 100%;
      display: block;
      height: 0.1px;
      border: 0;
      margin: 0;
    }
  }
}
</style>
