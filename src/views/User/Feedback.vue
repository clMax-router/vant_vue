<template>
    <div>
        <Nav/>
        <van-cell title="反馈类型" is-link value="" />
        <van-cell-group>
            <van-field
                    v-model="message"
                    rows="2"
                    autosize
                    type="textarea"
                    maxlength="500"
                    placeholder="请输入留言"
                    show-word-limit
            />
        </van-cell-group>
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
        <div class="submit">
            <van-button disabled type="default">提交</van-button>
        </div>
    </div>
</template>

<script>
    import Nav from  "@/components/nav/index2"
    export default {
        name: "Feedback",//意见反馈
        components: {
            Nav
        },
        data(){
            return{
                message:'',
                username:'',
                sms:''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .submit{
        margin-top: 306px;
        .van-button{
            width: 100%;
        }
    }
</style>