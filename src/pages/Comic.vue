<template>
    <div class="comic">
        <div class="comic_item">
            <ul>
                <router-link :to="'/comicdetail/'+getParams(item.id)" tag="li" v-for="item in comicItemList" :key="item.id">
                    <img src="../assets/comi_icon.png">
                    <p>{{ item.title }}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'Comic',
        computed: mapState([
            'comicItemList'
        ]),
        methods: {
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
