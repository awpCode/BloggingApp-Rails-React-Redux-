import axios from 'axios';

export const fetchCategories = (categories) => {
    return {
        type: "categories/fetch",
        payload: categories
    };
};

export const fetchCategoriesMiddleWare = async (dispatch, getState) => {
    let res = await axios.get('http://localhost:3001/categories');

    //normalizing data
    var arr = res.data;
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i].id] = arr[i];
      }
    dispatch(fetchCategories(obj));
};