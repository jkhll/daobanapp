<template>
<div class="movieswrapper">
  <nav-title name="影院热映"></nav-title>
  <h-scroll v-if="theaters.length" :data="theaters"></h-scroll>
  <nav-title name="免费在线观影"></nav-title>
  <h-scroll v-if="top.length" :data="top"></h-scroll>
  <nav-title name="新片速递"></nav-title>
  <h-scroll v-if="comingsoon.length" :data="comingsoon"></h-scroll>
  <nav-title name="发现好电影"></nav-title>
  <h-scroll v-if="onlyString.length" :onlyString="onlyString"></h-scroll>
  <item-list></item-list>
</div>
</template>

<script>
import navTitle from '@/base/nav-title'
import HScroll from '@/base/hscroll'
import itemList from '@/base/itemlist'
import { GetTheaters, GetTop, GetComingSoon } from '@/api/movies'
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
    this._initTheaters()
    this._initGetTop()
    this._initGetComingSoon()
  },
  computed: {
    ...mapState({
      onlyString: state => state.movie.movieTags
    })
  },
  methods: {
    _initTheaters () {
      GetTheaters().then((data) => {
        this.theaters = data.subjects
      })
    },
    _initGetTop () {
      GetTop().then((data) => {
        this.top = data.subjects
      })
    },
    _initGetComingSoon () {
      GetComingSoon().then((data) => {
        this.comingsoon = data.subjects
      })
    }

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
