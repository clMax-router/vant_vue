<template>
    <div class="game">
        <ZNav/>
        <div class="main">
            <All/>
            <div class="footer">
                <div class="title">———— 游戏分类 ————</div>
                <van-grid :column-num="3">
                    <van-grid-item
                            v-for="value in 9"
                            :key="value"
                            icon="photo-o"
                            text="文字"
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
        name: "Game Category",
        components: {
            ZNav,
            All
        }
    }
</script>

<style lang="scss" scoped>
        .game{
        color: #4aadf8;
        text-align: center;
        font-size: small;
        background: #ffffff;
        .main{
            display: flex;
            justify-content: space-between;
            .footer{
                .title{
                    margin-top: 30px;
                }
                .van-grid{
                    margin-top: 20px;
                }
            }
        }
    }
</style>