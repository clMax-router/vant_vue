<template>
    <div>
        <Nav/>
        <div class="main">
            <div class="information">
                <span class="">暂无地址!</span>
            </div>
            <van-button type="info" @click="add">新建地址</van-button>
            <van-popup
                    v-model="show"
                    position="bottom"
                    :duration="0"
                    :style="{ height: '100%' }">
                <van-address-edit
                        :area-list="areaList"
                        show-postal
                        show-delete
                        show-set-default
                        show-search-result
                        :search-result="searchResult"
                        :area-columns-placeholder="['请选择', '请选择', '请选择']"
                        @save="onSave"
                        @delete="onDelete"
                        @change-detail="onChangeDetail"
                />
            </van-popup>
        </div>
    </div>
</template>

<script>
    import Nav from  "@/components/nav/index2"
    import areaList from "@/utils/area.js"
    export default {

        name: "address",
        components: {
            Nav
        },
        data() {
            return {
                show:false,
                areaList,
                searchResult: []
            }
        },
        methods: {
            add(){
                this.show = true;
            },
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '1',
                        address: '2'
                    }];
                } else {
                    this.searchResult = [];
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .information{
            margin-top: 150px;
            padding-top: 140px;
            background: url(data:image/png;base64,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)
            no-repeat top;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: initial;
        }
        .van-button{
            margin-top: 230px;
        }
    }
</style>
<style>
    .van-button--danger {
        color: #fff;
        background-color: #4aadf8;
        border: 1px solid #4aadf8;
    }
</style>