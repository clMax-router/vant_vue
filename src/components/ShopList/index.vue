<template>
  <!-- 购物车 -->
  <div>
    <div class="card">
      <div class="shopList" v-if="shopList.length">
        <!-- 删除购物车按钮 -->
        <div class="del" @click="showPopup">删除</div>
        <!-- <van-button v-model="show" closeable>
          <div>
            <h2>确认删除?</h2>
            <van-button type="default">取消</van-button>
            <van-button type="danger">确定</van-button>
          </div>
        </van-button>-->
        <!-- 商品 -->
        <div class="shop" :key="item.id" v-for="item in shopList">
          <!-- 单选框 -->
          <div class="shopFlag">
            <input type="checkbox" v-model="item.selection" />
          </div>
          <!-- 图片 -->
          <div class="shopImg">
            <img :src="item.image" />
          </div>
          <!-- 商品信息 -->
          <div class="shopInfo">
            <div class="detailedInfo">{{item.detailedInfo}}</div>
            <div class="info">{{item.info}}</div>
            <div class="btnAndSpan">
              <span>￥{{item.pic}}</span>
              <van-stepper v-model="item.number" :max="99" />
            </div>
          </div>
        </div>
      </div>
      <!-- 当购物车为空时显示的页面 -->
      <div class="noShop" v-else>
        <img src="../../../public/购物车/shop.png" />
        <p>购物车还是空的</p>
      </div>
    </div>
    <div style="height:124px"></div>
    <!-- 占位div -->
    <!-- 总价 -->
    <div class="total">
      <div class="info">
        <div class="infoCheckbox">
          <input type="checkbox" v-model="isSelectionAll" />
        </div>
        <div class="infoSelect">已选({{number}})</div>
        <div class="infoPic">￥ {{totalPic}}</div>
        <div class="infoBtn">
          <van-button type="info" size="large">下单</van-button>
        </div>
      </div>
      <hr style="border:1px #e7e7e7 solid;padding:0;" />
    </div>
  </div>
</template>

<script>
import {Dialog} from 'vant'
export default { 
  name: "shop",
  data() {
    return {
      shopList: [
        {
          id: 1,
          image:
            "https://yanxuan-item.nosdn.127.net/abe1cbd870e6788978fa56a4f033db39.png",
          detailedInfo: "守望先锋 D.Va可动人偶 手办模型",
          info: "D.Va",
          pic: 472.0,
          number: 1,
          selection: true
        },
        {
          id: 2,
          image:
            "https://yanxuan-item.nosdn.127.net/3dd5c5495b4c03effb776d88e2f7ab36.jpg",
          detailedInfo: "《魔兽争霸III：重制版》典藏版实体礼包",
          info: "礼盒",
          pic: 472.0,
          number: 1,
          selection: true
        },
        {
          id: 3,
          image:
            "https://yanxuan-item.nosdn.127.net/3dd5c5495b4c03effb776d88e2f7ab36.jpg",
          detailedInfo: "《魔兽争霸III：重制版》典藏版实体礼包",
          info: "礼盒",
          pic: 472.0,
          number: 1,
          selection: true
        },
        {
          id: 4,
          image:
            "https://yanxuan-item.nosdn.127.net/3dd5c5495b4c03effb776d88e2f7ab36.jpg",
          detailedInfo: "《魔兽争霸III：重制版》典藏版实体礼包",
          info: "礼盒",
          pic: 472.0,
          number: 1,
          selection: true
        },
        {
          id: 5,
          image:
            "https://yanxuan-item.nosdn.127.net/3dd5c5495b4c03effb776d88e2f7ab36.jpg",
          detailedInfo: "《魔兽争霸III：重制版》典藏版实体礼包",
          info: "礼盒",
          pic: 472.0,
          number: 1,
          selection: true
        }
      ]
    };
  },
  methods: {
    // 操作确认删除遮罩 显示或隐藏
    showPopup() {
      Dialog.confirm({
        title: "删除",
        message: "确认删除已选商品？"
      })
        .then(() => {
          // on confirm
          this.delShop()
        })
        .catch(() => {
          // on cancel
        });
    },

    // 删除已选商品
    delShop(){
      this.shopList = this.shopList.filter(item => {
        if(!item.selection){
          return item
        }
      })
    }
  },
  computed: {
    // 已选商品个数
    number() {
      let num = 0;
      this.shopList.find(item => {
        if (item.selection) {
          num++;
        }
      });
      return num;
    },

    // 商品总价
    totalPic() {
      let pic = 0;
      this.shopList.find(item => {
        if (item.selection) {
          pic += item.pic * item.number;
        }
      });
      return pic;
    },

    // 是否全选
    isSelectionAll: {
      get() {
        if ( (!this.shopList.length) || this.shopList.filter(item => !item.selection).length) {
          return false;
        } else {
          return true;
        }
      },
      set(val) {
        this.shopList = this.shopList.map(item => {
          item.selection = val;
          return item;
        });
        // return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding-right: 0;
  padding-left: 0;
  // 容器
  .shopList {
    // 删除购物车商品按钮样式
    .del {
      display: inline-block;
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 999;
      color: #fff;
      font-size: 18px;
    }

    // 商品list
    .shop {
      background-color: #fff;
      border-bottom: #e7e7e7;
      // 商品所处的div
      height: 133px;
      display: flex;
      // 商品单选框
      .shopFlag {
        width: 47px;
        text-align: center;
        line-height: 133px;
      }

      // 商品图片
      .shopImg {
        display: flex;
        align-items: center;
        height: 100%;
        width: 85px;
        img {
          width: 83px;
          height: 83px;
          border: 1px#e7e7e7 solid;
        }
      }

      // 商品详细信息
      .shopInfo {
        padding-left: 10px;
        padding-right: 10px;
        width: 226.67px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 1.5;
        .detailedInfo {
          font-size: 14px;
          color: #505050;
        }
        .info {
          font-size: 12px;
          color: #bcbcbc;
        }
        span {
          color: #dd0303;
          font-size: 12px;
        }
        .btnAndSpan {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }

  .noShop {
    text-align: center;
    margin-top: 61.8px;
    p {
      font-size: 13px;
      color: #333333;
    }
  }
}
.total {
  position: fixed;
  width: 100%;
  background-color: #fff;
  bottom: 48px;
  // 总价
  .info {
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    .infoCheckbox,
    .infoSelect,
    .infoBtn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .infoCheckbox {
      // 单选框
      height: 100%;
      width: 47px;
    }
    .infoSelect {
      // 已选数
      height: 100%;
      width: 73px;
      font-size: 14px;
    }
    .infoPic {
      // 总价
      width: 150px;
      height: 100%;
      font-size: 16px;
      color: #dd0303;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 15px;
    }
    .infoBtn {
      // 下单按钮
      width: 105px;
      height: 100%;
      padding-top: 10px;
    }
  }
}
</style>