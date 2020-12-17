<template>
<div class="movieswrapper">
  <nav-title name="影院热映"></nav-title>
  <h-scroll></h-scroll>
  <nav-title name="免费在线观影"></nav-title>
  <h-scroll></h-scroll>
  <nav-title name="新片速递"></nav-title>
  <h-scroll></h-scroll>
  <nav-title name="发现好电影"></nav-title>
  <h-scroll ></h-scroll>
  <item-list></item-list>
</div>
</template>

<script>
import navTitle from '@/base/nav-title'
import HScroll from '@/base/hscroll'
import itemList from '@/base/itemlist'
// import { GetTheaters, GetTop, GetComingSoon } from '@/api/movies'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      theaters: [],
      top: [],
      comingsoon: []
    }
  },
  created () {
    // this._initTheaters()
    // this._initGetTop()
    // this._initGetComingSoon()
  },
  computed: {
    ...mapState({
      onlyString: state => state.movie.movieTags
    })
  },
  methods: {
    // _initTheaters () {
    //   GetTheaters().then((res) => {
    //     this.theaters = res.data.subjects
    //     console.log(this.theaters)
    //   })
    // },
    // _initGetTop () {
    //   GetTop().then((res) => {
    //     this.top = res.data.subjects
    //   })
    // },
    // _initGetComingSoon () {
    //   GetComingSoon().then((res) => {
    //     this.comingsoon = res.data.subjects
    //   })
    // }

  },
  components: {
    HScroll,
    navTitle,
    itemList
  }
}
</script>
<style lang="scss" scoped>
  .movieswrapper {
    margin-top: 44px;
    overflow: hidden;
  }
</style>
