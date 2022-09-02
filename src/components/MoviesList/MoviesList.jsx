import './MoviesList.css'
import MovieItem from '../MovieItem/MovieItem';

const MoviesList = (props) => {
    return (
        <div className='movies-list movies-list-wrapper'>
            {props.movies.map((movie) => (
                <MovieItem key={movie.imdbID} movie={movie}/>
            ))}
        </div>
    )
}

export default MoviesList;