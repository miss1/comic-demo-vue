// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router/index'
import store from './store/'
import './config/rem'

import './style/config.css'
import loadingImg from './assets/arror.png'
import Loading from './plugins/loading'

Vue.config.productionTip = false;

Vue.use(Loading, loadingImg);

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
