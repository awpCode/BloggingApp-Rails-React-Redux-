const initialState = [];
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "users/fetch":
            return action.payload;
        default:
            return state;
    }
};
export default userReducer;