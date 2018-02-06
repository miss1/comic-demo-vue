import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/pages/Home'
import Comic from '@/pages/Comic'
import English from '@/pages/English'
import ComicDetail from '@/pages/ComicDetail'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/comic_demo/',      //项目不是部署在服务器的根目录时需要设置这一项，值为将要部署到的服务器文件夹路径（同时config/index.js中build下面assetsPublicPath也要设置成这个路径）
    routes: [
        {
            path: '/',
            name: 'App',
            component: App, //顶层路由，对应index.html
            children: [  //二级路由。对应App.vue
                //地址为空时跳转home页面
                {
                    path: '/',
                    name: 'Home',
                    component: Home,
                    children: [{
                        path: '/',    //地址为空时跳转漫画页
                        name: 'Comic',
                        component: Comic
                    }, {
                        path: '/english',      //英语列表页
                        name: 'English',
                        component: English
                    }]
                },
                //漫画详情页
                {
                    path: '/comicdetail/:id',
                    name: 'ComicDetail',
                    component: ComicDetail
                }
            ]
        }
    ]
})
