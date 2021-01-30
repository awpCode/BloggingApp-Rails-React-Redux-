import axios from 'axios';

export const fetchArticles = (articles) => {
    return {
        type: "articles/fetch",
        payload: articles
    };
};

export const fetchArticlesMiddleWare = async (dispatch, getState) => {
    let res = await axios.get('http://localhost:3001/articles');
    dispatch(fetchArticles(res.data));
};