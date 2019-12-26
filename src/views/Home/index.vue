<template>
  <div class="home">
    <ZNav />
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in imgArr" :key="index">
          <div class="swipe-item">
            <img :src="item" alt />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>这是主页面
  </div>
</template>

<script>
// 导入nav
import ZNav from "@/components/nav";
const imgArr = [
  require("@/assets/img1.jpg"),
  require("@/assets/img2.jpg"),
  require("@/assets/img3.jpg")
];
export default {
  name: "home",
  components: {
    ZNav
  },
  data() {
    return {
      imgArr
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  .swipe {
    height: 190px;
    .van-swipe {
      height: 100%;
    }
    .swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>