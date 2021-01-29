const initialState = {
    isLogged: false,
    loggedUserId: null
}
const sessionReducer = (state = initialState, action) => {
    switch(action.type){
        case "sessions/login":
            return {
                isLogged: true,
                loggedUserId: action.payload
            };
        case "sessions/logout":
            return {
                ...state,
                isLogged: false,
                loggedUserId: null
            };
        default:
            return state;
    }

};

export default sessionReducer;