<template>
  <div>
    <nav id="nav">
      <!-- 导航栏 -->
      <van-nav-bar title="商品" left-text="返回" :fixed="true" left-arrow>
        <van-icon name="search" slot="right" @click="goSreach" />
        <van-icon name="shopping-cart-o" slot="right" @click="goCart" />
      </van-nav-bar>
    </nav>
    <div style="height:46px"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goCart() {
      console.log(111);
    },
    goSreach() {
      console.log(222);
    }
  }
};
</script>

<style lang="scss" scoped>
#nav { // 导航栏样式
    .van-icon:last-child {
      margin-left: 20px;
  }
}
</style>