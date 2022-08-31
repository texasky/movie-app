import './App.css';
import { useEffect } from 'react';
import MoviesList from './components/MoviesList/MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovies from './state/action-creator/index'


const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.moviesStore.movies);
  console.log(movies, 'moviesHere')

  useEffect(() => {
    dispatch(fetchMovies('star wars'));
  }, [])

  return (
    <div className="App">
      {movies && <MoviesList movies={movies}/>}
    </div>
  );
}

export default App;
