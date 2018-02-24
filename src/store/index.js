/**
 * Created by yangliling on 2018/2/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

const state = {
    showapiAppid: "33013",
    showapiSign: "3d1eec5870f24ffc9c0270852e7b69ff",
    comicItemList: [],
    englishList: [],
    currentPage: 1
};

export default new Vuex.Store({
    state,
    actions,
    mutations
})