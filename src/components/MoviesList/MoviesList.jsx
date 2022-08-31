import './MoviesList.css'
import MovieItem from '../MovieItem/MovieItem';

const MoviesList = (props) => {
    console.log(props, 'MoviesListProps')
    return (
        <div className='movies-list'>
            {props.movies.map((movie) => (
                <MovieItem key={movie.imdbID} movie={movie}/>
            ))}
        </div>
    )
}

export default MoviesList;