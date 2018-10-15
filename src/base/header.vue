<template>
  <div class="detail">
    <div>
      <img src="../assets/promotion_bg.jpg">
    </div>
    <div class="wrapper">
      <div class="inner">
        <p>每天看点好内容</p>
        <div class="button">
          <!-- <el-row> -->
            <a class="down">极速下载</a>
            <a class="open">打开</a>
          <!-- </el-row> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.detail {
  // margin-top: 44px;
  position: relative;
  height: 80px;
  width: 100%;
  color: #2CA532;
  // background: black;
  // display: flex;
  // align-content: center;
  // vertical-align: middle;
  top: 0;
  // text-align: center;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    max-width: 100%;
  }
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .inner {
    display: flex;
    padding-left: 18px;
    justify-content: space-around;
    width: 100%;
  }
  .button {
    .down {
      color: white;
      background: #2CA532;
      padding: 5px 12px;
      border-radius: 5px;
      font-weight: 500;
    }
    .open {
      border-radius: 5px;
      padding: 5px 12px;
      border: 1px solid #2CA532;
    }
  }
}
</style>
