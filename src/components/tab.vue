<template>
  <div class="container">
    <router-link to="/"><span class="logo">豆瓣</span></router-link>
    <nav>
      <router-link to="/movies"><span  class="item a">电影</span></router-link>
      <router-link to="/books"><span class="item b">图书</span></router-link>
      <!-- <router-link to="/broadcast"><span class="item c">广播</span></router-link>
      <router-link to="/team"><span class="item d">小组</span></router-link> -->
      <router-link to="/item"><span class="item e"><span class="iconfont  icon-sousuo_1"></span></span></router-link>
    </nav>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped lang="scss">

.container{
  position: fixed;
  min-width: 320px;
  max-width: 600px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding-left: 18px;
  height: 44px;
  line-height: 44px;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
  background-color: white;
  .logo {
    font-weight: 700;
    font-size: 23px;
    color: #00b600;
  }
  .item{
    text-align: center;
    margin-right: 16px;
  }
  .a {
    color: #2384E8;
  }
  .b {
    color: #9F7860;
  }
  .c {
    color: #E4A813;
  }
  .d {
    color: #2AB8CC;
  }
  .e {
    float: right;
    color: #00b600;
    height: 44px;
    span {
      top: 9px;
    }
    span::before {
      top: 9px;
      font-size: 24px;
    }
  }
}

</style>
