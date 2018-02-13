<template>
    <div class="comic">
        <div class="comic_item">
            <ul>
                <router-link :to="'/comicdetail/'+getParams(item.id)" tag="li" v-for="item in comic_item_list" :key="item.id">
                    <img src="../assets/comi_icon.png">
                    <p>{{ item.title }}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Comic',
        data () {
            return {
                comic_item_list: []
            }
        },
        created (){
            this.getComicList();
        },
        mounted: function () {
            //this.getComicList();
        },
        methods: {
            //调接口获取漫画列表
            getComicList: function () {
                var _this = this;
                let params = {
                    page: "1",
                    showapi_appid: "33013",
                    showapi_test_draft: false,
                    type: "/category/weimanhua/kbmh",
                    showapi_sign: "3d1eec5870f24ffc9c0270852e7b69ff"
                };
                _this.$loading_show();
                _this.$http.post("https://route.showapi.com/958-1", params).then(function (res) {
                    _this.$loading_hide();
                    const response = res.body;
                    if (response.showapi_res_code == 0) {
                        console.log(response.showapi_res_body);
                        _this.comic_item_list = response.showapi_res_body.pagebean.contentlist;
                    } else {
                        alert("接口请求错误：" + response.showapi_res_error);
                    }
                });
                console.log("comic start");
            },
            //切割漫画列表id（传入/weimanhua/kbmh/138655.html，返回138655.html）
            getParams: function (itemId) {
                var arr = itemId.split('/');
                return arr[arr.length - 1];
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        margin-left: 0.08rem;
        margin-right: 0.08rem;
    }

    li {
        float: left;
        width: 3.51rem;
        height: 3.51rem;
        background: #ffffff;
        margin-left: 0.08rem;
        margin-right: 0.08rem;
        margin-bottom: 0.16rem;
        border-radius: 0.1rem;
        text-align: center;
    }

    .comic_item img {
        width: 1.64rem;
        height: 1.27rem;
        margin-top: 0.4rem;
    }

    .comic_item p {
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        font-size: 0.28rem;
    }
</style>
