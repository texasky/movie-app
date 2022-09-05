import BackButton from '../BackButton/BackButton';
import { fetchOpenedMovieData } from '../../state/action-creator';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './MoviePreview.css'

const MoviePreview = (props) => {
    const dispatch = useDispatch();
    const openedMovieData = useSelector(state => state.moviesStore.openedMovieData);

    const params = useParams();

    const isTheSameMovieInStore = params.id === openedMovieData.imdbID;

    useEffect(() => {
        dispatch(fetchOpenedMovieData(params.id))
    }, [dispatch, params])

    return (
        <div className='movie-preview' data-testid="movie-preview">
            {openedMovieData && isTheSameMovieInStore && (
                <>
                    <BackButton/>
                    <div className='movie-preview-card'>
                        <img src={openedMovieData.Poster} alt={openedMovieData.Title}/>
                        <div className='movie-preview-info'>
                            <span>Title: {openedMovieData.Title}</span>
                            <span>Year: {openedMovieData.Year}</span>
                            <span>Plot: {openedMovieData.Plot}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default MoviePreview;