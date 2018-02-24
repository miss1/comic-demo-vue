/**
 * 自己写的vue loading插件
 * Created by yangliling on 2018/2/13.
 */
var Loading = {};
Loading.install = function (Vue, options) {
    let loadingTpl = Vue.extend({
        data: function () {
            return{
                show: false,
                imgurl: options
            }
        },
        template: '<img :src="imgurl" v-show="show" class="loading">'
    });
    let $vm = new loadingTpl();
    let tpl = $vm.$mount().$el;
    document.body.appendChild(tpl);
    Vue.prototype.$loading_show = () => {
        $vm.show = true;
    };
    Vue.prototype.$loading_hide = () => {
        $vm.show = false;
    }
};
module.exports = Loading;