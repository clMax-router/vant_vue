<template>
  <div>
    <router-view></router-view>
    <!-- 在.vue文件中 如果该标签没有填充内容 则直接写为单标签 -->
    <ZTabBar />
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
</style>