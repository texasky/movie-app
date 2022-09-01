import './App.css';
import { useEffect } from 'react';
import MoviesList from './components/MoviesList/MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './state/action-creator/index'
import MovieHeader from './components/MovieHeader/MovieHeader';
import MoviePreview from './components/MoviePreview/MoviePreview';


const App = () => {
  const dispatch = useDispatch();

  const movies = useSelector(state => state.moviesStore.movies);
  const searchQuery = useSelector(state => state.moviesStore.searchQuery);
  const isMovieOpened = useSelector(state => state.moviesStore.isMovieOpened)

  useEffect(() => {
    dispatch(fetchMovies(searchQuery));
  }, [dispatch, searchQuery])

  return (
    <div className="App">
      <MovieHeader/>
      {isMovieOpened && <MoviePreview/>}
      {(movies && !isMovieOpened) && <MoviesList movies={movies}/>}
    </div>
  );
}

export default App;
