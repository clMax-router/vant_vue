<template>
    <div>
        <Nav/>
        <div class="main">
            <van-cell title="当前账号" value="456456123" />
            <van-cell title="修改密码" is-link />
            <van-cell title="绑定手机号码" is-link @click="modify" />
            <van-popup
                    v-model="show"
                    position="bottom"
                    :duration="0"
                    :style="{ height: '100%' }">
                <van-cell-group>
                    <van-field
                            v-model="username"
                            label="手机号"
                            placeholder="请输入手机号"
                    />
                    <van-field
                            v-model="sms"
                            center
                            clearable
                            label="短信验证码"
                            placeholder="请输入短信验证码"
                    >
                        <van-button slot="button" size="small" plain type="info">发送验证码</van-button>
                    </van-field>
                </van-cell-group>
                <div class="button">
                    <van-button type="default" @click="back">返回</van-button>
                    <van-button type="info" @click="Toast">完成</van-button>
                </div>
            </van-popup>
            <div class="back">
                <van-button type="default" to="/User/User">返回</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from  "@/components/nav/index2"
    export default {
        name: "Account security",
        components: {
            Nav
        },
        data(){
            return{
                show:false,
                username:''
            }
        },
        methods: {
            modify(){
                this.show = true;
            },
            back(){
                this.show = false;
            },
            Toast(){
                this.$toast({
                    message: "请输入手机号!",
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main{
        .van-cell{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 55px;
            margin-bottom: 10px;
        }
        .van-popup{
            background: #f5f5f9;
            .button{
                margin-top: 504px;
                display: flex;
                justify-content: space-around;
                flex-direction: row;
                .van-button{
                    width: 50%;
                }
            }
        }
        .back{
            margin-top: 349px;
            .van-button{
                width: 100%;
                border: 1px #bcbcbc solid;
            }
        }
    }
</style>