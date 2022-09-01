import { useDispatch, useSelector } from 'react-redux';
import { updateSearchQuery } from '../../state/action-creator/index'

const MovieSearchBar = (props) => {
    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.moviesStore.searchQuery);

    const setSearchQuery = (event) => {
        dispatch(updateSearchQuery(event.target.value));
    }

    return (
        <input type="text" placeholder='Type to search' value={searchQuery} onChange={(event => setSearchQuery(event))}></input>
    )
}

export default MovieSearchBar;