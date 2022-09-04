import './App.css';
import { useEffect } from 'react';
import MoviesList from './components/MoviesList/MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './state/action-creator/index'
import MovieHeader from './components/MovieHeader/MovieHeader';
import MoviePreview from './components/MoviePreview/MoviePreview';
import EmptyComponent from './components/EmptyComponent/EmptyComponent';


const App = () => {
  const dispatch = useDispatch();

  const movies = useSelector(state => state.moviesStore.movies);
  const searchQuery = useSelector(state => state.moviesStore.searchQuery);
  const isMovieOpened = useSelector(state => state.moviesStore.isMovieOpened)

  let emptyComponentText;

  if (!movies && !searchQuery) {
    emptyComponentText = 'Type to search a movie'
  } else if (!movies && searchQuery.length < 3) {
    emptyComponentText = 'Enter at least 3 letters to search'
  } else if (!movies && searchQuery) {
    emptyComponentText = 'Sorry, nothing found'
  }

  useEffect(() => {
    dispatch(fetchMovies(searchQuery));
  }, [dispatch, searchQuery])

  return (
    <div className="App">
      <MovieHeader/>
      {emptyComponentText && <EmptyComponent text={emptyComponentText}/>}
      {isMovieOpened && <MoviePreview/>}
      {(movies && !isMovieOpened) && <MoviesList movies={movies}/>}
    </div>
  );
}

export default App;
