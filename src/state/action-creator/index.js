import axios from "axios"

export const fetchMovies = (query) => {
    return async (dispatch) => {
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=c6ba1cfc`);
        const dataSearch = await response.data.Search;
        
        dispatch({
            type: "UPDATE_MOVIES",
            payload: dataSearch
        })
    };
};

export const updateSearchQuery = (query) => {
    return (dispatch) => dispatch({type: "UPDATE_SEARCH_QUERY", payload: query})
}