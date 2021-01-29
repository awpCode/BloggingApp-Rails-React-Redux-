import axios from 'axios';
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