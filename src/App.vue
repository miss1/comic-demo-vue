<template>
    <div id="app">
        <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import pageFooter from './components/pageFooter'
    export default {
        components: {
            pageFooter
        }
    }
</script>

<style>
    body {
        background: #EEEEEE;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
