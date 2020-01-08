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
      <div @click="goInfo(item.id)" :class="[{shop:true,shopMarign:index%2 == 0}]" :key="item.id" v-for="(item,index) in shopList">
        <img
          :src="item.image"
        />
        <div class="shopInfo">{{item.title.slice(0,15) + '...'}}</div>
        <div class="shopPic">￥{{item.price}}</div>
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
      active: 0,
      shopList:[]
    };
  },
  methods:{
    goInfo(id){ // 查看商品详情方法
      console.log(id)
    }
  },
  created(){
    // console.log(111,this.$route.params)
    this.$api.shop.findByType({page:1,row:10,id:560}).then( res => {
      // console.log(res)
      this.shopList = res.content
    })
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