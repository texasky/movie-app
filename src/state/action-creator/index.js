import axios from "axios"

export const fetchMovies = (query) => {
    return async (dispatch) => {
        const url = `http://www.omdbapi.com/?s=${query}&apikey=c6ba1cfc`;
        const response = await axios.get(url);
        const dataSearch = await response.data.Search;
        
        dispatch({
            type: 'UPDATE_MOVIES',
            payload: dataSearch
        })
    };
};

export const updateSearchQuery = (query) => {
    return (dispatch) => dispatch({type: 'UPDATE_SEARCH_QUERY', payload: query})
}

export const openMovie = (movieId) => {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MOVIE_OPEN'})
        dispatch({type: 'SET_OPEN_MOVIE_ID', payload: movieId})
    }
}

export const toggleOpenMovie = () => {
    return (dispatch) => dispatch({type: 'TOGGLE_MOVIE_OPEN'})
}