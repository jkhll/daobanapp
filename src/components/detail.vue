<template>
<div class="detail">
  <scroll class="scroll" ref="wrapper" :data="content">
    <div>
      <mheader></mheader>
      <div class="content">
        <h1>{{content[$route.params.detail].title}}</h1>
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
    width: 100vw;
    overflow: hidden;
    height: 100%;
  }
  .content {
    margin: 1rem;
    h1 {
      font-size: 20px;
      line-height: 32px;
      padding: 30px 0 5px;
      word-break: break-all;
    }
    p {
      font-size: 1rem;
    }
  }
}
</style>
