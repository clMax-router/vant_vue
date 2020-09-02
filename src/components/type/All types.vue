<template>
  <van-tree-select
    height="100%"
    :items="items"
    :main-active-index.sync="active"
  >
    <template #content>
      <van-grid clickable :column-num="3" v-if="active === 0">
        <van-grid-item
          v-for="(item, index) in imageList"
          :icon="item.image"
          :text="item.text"
          :key="index"
        />
      </van-grid>
      <van-grid :column-num="3" v-if="active === 1">
        <van-grid-item
          v-for="value in 9"
          :key="value"
          icon="eye-o"
          text="2"
        />
      </van-grid>
      <van-grid :column-num="3" v-if="active === 2">
        <van-grid-item
          v-for="value in 9"
          :key="value"
          icon="photo-o"
          text="3"
        />
      </van-grid>
      <van-grid :column-num="3" v-if="active === 3">
        <van-grid-item
          v-for="value in 9"
          :key="value"
          icon="photo-o"
          text="4"
        />
      </van-grid>
      <van-grid :column-num="3" v-if="active === 4">
        <van-grid-item
          v-for="value in 9"
          :key="value"
          icon="photo-o"
          text="5"
        />
      </van-grid>
      <van-grid :column-num="3" v-if="active === 5">
        <van-grid-item
          v-for="value in 9"
          :key="value"
          icon="photo-o"
          text="6"
        />
      </van-grid>
      <van-grid :column-num="3" v-if="active === 6">
        <van-grid-item
          v-for="value in 9"
          :key="value"
          icon="photo-o"
          text="7"
        />
      </van-grid>
    </template>
  </van-tree-select>
</template>

<script>
export default {
  name: "allTypes",
  data() {
    return {
      active: 0,
      items: [
        { text: "1" },
        { text: "2" },
        { text: "3" },
        { text: "4" },
        { text: "5" },
        { text: "6" },
        { text: "7" },
      ],
      imageList: [
        { image: require("../../assets/img/img1.jpg"), text: "1" },
        { image: require("../../assets/img/img2.jpg"), text: "1" },
        { image: require("../../assets/img/img3.jpg"), text: "1" },
        { image: require("../../assets/img/img3.jpg"), text: "1" },
        { image: require("../../assets/img/img2.jpg"), text: "1" },
        { image: require("../../assets/img/img1.jpg"), text: "1" },
        { image: require("../../assets/img/img1.jpg"), text: "1" },
        { image: require("../../assets/img/img2.jpg"), text: "1" },
        { image: require("../../assets/img/img3.jpg"), text: "1" },
      ],
    };
  },

  created() {
    var path = this.$route.path;
    this.index = routerArr.indexOf(path);
  },
};
</script>

<style lang="scss" scoped>
.van-sidebar-item--select {
  border-color: #409eff;
}
</style>
