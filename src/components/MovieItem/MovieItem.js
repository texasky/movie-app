const MovieItem = (props) => {
    return (
        <div>
            <img src={props.movie.Poster} alt="movie"></img>
        </div>
    )
}

export default MovieItem;