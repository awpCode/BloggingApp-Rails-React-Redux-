import axios from 'axios';
export const loginUser = (id) => {
    return {
        type: 'sessions/login',
        payload: id
    };

};
export const logoutUser = () => {
    return {
        type: 'sessions/logout'
    };

};
export const loginMiddleWare = (obj) => async (dispatch, getState) => {

    return new Promise(async (resolve,reject) => {
        let res =  null;
        try{
            res = await axios.post('http://localhost:3001/login',obj);
        }
        catch(err){
            reject(err.response.data.error);
        }
        if(res)
            resolve(res.data);
    });

};

export const autoLoginMiddleWare = async (dispatch, getState) => {
    if (localStorage.getItem("token") === null) {
        //doNothing
      }
    else{
        let res = null;
        try{
            res = await axios.post('http://localhost:3001/auto_login',{},{headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
        }
        catch(err){

        }
        if(res)
           dispatch(loginUser(res.data.id));
    }
};