<template>
    <div class="english">
        <ul>
            <li v-for="item in data">
                <span class="span_english">{{ item.english }}</span>
                <span class="span_chinese">{{ item.chinese }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data: []
            }
        },
        created(){
            //this.getEnglishList();
        },
        mounted: function () {
            this.getEnglishList();
        },
        methods:{
            //调接口获取英语语录列表
            getEnglishList: function () {
                var _this = this;
                let params = {
                    count: "10",
                    showapi_appid: "33013",
                    showapi_test_draft: false,
                    showapi_sign: "3d1eec5870f24ffc9c0270852e7b69ff"
                };
                _this.$http.post("https://route.showapi.com/1211-1", params).then(function (res) {
                    console.log(res);
                    const response = res.body;
                    if (response.showapi_res_code == 0) {
                        _this.data = response.showapi_res_body.data;
                    } else {
                        alert("接口请求错误：" + response.showapi_res_error);
                    }
                });

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul{
        margin-left: 0.16rem;
        margin-right: 0.16rem;
        margin-bottom: 0.2rem;
    }
    li{
        width: 100%;
        background: #ffffff;
        border-radius: 0.1rem;
        margin-top: 0.2rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
    }
    span{
        display: block;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
    }
    .span_english{
        margin-bottom: 0.2rem;
        font-size: 0.32rem;
    }

    .span_chinese{
        font-size: 0.24rem;
        color: #7f7f7f;
    }
</style>
