<template>
    <div class="sidebar">
        <van-sidebar v-model="index">
            <van-sidebar-item to="/type/Game Category" title="游戏分类"/>
            <van-sidebar-item to="/type/Home life" title="居家生活"/>
            <van-sidebar-item to="/type/Hand-made model" title="手办模型"/>
            <van-sidebar-item to="/type/Digital peripherals" title="数码外设"/>
            <van-sidebar-item to="/type/Accessories pendant" title="配饰挂件"/>
            <van-sidebar-item to="/type/Clothing" title="服装服饰"/>
            <van-sidebar-item to="/type/Book stationery" title="图书文具"/>
        </van-sidebar>
    </div>
</template>

<script>
    var routerArr = ["/type/Game Category","/type/Home life","/type/Hand-made model","/type/Digital peripherals","/type/Accessories pendant","/type/Clothing","/type/Book stationery"];
    export default {
        name: "All types",
        data() {
            return {
                index: 0
            };
        },
        created() {
            var path = this.$route.path;
            this.index = routerArr.indexOf(path);
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar{
        width: 110px;
        .van-sidebar{
            width: 110px;
            .van-sidebar-item--select{
                color: #4aadf8;
                border-color: #4aadf8;
            }
        }
    }
</style>