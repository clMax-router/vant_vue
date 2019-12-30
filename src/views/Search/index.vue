<template>
  <div>
    <div class="search">
      <div class="left">
        <img src="@/assets/logo.png" />
      </div>
      <div class="center">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </div>
      <div class="right">
        <a href="#">取消</a>
      </div>
    </div>
    <div class="card">
      <div class="searchHistory">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*  */
.search {
  display: flex;
  height: 40px;
  align-items: center;
  background-image: url(https://yanxuan-static.nosdn.127.net/hxm/b2c-h5/p/20150730/static/media/home-bg.ba0dfe5d.png);
  background-size: cover;
  .left,
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    height: 100%;
    width: 48px;

    img {
      width: 26px;
      height: 26px;
    }
  }
  /* 中间的搜索框 */
  .center {
    height: 30px;
    .van-search {
      padding: 0;
      width: 276px;
      border-radius: 4px;
      .van-cell {
        padding: 0;
      }
    }
  }
  /* 取消的a标签的样式 */
  .right {
    font-size: 18px;
    margin-left: 10px;
    a {
      color: #4aadf8;
      font-size: 16px;
    }
  }
}
</style>