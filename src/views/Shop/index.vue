<template>
  <div>
      <Nav/>
      <ShopList/>
  </div>
</template>

<script>
import Nav from "@/components/nav/index2";
import ShopList from '@/components/ShopList'
export default {
  name: "shop",
  components:{
      Nav,
      ShopList
  }
};
</script>

<style lang="scss" scoped>
</style>