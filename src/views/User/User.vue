<template>
    <div class="user">
        <Nav/>
        <div class="head">
            <van-image
                    fit="cover"
                    round
                    width="3rem"
                    height="3rem"
                    src="https://i.pximg.net/img-master/img/2019/08/31/01/03/10/76541087_p0_master1200.jpg"
                    @click="userinfo"
            />
            <span style="color: #ffffff">MiKu</span>
        </div>
        <div class="nav">
            <div class="title">
                <div class="left">我的订单</div>
                <div class="right" @click="order">全部订单 ></div>
            </div>
                <van-grid :column-num="5" :clickable="true" :border="false">
                    <van-grid-item
                            v-for="value in iconArr"
                            :key="value.txt"
                            :icon="value.icon"
                            :text="value.txt"
                            @click="order"
                    />
                </van-grid>
        </div>
        <div class="main">
            <van-cell title="我的优惠券" is-link value="0张" to="/User/coupon" />
            <van-cell title="我的地址" is-link />
            <van-cell title="我的收藏夹" is-link />
            <van-cell title="账号安全" is-link />
            <van-cell title="联系客服" is-link />
            <van-cell title="意见反馈" is-link />
            <van-cell title="常见问题" is-link />
        </div>
        <div class="footer">
            <van-cell @click="showPopup">退出登录</van-cell>

            <van-popup v-model="show">
                <div class="Popups">
                    <div class="prompt">
                        <span>确认退出登录吗？</span>
                    </div>
                    <div class="select">
                        <van-button type="default" @click="cancel">取消</van-button>
                        <van-button style="color: #4aadf8;" type="default">确认</van-button>
                    </div>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
    import Nav from  "@/components/nav/index2"
    const iconArr = [
        { icon: "pending-payment", txt: "待付款" },
        { icon: "paid", txt: "尾款待支付" },
        { icon: "point-gift-o\n", txt: "待发货" },
        { icon: "logistics", txt: "待收货" },
        { icon: "description", txt: "待评价" },
    ];
    export default {
        name: "user",
        components:{
            Nav
        },
        data() {
            return {
                iconArr,
                show: false,
            }
        },

        methods: {
            showPopup() {
                this.show = true;
            },
            userinfo:function () {
                this.$router.push('/User/UserInfo')
            },
            cancel(){
                this.show = false;
            },
            order:function () {
                this.$router.push('/Shop/Order')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user{

        .head{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.5em 0 1.5em 0;
            background-image: url(https://yanxuan-static.nosdn.127.net/hxm/b2c-h5/p/20150730/static/media/userCenter-banner.6783c997.png);
            background-size: cover;
        }
        .nav{
            .title{
                display: flex;
                justify-content: space-between;
                padding: 1.5px 1em 1.5px 1em;
                background-color: #ffffff;
                .left{
                    font-size: initial;
                    font-weight: bold;
                }
                .right{
                    font-size: initial;
                    font-weight: lighter;
                    color: #969799
                }
            }
        }
        .main{
            margin-top: 20px;
        }
        .footer{
            margin-top: 10px;
            margin-bottom: 60px;
            .van-cell__value--alone{
                text-align: center;
            }
            .van-popup{
                border-radius: 6px;
            }
            .Popups{
                width: 240px;
                height: 150px;
                display: flex;
                flex-direction: column;
                .prompt{
                    width: 240px;
                    height: 120px;
                    font-size: large;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .select{
                    width: 240px;
                    display: flex;
                    justify-content: space-between;
                    .van-button{
                        width: 238px;
                    }
                }
            }
        }
    }
</style>
<style>
    .van-grid-item__text {
        color: #646566;
        font-size: 0.31rem;
        word-wrap: break-word;
    }
    .van-grid-item__icon {
        color: #4aadf8;
    }
</style>