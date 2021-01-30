const initialState = {
    isLogged: false,
    loggedUser: {}
}
const sessionReducer = (state = initialState, action) => {
    switch(action.type){
        case "sessions/login":
            return {
                isLogged: true,
                loggedUser: action.payload
            };
        case "sessions/logout":
            return {
                ...state,
                isLogged: false,
                loggedUser: {}
            };
        default:
            return state;
    }

};

export default sessionReducer;