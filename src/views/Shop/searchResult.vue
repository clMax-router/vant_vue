<template>
  <div>
    <!--这是 查询商品结果 页面 -->
    <!-- 导航栏 -->
    <Nav />
    <!-- 筛选栏 -->
    <van-tabbar class="van-tabbar" v-model="active" :fixed="false">
      <van-tabbar-item>最新</van-tabbar-item>
      <van-tabbar-item>销量</van-tabbar-item>
      <van-tabbar-item>
        <div class="center">
          价格
          <span v-if="true">
            <van-icon name="arrow-up" v-if="true" />
            <van-icon name="arrow-down" v-else />
          </span>
        </div>
      </van-tabbar-item>
      <van-tabbar-item>
        <div class="center">
          筛选
          <van-icon name="apps-o" style="margin-left:4px;" />
        </div>
      </van-tabbar-item>
    </van-tabbar>

    <div style="height:80px"></div>
    <!-- 展示商品 -->
    <div class="card">
      <div :class="[{shop:true,shopMarign:item%2 != 0}]" :key="item" v-for="(item) in 3">
        <img
          src="http://nos.netease.com/dmall-mc/%E4%B8%BB%E5%9B%BE.png8bdb5783-7647-451c-84e8-1ee6acdc681e?download=%25E4%25B8%25BB%25E5%259B%25BE.png&Signature=4Md8a0XuuCCD7co1uY27IuST4vfuoABk0riwU0Hc88A%3D&Expires=1578184691&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"
        />
        <div class="shopInfo">守望先锋 麦克雷黏土人</div>
        <div class="shopPic">￥248.00</div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/nav";
export default {
  name: "searchResult",
  data() {
    return {
      active: 0
    };
  },
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
.van-tabbar {
  // 筛选栏
  position: fixed;
  top: 40px;
  left: 0;
  .van-tabbar-item {
    font-size: 16px;

    .center {
      // 让文字和 icon图标对齐
      display: flex;
      align-items: center;
    }
  }
}

// 展示商品
.card {
  display: flex;
  flex-wrap: wrap;
  .shop {
    // 单个商品 card
    width: 174.0154px;
    height: 248px;
    padding: 0 13px;
    background-color: #fff;
    margin-bottom: 7px;
    box-sizing: border-box;
    img {
      // 商品图片
      width: 150px;
      height: 150px;
    }
    .shopInfo {
      // 商品信息
      font-size: 14px;
      margin-top: 20px;
    }
    .shopPic {
      // 商品价格
      font-size: 14px;
      color: #c00817;
      margin-top: 20px;
    }
  }
  .shopMarign {
    margin-right: 7px;
  }
}
</style>