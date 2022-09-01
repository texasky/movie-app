import MovieAppLogo from '../MovieAppLogo/MovieAppLogo';
import MovieSearchBar from '../MovieSearchBar/MovieSearchBar';
import './MovieHeader.css';

const MovieHeader = (props) => {

    return (
        <div className='movie-header'>
            <MovieAppLogo/>
            <MovieSearchBar/>
        </div>
    )
}

export default MovieHeader;