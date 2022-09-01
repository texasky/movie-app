import './MovieItem.css'

const MovieItem = (props) => {
    return (
        <div className='movie-item'>
            <img src={props.movie.Poster} alt="movie"></img>
        </div>
    )
}

export default MovieItem;