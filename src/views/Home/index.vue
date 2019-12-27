<template>
  <div class="home">
    <ZNav />
    <div>
      <div class="swipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item,index) in imgArr" :key="index">
            <div class="swipe-item">
              <img :src="item" alt />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="grid">
        <van-grid square clickable>
          <van-grid-item
            v-for="value in iconArr"
            :key="value.txt"
            :icon="value.icon"
            :text="value.txt"
          />
        </van-grid>
      </div>
      <div class="main">
        <CGoods/>
      </div>
    </div>
  </div>
</template>

<script>
// 导入nav
import ZNav from "@/components/nav";
// 导入内容
import CGoods from '@/components/goodsGrid'
const imgArr = [
  require("@/assets/img1.jpg"),
  require("@/assets/img2.jpg"),
  require("@/assets/img3.jpg")
];
// 定义icon数组
const iconArr = [
  { icon: "balance-o", txt: "数码" },
  { icon: "refund-o", txt: "图书" },
  { icon: "diamond-o", txt: "儿童玩具" },
  { icon: "photo-o", txt: "生活用品" },
  { icon: "birthday-cake-o", txt: "akun" },
  { icon: "aim", txt: "xjj" },
  { icon: "idcard", txt: "zhj" },
  { icon: "shopping-cart", txt: "tp" }
];
export default {
  name: "home",
  components: {
    ZNav,
    CGoods
  },
  data() {
    return {
      imgArr,
      iconArr
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
        width: 375px;
        height: 190px;
      }
    }
  }
}
</style>