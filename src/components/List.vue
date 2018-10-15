<template>
<div class="list">
  <div v-for="item in lists" :key="item.id" class="container">
    <div class="left">
      <h3>{{item.title}}</h3>
      <p class="content">{{item.content | subStr}}</p>
      <p>{{item.category_name}}</p>
    </div>
    <div class="right">
      <img :src="item.image">
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    subStr (value) {
      let newval = value.replace(/<.*?>/g, '')
      return newval.slice(0, 70)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  .container {
    text-align: justify;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    justify-content: space-between;
    padding: 25px 1px 25px 18px;
    &:last-child {
      border-bottom: none;
    }
    .right {
      width: 25.6%;
      padding-left: 10%;
      img {
        width: 80%;
        height: 80%;
      }
    }
    .left {
      flex: 1;
      h3 {
        font-weight: 500;
        font-size: 17px;
        line-height: 1.41em;
        color: #494949;
        margin-bottom: 16px;
      }
      p {
        font-size: 12px;
        color: #aaa;
      }
      .content {
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-align: justify;
        line-height: 1.5em;
        margin-bottom: 15px;
      }
    }
  }
}
</style>
