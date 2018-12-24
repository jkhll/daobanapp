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
    <div></div>
  </div>
</template>
<script>
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
}
</style>
