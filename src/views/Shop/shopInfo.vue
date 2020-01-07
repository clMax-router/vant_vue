<template>
  <div>
    <!-- 这是商品详情页面-->
    <ShopNav />

    <!-- 商品详情轮播图 -->
    <div class="shopImg">
      <van-swipe :autoplay="3000" style="height: 375px;">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 商品信息介绍 -->
    <div class="shopInfo">
      <div class="shopInfoTitle">守望先锋 英雄集结鼠标垫（新版）</div>
      <!-- 商品介绍 -->
      <div class="shopInfoEtc">全新款式，超大版面</div>
      <!-- 商品卖点 -->
      <div class="shopInfoPic">￥98.00</div>
      <!-- 商品价格 -->
    </div>

    <!-- 购物信息 -->
    <div class="goodsInfo">
      <div class="top">
        <div class="ash">选择:</div>
        <div class="bigSize">已选“900*380mm”×7</div>
        <div class="ash">></div>
      </div>
      <div class="bottom">
        <div class="ash">服务:</div>
        <div class="bigSize">已选“900*380mm”×7</div>
        <div class="ash">></div>
      </div>
    </div>

    <!-- 分隔框 -->
    <div class="separate">
      <div class="txt">详情</div>
      <div class="hr"></div>
    </div>

    <!-- 商品详情图片 -->
    <div>
      <div class="img" :style="{backgroundImage:'url('+item+')', backgroundSize:'cover'}" :key="index" v-for="(item,index) in imgInfos" ></div>
    </div>
  </div>
</template>

<script>
import ShopNav from "@/components/nav/shopNav";
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      imgInfos: [
        "https://yanxuan-item.nosdn.127.net/c0593b195cf7fc3b08b28a99286bae65.jpg",
        "https://yanxuan-item.nosdn.127.net/17332e2626353ee730f8dda56cda10c2.jpg",
        "https://yanxuan-item.nosdn.127.net/24dfe7ee054a0273710ebb2739c590e6.jpg",
        "https://yanxuan-item.nosdn.127.net/4b5301ccc507d2bc96b41835903a995c.jpg",
        "https://yanxuan-item.nosdn.127.net/d0c84a81b6a7d21150e2fe1a504b265d.jpg",
        "https://yanxuan-item.nosdn.127.net/8fb39b47b92993d85e65c5a880684e5f.jpg",
        "https://yanxuan-item.nosdn.127.net/0b1db6bfc416f2acfd4b1bbf272ba62f.jpg",
        "https://yanxuan-item.nosdn.127.net/1bcf9de8ffeeff424dd21dbcc18ee3cf.jpg",
        "https://yanxuan-item.nosdn.127.net/cd838479f636b9454f38743efd75d35d.jpg",
        "https://yanxuan-item.nosdn.127.net/afcd785a596e4d57501e787f91c865d6.jpg"
      ]
    };
  },
  components: {
    ShopNav
  }
};
</script>

<style lang="scss" scoped>
.shopImg {
  //  商品详情轮播图
  img {
    height: 375px;
    width: 375px;
  }
}

// 商品信息介绍
.shopInfo {
  width: 100%;
  height: 129px;
  background-color: #fff;
  padding: 15px 17px;
  box-sizing: border-box;
  .shopInfoTitle {
    // 商品介绍
    font-size: 16px;
    color: #333333;
  }
  .shopInfoEtc {
    // 商品卖点
    font-size: 14px;
    color: #949494;
  }
  .shopInfoPic {
    // 商品价格
    font-size: 16px;
    color: #ff0000;
  }
  .shopInfoTitle,
  .shopInfoEtc,
  .shopInfoPic {
    margin-bottom: 20px;
  }
}
// 购物信息
.goodsInfo {
  margin-top: 10px;
  width: 375px;
  height: 100px;
  background-color: #fff;
  margin-bottom: 5px;
  .top,
  .bottom {
    height: 50px;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
  }
  .ash {
    color: #949494;
  }
  .bigSize {
    font-size: 14px;
  }
}
//分隔框
.separate {
  height: 55px;
  width: 100%;
  text-align: center;
  line-height: 55px;
  font-size: 16px;
  color: #666;
  position: relative;
  .txt {
    // 文字
    height: 100%;
    width: 40px;
    margin: 0 auto;
    background-color: rgb(245, 245, 249);
    position: absolute;
    left: 167.5px;
    z-index: 1;
   
  }
  .hr {
    width: 110px;
    height: 2px;
    background-color: #d9d9d9;
    position: absolute;
    top: 27.5px;
    left: 132.5px;
    z-index: 0;
  }
}

.img{
    width: 375px;
    height: 110px;
}
</style>