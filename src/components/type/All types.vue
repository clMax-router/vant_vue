<template>
    <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
      <template #content>
        <van-grid :column-num="3" v-if="active === 0">
          <van-grid-item
            v-for="value in 9"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>
        <van-grid :column-num="3" v-if="active === 1">
          <van-grid-item
            v-for="value in 9"
            :key="value"
            icon="photo-o"
            text="数字"
          />
        </van-grid>
        <van-grid :column-num="3" v-if="active === 2">
          <van-grid-item
            v-for="value in 9"
            :key="value"
            icon="photo-o"
            text="1"
          />
        </van-grid>
        <van-grid :column-num="3" v-if="active === 3">
          <van-grid-item
            v-for="value in 9"
            :key="value"
            icon="photo-o"
            text="2"
          />
        </van-grid>
        <van-grid :column-num="3" v-if="active === 4">
          <van-grid-item
            v-for="value in 9"
            :key="value"
            icon="photo-o"
            text="3"
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
        items: [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }],
    };
  },

  created() {
    var path = this.$route.path;
    this.index = routerArr.indexOf(path);
  },
};
</script>

<style lang="scss" scoped>
.van-sidebar-item--select{
    border-color:#409eff;
}
</style>
