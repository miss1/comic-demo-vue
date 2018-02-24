/**
 * Created by yangliling on 2018/2/23.
 */
import Vue from 'vue'

import '../style/config.css'
import loadingImg from '../assets/arror.png'
import Loading from '../plugins/loading'

Vue.use(Loading, loadingImg);

export default{
    //获取更新漫画列表
    getComicList({ commit, state },_this){
        let params = {
            page: state.currentPage,
            showapi_appid: state.showapiAppid,
            showapi_test_draft: false,
            type: "/category/weimanhua/kbmh",
            showapi_sign: state.showapiSign
        };
        _this.$loading_show();
        Vue.http.post("https://route.showapi.com/958-1", params).then(function (res) {
            _this.$loading_hide();
            const response = res.body;
            if (response.showapi_res_code == 0) {
                console.log(response.showapi_res_body);
                commit('UPDATE_COMICLIST', response.showapi_res_body.pagebean.contentlist);
            } else {
                alert("接口请求错误：" + response.showapi_res_error);
            }
        });
    },

    //获取更新英语列表
    getEnglishList({ commit, state },_this){
        let params = {
            count: "10",
            showapi_appid: state.showapiAppid,
            showapi_test_draft: false,
            showapi_sign: state.showapiSign
        };
        _this.$loading_show();
        Vue.http.post("https://route.showapi.com/1211-1", params).then(function (res) {
            _this.$loading_hide();
            console.log(res);
            const response = res.body;
            if (response.showapi_res_code == 0) {
                commit('UPDATE_ENGLISHLIST', response.showapi_res_body.data);
            } else {
                alert("接口请求错误：" + response.showapi_res_error);
            }
        });
    },

    //更新当前漫画页
    updateCurrentPage({ commit }, page){
        commit('UPDATE_PAGES', page);
    }
}