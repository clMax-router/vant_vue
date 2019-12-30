<template>
  <div>
    <!-- 人气推荐 -->
    <div class="card">
      <div class="card-container">
        <div class="card-title">
          <div class="left">人气推荐</div>
          <div class="right">更多 ></div>
        </div>
        <div class="card-main">
          <div class="bigGird-card">
            <div class="grid-hot">炉石传说 经典卡背雨伞</div>
          </div>
          <div
            :class="[{'gird-card':true},{'card-magrin':item%2 != 0}]"
            :key="item"
            v-for="item in 4"
          >
            <div class="grid-hot">炉石传说 经典卡背雨伞</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 最新周边 -->
    <div class="card">
      <div class="card-container">
        <div class="card-title">
          <div class="left">最新周边</div>
          <div class="right">更多 ></div>
        </div>
        <div class="card-main">
          <div class="periphery-card">
            <div class="periphery-card-son">
              <div class="left"></div>
              <div class="right">
                <div class="logo">
                  <img
                    src="http://nos.netease.com/dmall-mc/6.png6a25ae6f-ed3d-45d9-93bf-919852bae5c2?download=6.png&Signature=p78SCGm13YR8DNJTAHXlX6zy8HfkcZwei8lRaoips0w%3D&Expires=1577496420&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"
                  />
                </div>
                <div class="info">守望先锋 源氏飞镖冰箱贴</div>
                <div class="blow">是时候展现英雄真正实力</div>
                <div class="pic">￥ 57</div>
              </div>
              
            </div>
            <div class="periphery-card-rotation">
              <!-- 商品走马灯 -->
              <van-swipe :loop="false" :width="defaulteWidth" :show-indicators="false">
                <van-swipe-item :key="index" v-for="(item,index) in 3">
                  <!-- 商品个件 -->
                  <div class="goods">
                    <div class="goods_img">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/3da7c5729d3a55f49b8d18f7a145e5f3.png"
                      />
                      <div v-if="false">已售罄</div>
                    </div>
                    <div class="goods_info">守望先锋</div>
                    <div class="goods_pic">￥ 29.00</div>
                    <div class="goods_discount">
                      <del>￥ 29.00</del>
                    </div>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 游戏周边 -->
    <div class="card">
      <div class="card-container">
        <div class="card-main">
          <div class="periphery-card">
            <div class="periphery-card-equally" :style="{backgroundImage:'url(http://nos.netease.com/dmall-mc/%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BBbanner750x370.jpg4bb96710-874b-40b1-8b2f-0f6cff4dd631?download=%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BBbanner750x370.jpg&Signature=wkmTt%2BmM%2FmuthYuAolCPHkCs1EGh3lIKonq347dimWI%3D&Expires=1577584938&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84)'}"></div>
            <div class="periphery-card-rotation">
              <!-- 商品走马灯 -->
              <van-swipe :loop="false" :width="defaulteWidth" :show-indicators="false">
                <van-swipe-item :key="index" v-for="(item,index) in 3">
                  <!-- 商品个件 -->
                  <div class="goods">
                    <div class="goods_img">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/3da7c5729d3a55f49b8d18f7a145e5f3.png"
                      />
                      <div v-if="false">已售罄</div>
                    </div>
                    <div class="goods_info">守望先锋</div>
                    <div class="goods_pic">￥ 29.00</div>
                    <div class="goods_discount">
                      <del>￥ 29.00</del>
                    </div>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 乐高积木 -->
    <div class="card">
      <div class="card-container">
        <div class="card-main">
          <div class="periphery-card">
            <div class="periphery-card-equally" :style="{backgroundImage:'url(http://nos.netease.com/dmall-mc/%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BBbanner750x370.jpg4bb96710-874b-40b1-8b2f-0f6cff4dd631?download=%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BBbanner750x370.jpg&Signature=wkmTt%2BmM%2FmuthYuAolCPHkCs1EGh3lIKonq347dimWI%3D&Expires=1577584938&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84)'}"></div>
            <div class="periphery-card-rotation">
              <!-- 商品走马灯 -->
              <van-swipe :loop="false" :width="defaulteWidth" :show-indicators="false">
                <van-swipe-item :key="index" v-for="(item,index) in 3">
                  <!-- 商品个件 -->
                  <div class="goods">
                    <div class="goods_img">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/3da7c5729d3a55f49b8d18f7a145e5f3.png"
                      />
                      <div v-if="false">已售罄</div>
                    </div>
                    <div class="goods_info">守望先锋</div>
                    <div class="goods_pic">￥ 29.00</div>
                    <div class="goods_discount">
                      <del>￥ 29.00</del>
                    </div>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 鼠标垫，手机壳 -->
    <div class="card">
      <div class="card-container">
        <div class="card-main">
          <div class="periphery-card">
            <div class="periphery-card-equally" :style="{backgroundImage:'url(http://nos.netease.com/dmall-mc/%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BBbanner750x370.jpg4bb96710-874b-40b1-8b2f-0f6cff4dd631?download=%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BBbanner750x370.jpg&Signature=wkmTt%2BmM%2FmuthYuAolCPHkCs1EGh3lIKonq347dimWI%3D&Expires=1577584938&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84)'}"></div>
            <div class="periphery-card-rotation">
              <!-- 商品走马灯 -->
              <van-swipe :loop="false" :width="defaulteWidth" :show-indicators="false">
                <van-swipe-item :key="index" v-for="(item,index) in 3">
                  <!-- 商品个件 -->
                  <div class="goods">
                    <div class="goods_img">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/3da7c5729d3a55f49b8d18f7a145e5f3.png"
                      />
                      <div v-if="false">已售罄</div>
                    </div>
                    <div class="goods_info">守望先锋</div>
                    <div class="goods_pic">￥ 29.00</div>
                    <div class="goods_discount">
                      <del>￥ 29.00</del>
                    </div>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 手机挂饰 -->
    <div class="card">
      <div class="card-container">
        <div class="card-main">
          <div class="periphery-card" >
            <div class="periphery-card-equally" :style="{backgroundImage:'url(http://nos.netease.com/dmall-mc/%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BBbanner750x370.jpg4bb96710-874b-40b1-8b2f-0f6cff4dd631?download=%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BBbanner750x370.jpg&Signature=wkmTt%2BmM%2FmuthYuAolCPHkCs1EGh3lIKonq347dimWI%3D&Expires=1577584938&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84)'}"></div>
            <div class="periphery-card-rotation">
              <!-- 商品走马灯 -->
              <van-swipe :loop="false" :width="defaulteWidth" :show-indicators="false">
                <van-swipe-item :key="index" v-for="(item,index) in 3">
                  <!-- 商品个件 -->
                  <div class="goods">
                    <div class="goods_img">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/3da7c5729d3a55f49b8d18f7a145e5f3.png"
                      />
                      <div v-if="false">已售罄</div>
                    </div>
                    <div class="goods_info">守望先锋</div>
                    <div class="goods_pic">￥ 29.00</div>
                    <div class="goods_discount">
                      <del>￥ 29.00</del>
                    </div>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 衣服 -->
    <div class="card">
      <div class="card-container">
        <div class="card-main">
          <div class="periphery-card">
            <div class="periphery-card-equally" :style="{backgroundImage:'url(http://nos.netease.com/dmall-mc/%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BBbanner750x370.jpg4bb96710-874b-40b1-8b2f-0f6cff4dd631?download=%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BBbanner750x370.jpg&Signature=wkmTt%2BmM%2FmuthYuAolCPHkCs1EGh3lIKonq347dimWI%3D&Expires=1577584938&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84)'}"></div>
            <div class="periphery-card-rotation">
              <!-- 商品走马灯 -->
              <van-swipe :loop="false" :width="defaulteWidth" :show-indicators="false">
                <van-swipe-item :key="index" v-for="(item,index) in 3">
                  <!-- 商品个件 -->
                  <div class="goods">
                    <div class="goods_img">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/3da7c5729d3a55f49b8d18f7a145e5f3.png"
                      />
                      <div v-if="false">已售罄</div>
                    </div>
                    <div class="goods_info">守望先锋</div>
                    <div class="goods_pic">￥ 29.00</div>
                    <div class="goods_discount">
                      <del>￥ 29.00</del>
                    </div>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 书 -->
    <div class="card">
      <div class="card-container">
        <div class="card-main">
          <div class="periphery-card">
            <div class="periphery-card-equally" :style="{backgroundImage:'url(http://nos.netease.com/dmall-mc/%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BBbanner750x370.jpg4bb96710-874b-40b1-8b2f-0f6cff4dd631?download=%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BBbanner750x370.jpg&Signature=wkmTt%2BmM%2FmuthYuAolCPHkCs1EGh3lIKonq347dimWI%3D&Expires=1577584938&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84)'}"></div>
            <div class="periphery-card-rotation">
              <!-- 商品走马灯 -->
              <van-swipe :loop="false" :width="defaulteWidth" :show-indicators="false">
                <van-swipe-item :key="index" v-for="(item,index) in 3">
                  <!-- 商品个件 -->
                  <div class="goods">
                    <div class="goods_img">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/3da7c5729d3a55f49b8d18f7a145e5f3.png"
                      />
                      <div v-if="false">已售罄</div>
                    </div>
                    <div class="goods_info">守望先锋</div>
                    <div class="goods_pic">￥ 29.00</div>
                    <div class="goods_discount">
                      <del>￥ 29.00</del>
                    </div>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaulteWidth: 100
    };
  },
  mounted() {
    this.windowChange();
  },
  computed: {
    autoWidth() {
      // 获取html的fontSize

      var htmlDom = document.querySelector("html");
      console.log(htmlDom);
      return 1;
    }
  },
  methods: {
    windowChange() {
      var htmlDom = document.querySelector("html");
      // 监听窗口宽度变化
      window.onresize = () => {
        htmlDom = document.querySelector("html");

        // 默认的字体大小为37.5
        // 默认的宽度为200
        // 计算比例
        let fz = parseFloat(htmlDom.style.fontSize);
        // 默认的比例
        let defaulteBl = 200 / 37.5;
        let width = fz * defaulteBl;
        this.defaulteWidth = width;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  margin-top: 10px;
  background-color: #fff;
  padding: 18px 10px;
  .card-container {
    font-size: 16px;
    .card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        font-size: 14px;
      }
    }
    /* 容器 */
    .card-main {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      .periphery-card {
        /* 游戏周边*/
        .periphery-card-equally {
          height: 158px;
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
          background-size: cover;
        }
        width: 100%;
      }
      .bigGird-card,
      .gird-card {
        border-radius: 4px;
      }
      .card-magrin {
        margin-right: 9.51px;
      }
      .bigGird-card {
        width: 100%;
        height: 141px;
        position: relative;
        background-size: cover;
        background-image: url(https://th.wallhaven.cc/small/4l/4lmzg2.jpg);
      }
      .gird-card {
        margin-top: 4px;
        background-size: cover;
        background-image: url(https://th.wallhaven.cc/small/4l/4lmzg2.jpg);
        height: 110px;
        width: 172.75px;
        margin-bottom: 4px;
        display: flex;
        position: relative;
      }
      .grid-hot {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 24px;
        background-color: rgba($color: #000000, $alpha: 0.5);
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 24px;
      }
    }
  }
  /*  */
  .periphery-card-rotation {
    /* 设置走马灯样式 */
    width: 100% !important;
    margin-top: 10px;

    /* 轮播图 */
    .goods {
      display: flex;
      flex-direction: column;
      align-content: center;
      line-height: 1.2;
      div {
        text-align: center;
      }
      .goods_pic,
      .goods_discount {
        font-size: 14px;
      }
      .goods_pic {
        color: #dd0303;
      }
      .goods_discount {
        color: #bcbcbc;
      }

      .goods_img {
        background-color: #f4f4f4;
        height: 67.79px;
        width: 75.5px;
        position: relative;
        margin: auto;
        div{
          width: 100%;
          height: 23px;
          position: absolute;
          bottom: 0;
          left: 0;
          text-align: center;
          background-color:  rgba($color: #000000, $alpha: 0.5);
          font-size: 12px;
          color: #fff;
          line-height: 23px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .carousel-item {
      width: 104px;
      display: flex;
      background-color: green;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin: auto;
      // .carousel-item{
      //   height:
      // }
    }
  }

  .periphery-card-son {
    width: 100%;
    height: 141px;
    display: flex;
    .left {
      width: 141px;
      background-image: url(https://th.wallhaven.cc/small/4l/4lmzg2.jpg);
      background-size: cover;
      border-radius: 4px 0 0 4px;
      overflow: hidden;
    }
    .right {
      box-sizing: border-box;
      width: 214px;
      padding: 10px 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 2.4;
      background-color: #e2f6ff;
      border-radius: 0 4px 4px 0;
      overflow: hidden;
      .logo {
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .info {
        font-size: 14px;
        color: #333;
      }
      .blow {
        font-size: 12px;
        color: #737374;
      }
      .pic {
        font-size: 14px;
        color: #dd0303;
      }
    }
  }
}
</style>