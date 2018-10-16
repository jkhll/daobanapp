<template>
<div class="detail">
  <scroll class="scroll" ref="wrapper" :data="content" :top="false">
    <div>
      <mheader></mheader>
      <div class="content">
        <span v-for="item in tags" :key="item" class="tags">{{item}}<span class="iconfont icon-youjiaobiao"></span></span>
        <h1>{{content[$route.params.detail].title}}
          <span class="location">{{content[$route.params.detail].loc_name}}</span>
        </h1>
        <div class="imgwrapper">
          <img :src="content[$route.params.detail].image">
        </div>
        <div class="details">
          <span>时间:&nbsp;&nbsp;</span>
          <ul>
            <li>{{content[$route.params.detail].begin_time}}</li>
            <li>{{content[$route.params.detail].end_time}}</li>
          </ul>
        </div>
        <div class="details">
          <span>地点:&nbsp;&nbsp;</span>
          <ul>
            <li>{{content[$route.params.detail].address}}</li>
          </ul>
        </div>
        <div class="details">
          <span>费用:&nbsp;&nbsp;</span>
          <ul>
            <li>{{content[$route.params.detail].fee_str}}</li>
          </ul>
        </div>
        <div class="details">
          <span>类型:&nbsp;&nbsp;</span>
          <ul>
            <li>{{content[$route.params.detail].category_name}}</li>
          </ul>
        </div>
        <div class="details">
          <span>起始地点:&nbsp;&nbsp;</span>
          <ul>
            <li v-if="content[$route.params.detail].owner">{{content[$route.params.detail].owner.name}}</li>
          </ul>
        </div>
        <h3>活动详情</h3>
        <p v-html="inner"></p>
      </div>
    <!-- <loading></loading> -->
    </div>
  </scroll>
</div>
</template>
<script>
import mheader from '@/base/header'
// import loading from '@/base/Loading'
import scroll from '@/base/scroll'
// import { setTimeout } from 'timers'
// import { getList } from '@/api/home.js'
export default {
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },
  components: {
    mheader,
    // loading,
    scroll
  },
  created () {
    if (!this.content.length) {
      this.$router.push('/home')
    }
    // console.log(this.$route.params.detail)
    // setTimeout(() => {
    //   this.$refs.wrapper.refresh()
    //   console.log('refresh ok')
    // }, 3000)
  },
  computed: {
    inner () {
      return this.content[this.$route.params.detail].content.replace(/<img.*?>/ig, '')
    },
    tags () {
      return this.content[this.$route.params.detail].tags.split(',')
    }
  }
}
</script>
<style lang="scss" scoped>
// @import "./iconfont.css";
.detail {
  position: fixed;
  top: 44px;
  bottom: 0;
  background: white;
  .scroll {
    max-width: 600px;
    width: 100vw;
    overflow: hidden;
    height: 100%;
  }

  .content {
    margin: 1rem;
      .imgwrapper {
        margin: 10px auto;
        text-align: center;
      }
      img {
        width: 100%;
        max-width: 220px;
        height:auto;
      }
    .tags {
      background-color: #effaf0;
      border: 1px solid #42bd56;
      display: inline-block;
      padding: 5px 10px;
      border-radius: 15px;
      margin-bottom: 10px;
      color: #42bd56;
      font-size: 12px;
      margin-right: 10px;
      span {
        font-size: 8px;
        vertical-align: middle;
        margin-left: 3px;
      }
    }
    h1 {
      font-size: 20px;
      line-height: 32px;
      padding: 15px 0 5px;
      word-break: break-all;
      .location {
        padding: 3px 5px;
        font-size: 8px;
        background-color: #ff8263;
        display: inline-block;
        line-height: 14px;
        font-weight: 700;
        color: white;
        border-radius: 2px;
        vertical-align: middle;
    }
    }
    p {
      font-size: 1rem;
    }
    .details {
      margin-left: 40px;
      margin-bottom: .6rem;
      min-height: 1.5rem;
      font-size: 15px;
      clear: left;
      span {
        float: left;
        color: #666;
        margin-left: -40px;
        line-height: 150%;
      }
      li {
        font-size: 14px;
      }
    }
    h3 {
      color: #072;
      margin: 1rem 0;
    }
  }
}
</style>
