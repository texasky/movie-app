import { useDispatch, useSelector } from 'react-redux';
import { updateSearchQuery, setMovieOpenToFalse } from '../../state/action-creator/index'
import './MovieSearchBar.css'

const MovieSearchBar = (props) => {
    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.moviesStore.searchQuery);

    const setSearchQuery = (event) => {
        dispatch(updateSearchQuery(event.target.value));
        dispatch(setMovieOpenToFalse());
    }

    return (
        <div className='movie-search-bar'>
            <input 
                id="movie-search-input"
                type="text" 
                placeholder='Type to search' 
                aria-label='search-input' 
                data-testid="movie-search-input"
                value={searchQuery} 
                onChange={(event => setSearchQuery(event))}
            />
        </div>
    )
}

export default MovieSearchBar;