import axios from 'axios';

export const fetchArticles = (articles) => {
    return {
        type: "articles/fetch",
        payload: articles
    };
};

export const fetchArticlesMiddleWare = async (dispatch, getState) => {
    let res = await axios.get('http://localhost:3001/articles');
    var arr = res.data;
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i].id] = arr[i];
      }
    dispatch(fetchArticles(obj));
};