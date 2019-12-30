<template>
    <div>
        <ZNav/>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item title="游戏分类" />
            <van-sidebar-item title="居家生活" />
            <van-sidebar-item title="手办模型" />
            <van-sidebar-item title="数码外设" />
            <van-sidebar-item title="配饰挂件" />
            <van-sidebar-item title="服装服饰" />
            <van-sidebar-item title="图书文具" />
        </van-sidebar>
    </div>
</template>

<script>
import ZNav from "@/components/nav";
export default {
    name:'type',
    components:{
        ZNav
    },
    data() {
        return {
            activeKey: 0
        };
    }
}
</script>

<style lang="scss" scoped>
    .van-sidebar-item--select{
        color: #4aadf8;
        border-color: #4aadf8;
    }
</style>