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

export const deleteArticleMiddleWare = (id) => async (dispatch, getState) => {
    let res = await axios.delete(`http://localhost:3001/articles/${id}`,{headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
    dispatch(fetchArticlesMiddleWare);
};

export const createArticleMiddleWare = (obj) => async (dispatch, getState) => {
    let res = null;
    return new Promise(async(resolve,reject) => {
        try{
            res = await axios.post('http://localhost:3001/articles',{title: obj.title, description: obj.description},{headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
        }
        catch(err){
            reject(err.response.data.error);
        }
        if(res)
            resolve('Success');
    });
};

export const updateArticleMiddleWare = (obj, id) => async (dispatch, getState) => {
    let res = null;
    return new Promise(async(resolve,reject) => {
        try{
            res = await axios.patch(`http://localhost:3001/articles/${id}`,{title: obj.title, description: obj.description},{headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
        }
        catch(err){
            reject(err.response.data.error);
        }
        if(res)
            resolve('Success');
    });
};