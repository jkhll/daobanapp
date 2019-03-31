<template>
  <div class="wrapper">
    <form class="search_form">
      <input
        class="search_input"
        type="search"
        ref="search"
        v-model.trim.lazy="search"
      >
      <a
        class="search_button"
        href="javascript:void(0)"
        @click="gettt"
      >搜索</a>
    </form>
    <div class="list">
      <div class="listSmall" v-for="item in $store.state.search.resData.subjects" :key="item.collect_count">
        <img :src="item.images.small">
        <div>
        <p>{{item.title}}</p>
        <span v-for="star in itemClass(item.rating.average)" :key="star.id" class="iconfont" :class=star></span>
            {{item.rating.average}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const LENGTH = 5 // 定义星星个数
const CLS_ON = 'icon-star-full' // 定义全星的类名
const CLS_HALF = 'icon-star-half' // 定义半星的类名
const CLS_OFF = 'icon-star-empty' // 定义灰色全星的类名
export default {
  data () {
    return {
      search: ''
    }
  },
  computed: {
    getDate () {
      return this.$store.state.search.resData
    }
  },
  activated () {
    this.search = this.$route.query.q
    this.gettt()
  },
  methods: {
    gettt () {
      this.$store.dispatch('toSearch', { q: this.search })
      console.log(this.$store.state.search.resData)
    },
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
  },
  destroyed () {
    this.search = ''
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  margin-top: 44px;
  .search_form {
    display: flex;
    border-bottom: 1px solid #f3f3f3;
    .search_input {
      background: #f3f3f3;
      flex: 1;
      border: 0px;
      margin: 5px 10px;
      border-radius: 3px;
      height: 30px;
    }
    .search_button {
      line-height: 30px;
      box-sizing: border-box;
      padding: 5px 20px 5px 0px;
      color: #000;
    }
  }
  .list {
    .listSmall {
      display: flex;
      padding: 15px;
      border-bottom: 1px solid #f3f3f3;
      div {
        padding: 10px 0 0 5px;
        span {
          padding-top: 5px;
          color: orange;
        }
      }

    }
    img {
      width: 40px;
      height: 50px;
    }
  }
}
</style>
