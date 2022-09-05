const defaultState = {
    movies: [],
    searchQuery: '',
    isMovieOpened: false,
    openedMovieId: '',
    openedMovieData: {}
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_MOVIES": 
            return {...state, movies: action.payload}
        case "UPDATE_SEARCH_QUERY": 
            return {...state, searchQuery: action.payload}
        case "SET_MOVIE_OPEN_TO_FALSE": 
            return {...state, isMovieOpened: false}
        case "SET_MOVIE_OPEN_TO_TRUE": 
            return {...state, isMovieOpened: true}
        case "SET_OPEN_MOVIE_ID": 
            return {...state, openedMovieId: action.payload}
        case "FETCH_MOVIE_DATA": 
            return {...state, openedMovieData: action.payload}
        default: return state;
    }
}

export default reducer;