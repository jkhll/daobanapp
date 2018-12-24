<template>
  <div class="subject">
    <m-header></m-header>
    <loading v-if="showLoading"></loading>
    <div
      v-if="!showLoading"
      class="subjectwrapper"
    >
      <h1 class="title">{{subject.title}}</h1>
      <div class="subject-info">
        <div class="right">
          <img :src=subject.images.small>
        </div>
        <div class="left">
          <span
            v-for="star in itemClass(subject.rating.average)"
            :key="star.id"
            class="iconfont"
            :class=star
          >
          </span>{{subject.rating.average}}<span class="average">{{subject.ratings_count}}人评分</span>
          <template v-if="subject.genres && subjectMeta">
            <p class="meta">{{subjectMeta}}</p>
          </template>
        </div>
      </div>
      <div class="mark-item">
        <a href="#">想看</a>
        <a href="#">看过</a>
      </div>
    </div>
  </div>
</template>
<script>
import loading from './Loading'
import MHeader from './MHeader'
import { mapGetters } from 'vuex'
const LENGTH = 5 // 定义星星个数
const CLS_ON = 'icon-star-full' // 定义全星的类名
const CLS_HALF = 'icon-star-half' // 定义半星的类名
const CLS_OFF = 'icon-star-empty' // 定义灰色全星的类名
export default {
  data () {
    return {
      showLoading: true,
      subject: {}
    }
  },
  created () {
    this.init()
  },
  computed: {
    ...mapGetters([
      'subjectMeta'
    ])
  },
  methods: {
    init () {
      const id = this.$route.params.id
      this.$store.dispatch({
        type: 'getSubject',
        id: id,
        classify: 'movie'
      }).then((res) => {
        this.subject = res
        this.showLoading = false
      })
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
  components: {
    MHeader,
    loading
  }
}
</script>
<style lang="scss" scoped>
.subject {
  margin-top: 44px;
  .subjectwrapper {
    padding: 1.3rem;
    .title {
      padding: 20px 0 5px;
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: 500;
      // padding: 1rem 0 0;
    }
    .subject-info {
      overflow: hidden;
      padding-bottom: 30px;
      .left {
        margin-right: 6.25rem;
        margin-top: 0.2rem;
        font-size: 1rem;
        line-height: 1rem;
        .iconfont {
          color: orange;
        }
        .average {
          color: #aaa;
          padding-left: 0.8rem;
        }
        .meta {
          color: #494949;
          margin-top: 15px;
          font-size: 14px;
          line-height: 20px;
          margin-right: 1rem;
        }
      }
      .right {
        float: right;
        img {
          display: block;
          width: 100%;
          max-width: 6.25rem;
        }
      }
    }
    .mark-item {
      display: flex;
      padding-bottom: 30px;
      a {
        flex: 1;
        color: orange;
        border: orange 1px solid;
        text-align: center;
        line-height: 2rem;
        border-radius: 3px;
        margin-right: 1rem;
      }
    }
  }
}
</style>
