<template>
  <div>
    <!-- 在.vue文件中 如果该标签没有填充内容 则直接写为单标签 -->
    <div class="tabbar-hidden"></div>
    <ZTabBar />
    <router-view></router-view>
  </div>
</template>

<script>
// 引入Tabbar组件
import ZTabBar from "@/components/tabbar";
export default {
  name: "Index",
  //局部导入组件
  components: {
    ZTabBar
  }
};
</script>
<style lang="scss" scoped>
.tabbar-hidden {
  height: 40px;
}
</style>
<style>
.card {
  width: 100%;
  overflow: hidden;
  padding: 18px 10px;
  box-sizing: border-box;
}
</style>