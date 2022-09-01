import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import './MoviePreview.css'

const MoviePreview = (props) => {
    const moviesData = useSelector(state => state.moviesStore.movies);
    const openedMovieId = useSelector(state => state.moviesStore.openedMovieId);
    const openedMovieData = moviesData.filter(mov => mov.imdbID === openedMovieId)[0];

    return (
        <div className='movie-preview'>
            <BackButton/>
            <div className='movie-preview-card'>
                <img src={openedMovieData.Poster} alt={openedMovieData.Title}/>
                <div className='movie-preview-info'>
                    <span>Title: {openedMovieData.Title}</span>
                    <span>Year: {openedMovieData.Year}</span>
                    <span>Type: {openedMovieData.Type}</span>
                </div>
            </div>
        </div>
    )
}

export default MoviePreview;