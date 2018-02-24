<template>
    <div>
        <div class="head">
            <div class="head-img" @click="$router.go(-1)"><img src="../assets/back.png"></div>
            <div class="head-center">
                <p class="title">黑白漫画-{{title}}</p>
                <p class="time">update: {{time}}</p>
            </div>
        </div>
        <div class="content">
            <ul>
                <li v-for="item in imgList">
                    <img :src="item">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default{
        data() {
            return{
                title: '',
                time: '',
                imgList: []
            }
        },
        computed: mapState([
            'showapiAppid','showapiSign'
        ]),
        mounted: function () {
            this.getComicDetail();
        },
        methods: {
            //通过上一页传过来的参数调接口获取漫画详情
            getComicDetail: function () {
                console.log(this.$route.params.id);
                var _this = this;
                let params = {
                    id: "/weimanhua/kbmh/" + _this.$route.params.id,
                    showapi_appid: _this.showapiAppid,
                    showapi_test_draft: false,
                    showapi_sign: _this.showapiSign
                };
                _this.$loading_show();
                _this.$http.post("https://route.showapi.com/958-2", params).then(function (res) {
                    _this.$loading_hide();
                    const response = res.body;
                    if (response.showapi_res_code == 0) {
                        const item = response.showapi_res_body.item;
                        _this.title = item.title;
                        _this.time = item.time;
                        _this.imgList = item.imgList
                    } else {
                        alert("接口请求错误：" + response.showapi_res_error);
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .head{
        position: absolute;
        width: 100%;
        height: 1rem;
        background: #2e2e2e;
    }
    .head-img{
        float: left;
    }
    .head-img img{
        width: 0.8rem;
        height: 0.8rem;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
    }
    .head-center{
        width: 6.6rem;
        text-align: center;
    }
    .head p{
        color: #F0F0F0;
    }
    .title{
        margin: 0;
        font-size: 0.22rem;
        padding-top: 0.25rem;
    }
    .time{
        font-size: 0.16rem;
        margin: 0;
        padding: 0;
    }
    .content{
        position: absolute;
        top: 1rem;
        bottom: 1rem;
        overflow: auto;
    }
    li{
        text-align: center;
    }

    @media screen and (max-width: 600px){
        .content img{
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>