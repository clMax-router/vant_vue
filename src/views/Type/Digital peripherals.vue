<template>
    <div class="home">
        <ZNav/>
        <div class="main">
            <All/>
            <div class="footer">
                <img src="@/assets/img1.jpg" height="100" width="90%"/>
                <div class="text">———— 数码外设 ————</div>
                <van-grid :column-num="3">
                    <van-grid-item
                            v-for="value in 10"
                            :key="value"
                            icon="photo-o"
                    />
                </van-grid>
            </div>
        </div>
    </div>
</template>

<script>
    import ZNav from "@/components/nav";
    import All from "@/components/type/All types"
    export default {
        name: "Home life",
        components: {
            ZNav,
            All
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        height: 450px;
        color: #4aadf8;
        text-align: center;
        font-size: small;
        background: #ffffff;
        padding-top: 10px;
        .main{
            display: flex;
            justify-content: space-between;
            .footer{

            }
        }
        .text{
            margin-top: 20px;
        }
        .van-grid{
            margin-top: 20px;
        }
    }
</style>