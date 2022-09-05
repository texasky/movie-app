import { useDispatch } from 'react-redux';
import { openMovie } from '../../state/action-creator/index';
import { Link } from "react-router-dom";
import './MovieItem.css'

const MovieItem = (props) => {
    const dispatch = useDispatch();

    const openMovieHandler = () => {
        dispatch(openMovie(props.movie?.imdbID))
    }

    return (
        <Link to={`/moviepreview/${props.movie?.imdbID}`}>
            <div className='movie-item' data-testid="movie-item" onClick={openMovieHandler}>
                <img src={props.movie?.Poster} alt="movie"></img>
                <div className='movie-item-title'>{props.movie?.Title}</div>
            </div>
        </Link>
    )
}

export default MovieItem;