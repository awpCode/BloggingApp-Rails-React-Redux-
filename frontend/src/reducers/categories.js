const initialState = {};
const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case "categories/fetch":
            return action.payload;
        default:
            return state;
    }
};
export default categoryReducer;