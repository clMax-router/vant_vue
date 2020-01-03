<template>
    <div class="user">
        <Nav/>
        <div class="head">
            <van-image
                    round
                    width="3rem"
                    height="3rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <span>123</span>
        </div>
        <div class="nav">
            <div class="title">
                <div class="left">我的订单</div>
                <div class="right">全部订单 ></div>
            </div>
            <div>
                <van-grid :column-num="5">
                    <van-grid-item
                            v-for="value in 5"
                            :key="value"
                            icon="photo-o"
                            text="文字"
                    />
                </van-grid>
            </div>
        </div>
        <div class="main">
            <van-cell title="我的优惠券" is-link />
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
                        <van-button type="default">取消</van-button>
                        <van-button style="color: #4aadf8;" type="default">确认</van-button>
                    </div>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
    import Nav from  "@/components/nav/index2"
    export default {
        name: "user",
        components:{
            Nav
        },
        data() {
            return {
                show: false
            }
        },

        methods: {
            showPopup() {
                this.show = true;
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
            background-color: #bcbcbc;
        }
        .nav{
            .title{
                display: flex;
                justify-content: space-between;
                margin: 1.5px 1em 1.5px 1em;
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