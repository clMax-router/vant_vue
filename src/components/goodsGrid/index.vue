<template>
  <div>
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
          <div class="gird-card" :key="item" v-for="item in 4">
            <div class="grid-hot">炉石传说 经典卡背雨伞</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-container">
        <div class="card-title">
          <div class="left">人气推荐</div>
          <div class="right">更多 ></div>
        </div>
        <div class="card-main">
          <div class="periphery-card">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
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
    .card-main {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .bigGird-card,
      .gird-card {
        border-radius: 4px;
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
        width: 175px;
        margin-bottom: 4px;
        display: flex;
        position: relative;
      }
      .grid-hot {
        width: 100%;
        height: 24px;
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
  .periphery-card {
    width: 100%;
    height: 141px;
    display: flex;
    .left {
      width: 169.54px;
      background-image: url(https://th.wallhaven.cc/small/4l/4lmzg2.jpg);
      background-size: cover;
    }
    .right {
      width: 214px;
      padding: 10px 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 2.4;
      background-color: #e2f6ff;
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