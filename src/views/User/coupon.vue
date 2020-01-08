<template>
    <div>
        <Nav/>
        <van-search
                v-model="value"
                placeholder="请输入优惠券码"
                :show-action="true"
                left-icon=""
        >
            <div slot="action">
                <van-button type="info">兑换</van-button>
            </div>
        </van-search>
        <div class="prompt">
            <div class="point">
                <img style="width: 15px; height: 15px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACpklEQVRIS7WWS0hUcRTGf9+o+QA3FUEPcOGioCAIwlxI0CJsUrzXRZSLjKggEmpVENh7U5sIjcCg18JqM3fEBxK1iZAiiFaRQaCLCovaCGlp98TfcXRm7jgp5N2ex3fO+b5z/lcU+nptPX/wMPYC1RjrZtzFZ+Ajop8ikjTq00JplNcwaGuZ5CIhh4Ei4A8wOpuYWaCqOVuMO5Rxnnp9yc0XBUhYA6IboxJ4TYxOyuijXj+yggdtJZM0ENIGbEeMY7TQrL5Mv2yAwNowbgDjiON4PEKygmM0E0n2Y9wCKhEn8dWZjpkHcJVDDzBCEXGaNBxJ7JK9o4TN+h2x9domphnAcKNrSneSAnAzn2AYI6SImkjywBzRZ4EtwArEB6ALjw4kx0/qcyBTvETEKGej4yQFkLQuQo4iWvD1MKu6edsY8AzjF7ALqEL04MvL8g/sAEY3MW7j6ZgYsA1MMgK8wacma+ZJqyPk+UzF5dTOEd1rFUzzFKMWaMwi1o0x4BWwjRKqRNJOENJJjFY8Pcip5hJGOzHa8HQzx7YP4zHiCr7ac7o+SMh9FycCc8TspoI1ESkGdgFmFHKEZr3IATiEcRdxDV9nIhL+yVfEEwfgyC2mWdUF5ZhpTEmzH2MPwsdXMhKbMLfp0yJhTvNv8VW3aIDArmOcQgzhUYcU5gFwHW9dGkBKzl0YbtuHKMUjrm95C0vYLMBSRhTYPYxWxDl8XS7Y8dyICpGcmyGwfqCCUuqJy+1D/i9hq4CxFMmFZLpoUnIck5YhU3fzpxjNu2iZcYFdxTiN+I6v1QtiRxbtX6cinWmxAJFT4RJkHrsSdtCo93lktxNRA0zgqyNvBwseO+edPtdilGLieUEKcVLwXM+PYRkfnDTIsj6ZaZBlffQz5/wfflv+AikrWAyWwIkAAAAAAElFTkSuQmCC">
                <span @click="showPopup">如何兑换使用优惠券</span>
                <van-popup
                        v-model="show"
                        position="bottom"
                        :duration="0"
                        :style="{ height: '100%' }">
                    <div class="explain">
                        <span>优惠券使用</span>

                        <p>1，单笔订单只能使用1张优惠券，不支持同时使用多张，用券后差额不找零，不退回;</p>
                        <p>2，优惠券（包括新用户券）不能抵扣运费，只能抵扣商品金额，特价商品不可使用优惠券，与其他优惠不同享；</p>
                        <p>3，每张优惠券的使用条件请查看对应优惠券的使用说明；</p>
                        <p>4，请在有效的短期使用优惠券，未使用的优惠券过期后，将自动作废；</p>

                        <span>优惠券无效</span>

                        <p>1，使用优惠券的订单，若产生退货，优惠券均不退回，退款金额按优惠后的小计金额退款；</p>
                        <p>2，参加满赠券活动获得的赠券，发生退货时，若订单中剩余的商品不满足赠券条件，实物赠品需撤退退货并寄回，否则替换中扣减对应金额，客服审核通过退货申请后，所获赠券将会自动失效；</p>
                        <p>3，优惠券重新出售或转让，如经发现并证实的，该券将重新终止处理；</p>
                    </div>
                    <van-button type="default" @click="back">返回</van-button>
                </van-popup>
            </div>
        </div>
        <div class="tab">
            <van-tabs v-model="active"
                      :duration="0.1">
                <van-tab title="可使用">
                    <div class="information">
                        <span class="">优惠券列表还是空的!</span>
                    </div>
                </van-tab>
                <van-tab title="已使用">
                    <div class="information">
                        <span class="">优惠券列表还是空的!</span>
                    </div>
                </van-tab>
                <van-tab title="已失效">
                    <div class="information">
                        <span class="">优惠券列表还是空的!</span>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import Nav from  "@/components/nav/index2"
    export default {
        name: "coupon",
        components: {
            Nav
        },
        data(){
            return{
                value:'',
                active: 0,
                show: false
            }
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            back() {
                this.show = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .van-search .van-cell{
        height: 44px;
        display: flex;
        align-items: center;
    }
    .prompt{
        padding-top: 10px;
        color: #bcbcbc;
        font-size: small;
        .point{
            padding-left: 200px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            .van-popup{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .explain{
                    color: #000000;
                    font-size: revert;
                    font-weight: lighter;
                    padding: 20px 20px 0px 20px;
                    line-height: 25px;
                }
            }
        }
    }
    .tab{
        margin-top: 10px;
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
    }
</style>
<style>
    .van-tabs__line{
        background-color: #4aadf8;
    }
</style>