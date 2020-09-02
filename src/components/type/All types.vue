<template>
  <div class="sidebar">
    <van-tree-select :items="items" :main-active-index.sync="active">
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
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  name: "All types",
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
.sidebar{
  width: 100%;
  height: 100%;
}
</style>
