<template>
    <div id="app">
        <div class="head">
            <router-link to="/"><span class="h_comic" :class="{seclet: isComicActive}" @click="isComicActive = true,isEnglishActive=false">Comic</span></router-link>
            <router-link to="/english"><span class="h_english" :class="{seclet: isEnglishActive}" @click="isComicActive = false,isEnglishActive=true">English</span></router-link>
            <div class="h_change">
                <div class="h_change_comic" v-show="isComicActive">
                    <span class="comic_back" @click="stepPage(false)">上一页</span>
                    <input type="number" v-model="page"><label @click="jumpPage()">跳页</label>
                    <span class="comic_next" @click="stepPage(true)">下一页</span>
                </div>
                <div class="h_change_eng" v-show="isEnglishActive"><span @click="refreshEnglish()">换一组</span></div>
            </div>
        </div>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data(){
            return {
                isComicActive: true,
                isEnglishActive: false,
                page: 1
            }
        },
        computed: mapState([
            'currentPage'
        ]),
        created (){
            this.page = this.currentPage;
            console.log("home created");
        },
        mounted: function () {
            console.log("home mounted:" + this.currentPage);
            this.getComicList(this);
            this.getEnglishList(this);
        },
        methods:{
            ...mapActions([
                    'getComicList','getEnglishList','updateCurrentPage'
            ]),

            //上一页或下一页
            stepPage(next){
                let page = this.currentPage;
                if (next){
                    page ++;
                }else {
                    page --;
                    if (page <= 0){
                        return false;
                    }
                }
                this.updateCurrentPage(page);
                this.getComicList(this);
                this.page = this.currentPage;
            },

            //输入框输入页数跳页
            jumpPage(){
                if (this.page <=0){
                    return false;
                }
                this.updateCurrentPage(this.page);
                this.getComicList(this);
            },

            //刷新英语页
            refreshEnglish(){
                this.getEnglishList(this);
            }
        }
    }
</script>
<style scoped>
    .head {
        position: absolute;
        width: 7.18rem;
        height: 1.4rem;
        border: 1px solid #ffffff;
        border-radius: 0.1rem;
        left: 0.16rem;
        right: 0.16rem;
        z-index: 5;
    }

    .h_comic,.h_english {
        display: block;
        float: left;
        width: 3.59rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.2rem;
        border-radius: 0.1rem;
    }

    .h_change{
        clear: both;
        width: 100%;
        height: 0.6rem;
        background: #ffffff;
        text-align: center;
    }

    .h_change_comic span{
        font-size: 0.1rem;
        height: 0.6rem;
        line-height: 0.6rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
    }

    .h_change_comic span:active,.h_change_eng span:active,.h_change_comic label:active{
        background: #7f7f7f;
    }

    .h_change_comic input{
        height: 0.4rem;
        width: 0.8rem;
        border: none;
        outline: medium;
        background: #EEEEEE;
        border-radius: 0.1rem;
        text-align: center;
    }

    .h_change_comic label{
        font-size: 0.1rem;
        height: 0.6rem;
        line-height: 0.6rem;
        margin-left: 0.1rem;
    }

    .h_change_eng span{
        font-size: 0.1rem;
        height: 0.6rem;
        line-height: 0.6rem;
    }

    .seclet {
        background: #20a0ff;
    }

    #content{
        position: absolute;
        z-index: 10;
        top: 1.6rem;
        bottom: 1rem;
        overflow: auto;
    }
</style>
