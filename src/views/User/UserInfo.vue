<template>
    <div class="userinfo">
        <Nav/>
        <div>
            <van-cell title="头像" />
            <van-cell title="用户ID" value="465131456" />
            <van-cell title="账号" value="465131456" />
            <van-cell title="昵称" is-link value="MiKu" @click="nickname" />
            <van-popup v-model="two"
                       position="bottom"
                       :style="{ height: '100%' }">
                <div class="input">
                    <van-cell-group>
                        <van-field v-model="value" placeholder="请输入昵称" />
                    </van-cell-group>
                </div>
                <div class="save">
                    <van-button type="info" @click="determine">确定</van-button>
                </div>
            </van-popup>
            <van-cell title="性别" is-link value="请选择" @click="showPopup1" />
            <van-popup style="background-color: transparent" v-model="one"
                       position="bottom"
                       :style="{ height: '25%' }">
                <div class="button">
                    <van-button type="default">男</van-button>
                    <van-button type="default">女</van-button>
                </div>
                <div class="button1">
                    <van-button type="default" @click="showPopup2">取消</van-button>
                </div>
            </van-popup>
            <van-cell title="出生日期" is-link @click="showPopup"/>
            <van-popup v-model="show"
                       position="bottom"
                       :style="{ height: '40%' }">
                <van-datetime-picker
                        v-model="currentDate"
                        type="date"
                        :min-date="minDate"
                        :max-date="maxDate"
                />
            </van-popup>
            <van-cell title="手机号码" is-link @click="phone"/>
            <van-popup v-model="three"
                       position="bottom"
                       :style="{ height: '100%' }">
                <div class="account">
                    <van-cell title="当前账号" value="455564851"/>
                    <van-cell title="修改密码" is-link />
                    <van-cell title="绑定手机号码" is-link />
                </div>
                <van-button type="default" @click="back">返回</van-button>
            </van-popup>
        </div>
    </div>
</template>

<script>
    import Nav from  "@/components/nav/index2"
    export default {
        name: "UserInfo",
        components: {
            Nav
        },
        data() {
            return {
                show: false,
                one: false,
                two:false,
                three:false,
                minDate: new Date(1900, 0, 1),
                maxDate: new Date(2100, 10, 1),
                currentDate: new Date()
            };
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            showPopup1() {
                this.one = true;
            },
            showPopup2() {
                this.one = false;
            },
            nickname(){
                this.two = true;
            },
            determine(){
                this.two = false
            },
            phone(){
                this.three = true;
            },
            back(){
                this.three = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
        .van-popup{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(245,245,245);
            .input{

                .van-cell-group{

                    .van-field{

                    }
                }
            }
            .save{

                .van-button {

                    min-width: 100%;
                }
            }
        }
        .button{
            display: flex;
            align-items: center;
            flex-direction: column;
            .van-button{
                width: 330px;
                height: 50px;
                color: #4aadf8;
                border-radius: 7px ;
            }
        }
        .button1{
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 10px;
            .van-button{
                width: 330px;
                height: 50px;
                border-radius: 7px;
                color: #4aadf8;
            }
        }
        .account{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            .van-cell{
                margin-bottom: 10px;
            }
        }
</style>