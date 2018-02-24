/**
 * Created by yangliling on 2018/2/23.
 */
const UPDATE_COMICLIST = 'UPDATE_COMICLIST';
const UPDATE_ENGLISHLIST = 'UPDATE_ENGLISHLIST';
const UPDATE_PAGES = 'UPDATE_PAGES';

export default{
    //更新漫画列表
    [UPDATE_COMICLIST](state, comics){
        state.comicItemList = comics;
    },
    
    //更新英语列表
    [UPDATE_ENGLISHLIST](state, englishs){
        state.englishList = englishs;
    },
    
    //更新当前漫画页
    [UPDATE_PAGES](state, page){
        state.currentPage = page;
    }
}