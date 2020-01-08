<template>
    <div>
        <Nav/>
        <div class="order">
            <van-tabs v-model="active"
                      :duration="0.1"
                      :swipe-threshold="5"
                      :ellipsis="false">
                <van-tab title="全部">
                    <div class="information">
                        <span class="">还没有任何订单!</span>
                    </div>
                </van-tab>
                <van-tab title="待付款">
                    <div class="information">
                        <span class="">还没有任何订单!</span>
                    </div>
                </van-tab>
                <van-tab title="尾款待支付">
                    <div class="information">
                        <span class="">还没有任何订单!</span>
                    </div>
                </van-tab>
                <van-tab title="待发货">
                    <div class="information">
                        <span class="">还没有任何订单!</span>
                    </div>
                </van-tab>
                <van-tab title="待收货">
                    <div class="information">
                        <span class="">还没有任何订单!</span>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import Nav from  "@/components/nav/index2"
    export default {
        name: "Order",
        components:{
            Nav
        },
        data() {
            return {
                active: 0
            };
        }
    }
</script>

<style lang="scss" scoped>
    .information{
         margin-top: 50px;
         padding-top: 140px;
         background: url(data:image/png;base64,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)
         no-repeat top;
         display: flex;
         align-items: center;
         flex-direction: column;
         font-size: initial;
     }
</style>
<style>
    .van-tabs__line{
        background-color: #4aadf8;
    }
</style>