<template>
    <div class="index">
        <div class="photo">
            <img style="height: 100px; width: 100px" src="@/assets/logo.png">
        </div>
        <van-tabs v-model="active">
            <van-tab title="邮箱登录">
                <div class="input">
                    <van-cell-group>
                        <van-field v-model="val1" placeholder="请输入邮箱地址" />
                    </van-cell-group>
                    <van-cell-group>
                        <van-field type="password" v-model="val2" placeholder="请输入密码" />
                    </van-cell-group>
                </div>
            </van-tab>
            <van-tab title="手机号登录">
                <div class="input">
                    <van-cell-group>
                        <van-field v-model="val3" placeholder="请输入手机号" />
                    </van-cell-group>
                    <van-cell-group>
                        <van-field type="password" v-model="val4" placeholder="请输入密码" />
                    </van-cell-group>
                </div>
            </van-tab>
            <div class="button">
                <van-button type="info" to="User/User">登录</van-button>
            </div>
        </van-tabs>
        <div class="footer">
            <p>忘记密码</p>
            <p>邮箱注册</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                val1:"",
                val2:"",
                val3:"",
                val4:"",
                active: 2,
            };
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .index{
        width: 375px;
        height: 667px;
        background-image: url(https://yanxuan-static.nosdn.127.net/hxm/b2c-h5/p/20150730/static/media/login-background.d3a5456b.png);
        .photo{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 50px;
        }
        .input{
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 20px;
            .van-cell-group{
                width: 300px;
                margin: 5px 5px;
            }
        }
        .button{
            display: flex;
            align-items: center;
            flex-direction: column;
            .van-button{
                width: 300px;
                margin: 5px 5px;
            }
        }
        .footer{
            display: flex;
            justify-content: space-between;
            margin: 40px;
            font-size: 12px;
            font-weight: lighter;
            color: #ffffff;
        }
    }
</style>
<style>
   .van-tabs .van-tabs__line{
        position: absolute;
        bottom: 0.4rem;
        left: 0;
        z-index: 1;
        height: 0.08rem;
        background-color: transparent;
        border-radius: 0.08rem;
    }
   .van-tabs{
       border: none;
   }
    .van-tabs .van-tabs__nav{
        background-color: transparent;
    }
   .van-tab__text, .van-tabs{
       color: #ffffff;
   }
</style>