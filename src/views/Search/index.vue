<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <div class="left">
        <img src="@/assets/logo.png" />
      </div>
      <div class="center">
        <van-search :autofocus="true" placeholder="请输入搜索关键词" v-model="value" />
      </div>
      <div class="right">
        <a href="#" @click.prevent="returnPage">取消</a>
      </div>
    </div>
    <!-- 搜索历史 -->
    <div class="card">
      <div class="searchHistory">
        <div class="txt">搜索历史</div>
        <div class="icon" v-if="historyTxt.length">
          <van-icon name="delete" />
        </div>
      </div>
      <!-- 搜索历史 文字 -->
      <div class="historyTxt">
        <div :key="item.id" v-for="item in historyTxt">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      historyTxt: [
        { content: "akun", id: 1 },
        { content: "akunsb", id: 2 },
        { content: "akun", id: 3 },
        { content: "akunsb", id: 4 },
        { content: "akun", id: 5 },
        { content: "akunsb", id: 6 }
      ]
    };
  },
  methods:{
    returnPage(){
      this.$router.back()
    }
  }
};
</script>

<style lang="scss" scoped>
/* 搜索框 */
.search {
  display: flex;
  height: 40px;
  align-items: center;
  background-image: url(https://yanxuan-static.nosdn.127.net/hxm/b2c-h5/p/20150730/static/media/home-bg.ba0dfe5d.png);
  background-size: cover;
  .left,
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    height: 100%;
    width: 48px;

    img {
      width: 26px;
      height: 26px;
    }
  }
  /* 中间的搜索框 */
  .center {
    height: 30px;
    .van-search {
      padding: 0;
      width: 276px;
      border-radius: 4px;
      .van-cell {
        padding: 0;
      }
    }
  }
  /* 取消的a标签的样式 */
  .right {
    font-size: 18px;
    margin-left: 10px;
    a {
      color: #4aadf8;
      font-size: 16px;
    }
  }
}

/* 搜索历史 */
.card {
  /* 容器 */
  .searchHistory {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .txt {
      font-size: 14px;
    }
    .icon {
      font-size: 20px;
      color: #b8b8b8;
    }
  }

  .historyTxt {
    // 历史文字
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    div {
      height: 36px;
      background-color: #ebebeb;
      font-size: 16px;
      line-height: 36px;
      padding: 0 14px;
      margin-right: 10px;
      margin-bottom: 10px; 
    }
  }
}
</style>