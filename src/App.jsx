import './App.css';
import { useEffect } from 'react';
import MoviesList from './components/MoviesList/MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './state/action-creator/index'
import MovieHeader from './components/MovieHeader/MovieHeader';


const App = () => {
  const dispatch = useDispatch();

  const movies = useSelector(state => state.moviesStore.movies);
  const searchQuery = useSelector(state => state.moviesStore.searchQuery);

  useEffect(() => {
    dispatch(fetchMovies(searchQuery));
  }, [dispatch, searchQuery])

  return (
    <div className="App">
      <MovieHeader/>
      {movies && <MoviesList movies={movies}/>}
    </div>
  );
}

export default App;
