<template>
  <div class="nav">
    <div class="nav-container">
      <div class="left">
        <img src="@/assets/logo.png" />
      </div>
      <div class="right">
        <div class="search">
          <van-icon name="search" class="myicon" />
          <p>搜索商品，里面有你想要的</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shop"
};
</script>

<style lang="scss" scoped>
.nav-container {
  height: 40px;
  background: #344a71
    url(https://yanxuan-static.nosdn.127.net/hxm/b2c-h5/p/20150730/static/media/home-bg.ba0dfe5d.png)
    no-repeat 0 0;
  padding: 6px 10px;
  box-sizing: border-box;
  background-size: cover;
  display: flex;
  align-items: center;
  .left {
    margin-left: 16px;
    margin-right: 16px;
    img {
      width: 25px;
      height: 25px;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    padding: 0 6px;
    .search {
      .myicon {
        font-size: 16px;
        margin-right: 4px;
        margin-top: 2px;
      }
      height: 100%;
      background: #32669d;
      border-radius: 6px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
}
</style>