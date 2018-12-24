<template>
  <div class="titlewrapper">
    <div class="left">{{name}}</div>
    <div class="right" @click="tohome">更多</div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  created () {
    console.log(1)
  },
  methods: {
    tohome () {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss" scoped>
.titlewrapper {
  display: flex;
  justify-content: space-between;
  height: 1.6rem;
  line-height: 1.6rem;
  padding-top: .7rem;
  .left {
    padding-left: .8rem;
  }
  .right {
    padding-right: .7rem;
    color: #42bd56;
  }
}
</style>
