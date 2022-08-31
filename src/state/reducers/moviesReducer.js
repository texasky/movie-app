const defaultState = [];

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_MOVIES": 
            return {...state, movies: action.payload}
        default: return state;
    }
}

export default reducer;