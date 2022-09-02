import MovieAppLogo from '../MovieAppLogo/MovieAppLogo';
import MovieSearchBar from '../MovieSearchBar/MovieSearchBar';
import './MovieHeader.css';

const MovieHeader = (props) => {

    return (
        <div className='movie-header'>
            <div className='movie-header-wrapper'>
                <MovieAppLogo/>
                <MovieSearchBar/>
            </div>
        </div>
    )
}

export default MovieHeader;