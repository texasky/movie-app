const defaultState = {
    movies: [],
    searchQuery: 'Star Wars',
    isMovieOpened: false,
    openedMovieId: '',
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_MOVIES": 
            return {...state, movies: action.payload}
        case "UPDATE_SEARCH_QUERY": 
            return {...state, searchQuery: action.payload}
        case "TOGGLE_MOVIE_OPEN": 
            return {...state, isMovieOpened: !state.isMovieOpened}
        case "SET_OPEN_MOVIE_ID": 
            return {...state, openedMovieId: action.payload}
        default: return state;
    }
}

export default reducer;