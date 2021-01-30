const initialState = [];
const articleReducer = (state = initialState, action) => {
    switch(action.type){
        case "articles/fetch":
            return action.payload;
        default:
            return state;
    }
};
export default articleReducer;