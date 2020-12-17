<template>
  <div class="movie-view hasHeader">
    <nav-title name="最受关注图书｜虚构类"></nav-title>
    <h-scroll type="hasCover"></h-scroll>
    <nav-title name="最受关注图书｜非虚构类"></nav-title>
    <h-scroll type="hasCover"></h-scroll>
    <nav-title name="豆瓣纸书"></nav-title>
    <h-scroll type="hasCover">
      <div class="promItem" slot="promItem">
        <img class="corver" src="../assets/book_zw.jpg" alt="">
        <div class="content">
          <span class="price">¥ 68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </h-scroll>
    <!-- <nav-title name="发现好书"></nav-title> -->
    <!-- <h-scroll v-if="bookTags.length" type="onlyString" :data="bookTags"></h-scroll> -->
    <item-list class="itemlist"></item-list>
    <!-- <download-app></download-app> -->
  </div>
</template>

<script>
import itemList from '@/base/itemlist'
import navTitle from '@/base/nav-title'
import HScroll from '@/base/hscroll'

export default {
  name: 'book-view',
  components: {HScroll, navTitle, itemList},
  data () {
    return {}
  },
  methods: {
    // Dispatching getBook
    getBook: function () {
      // this.$store.dispatch('getBook')
    }
  },
  created: function created () {
    // Getting books data on created
    this.getBook()
    // setTimeout(() => {
    // this.$store.state.book.bookTags
    // }, 1000)
  }
}
</script>

<style scoped>

.hasHeader {
  margin-top: 44px;
  /* overflow: hidden; */
}

.promItem {
  overflow: hidden;
  margin: 1.6rem 1.8rem 0.8rem 1.6rem;
}

.corver {
  float: left;
  width: 7rem;
  margin-right: 1.5rem;
}

.content {
  margin-right: 1rem;
}

.name {
  font-size: 1.5rem;
  color: #494949;
  margin: 1rem;
  max-width: 100%;
  line-height: 2.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.price {
  float: right;
  color: #E76648;
  font-size: 1.1rem;
  line-height: 2.2rem;
}

.info {
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #9B9B9B;
}

.itemlist {
  margin-top:30px;
}
</style>
