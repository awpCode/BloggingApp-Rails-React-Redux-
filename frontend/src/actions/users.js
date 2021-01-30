import axios from 'axios';

export const fetchUsers = (users) => {
    return {
        type: "users/fetch",
        payload: users
    };
};

export const createUserMiddleWare = obj => async (dispatch, getState) => {
    let res = null;
    return new Promise(async(resolve,reject) => {
        try{
            res = await axios.post('http://localhost:3001/users',obj);
        }
        catch(err){
            reject(err.response.data.error);
        }
        if(res)
            resolve(res.data);
    });
};
export const fetchUsersMiddleWare = async (dispatch, getState) => {
    let res = await axios.get('http://localhost:3001/users');
    var arr = res.data;
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i].id] = arr[i];
      }
    dispatch(fetchUsers(obj));
};