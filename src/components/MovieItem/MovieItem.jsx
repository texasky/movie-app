import { useDispatch } from 'react-redux';
import { openMovie } from '../../state/action-creator/index'
import './MovieItem.css'

const MovieItem = (props) => {
    const dispatch = useDispatch();

    const openMovieHandler = () => {
        dispatch(openMovie(props.movie.imdbID))
    }

    return (
        <div className='movie-item' onClick={openMovieHandler}>
            <img src={props.movie.Poster} alt="movie"></img>
        </div>
    )
}

export default MovieItem;