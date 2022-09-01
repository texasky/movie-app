const defaultState = {
    movies: [],
    searchQuery: 'Star Wars'
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_MOVIES": 
            return {...state, movies: action.payload}
        case "UPDATE_SEARCH_QUERY": 
            return {...state, searchQuery: action.payload}
        default: return state;
    }
}

export default reducer;