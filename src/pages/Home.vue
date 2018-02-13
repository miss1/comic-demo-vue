<template>
    <div id="app">
        <div class="head">
            <router-link to="/"><span class="h_comic" v-bind:class="{seclet: isComicActive}" @click="isComicActive = true,isEnglishActive=false">Comic</span></router-link>
            <router-link to="/english"><span class="h_english" v-bind:class="{seclet: isEnglishActive}" @click="isComicActive = false,isEnglishActive=true">English</span></router-link>
        </div>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isComicActive: true,
                isEnglishActive: false
            }
        }
    }
</script>
<style scoped>
    .head {
        width: 7.18rem;
        height: 0.8rem;
        border: 1px solid #7f7f7f;
        margin: 0.16rem;
    }

    .head span {
        display: block;
        float: left;
        width: 3.59rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.2rem;
    }

    .seclet {
        background: #20a0ff;
    }
</style>
