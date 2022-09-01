import './MoviesList.css'
import MovieItem from '../MovieItem/MovieItem';

const MoviesList = (props) => {
    return (
        <div className='movies-list'>
            {props.movies.map((movie) => (
                <MovieItem key={movie.imdbID} movie={movie}/>
            ))}
        </div>
    )
}

export default MoviesList;