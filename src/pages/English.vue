<template>
    <div class="english">
        <ul>
            <li v-for="item in englishList">
                <span class="span_english">{{ item.english }}</span>
                <span class="span_chinese">{{ item.chinese }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: mapState([
            'englishList'
        ])
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
