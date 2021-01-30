import axios from 'axios';

export const fetchCategories = (categories) => {
    return {
        type: "categories/fetch",
        payload: categories
    };
};

export const fetchCategoriesMiddleWare = async (dispatch, getState) => {
    let res = await axios.get('http://localhost:3001/categories');
    dispatch(fetchCategories(res.data));
};