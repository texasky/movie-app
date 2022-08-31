import axios from "axios"

const fetchMovies = (query) => {
    return async (dispatch) => {
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=c6ba1cfc`);
        const dataSearch = await response.data.Search;
        
        dispatch({
            type: "UPDATE_MOVIES",
            payload: dataSearch
        })
    };
};

export default fetchMovies;