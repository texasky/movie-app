import './App.css';
import { useState } from 'react';
import MoviesList from './components/MoviesList/MoviesList';

function App() {
  const [movies, setMovies] = useState([
    {
      "Title": "Brian Eno: 1971-1977 - The Man Who Fell to Earth",
      "Year": "2011",
      "imdbID": "tt2296338",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTgzNjI4MjY5NV5BMl5BanBnXkFtZTgwOTgwNzA2MDE@._V1_SX300.jpg"
  },
  {
      "Title": "The Who: At Kilburn 1977",
      "Year": "2009",
      "imdbID": "tt1509275",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4MTM3NmQtZjE0YS00NDNlLTgwYWEtMGUyMmE4YWNjNTgwXkEyXkFqcGdeQXVyMTEzMDkwMTE@._V1_SX300.jpg"
  },
  {
      "Title": "Rainer Werner Fassbinder, 1977",
      "Year": "1977",
      "imdbID": "tt0126297",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTk5YmEyYjctN2NmOS00MTlhLWEzOGEtYWE4MjE2ODJhYzJiXkEyXkFqcGdeQXVyMjIzMTk4ODg@._V1_SX300.jpg"
  },
  {
      "Title": "You Weren't There: A History of Chicago Punk 1977 to 1984",
      "Year": "2007",
      "imdbID": "tt1340142",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0Njk5Njc0Ml5BMl5BanBnXkFtZTcwMjc4NjYxNA@@._V1_SX300.jpg"
  },
  {
      "Title": "Turning Point 1977",
      "Year": "2009",
      "imdbID": "tt1562900",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzExNDA5NDMtZDgzOC00ZGNlLTkxYzctNmMxYmIyZGE4OTc3XkEyXkFqcGdeQXVyMjExMzEyNTM@._V1_SX300.jpg"
  },
  {
      "Title": "Rainbow: Live in Munich 1977",
      "Year": "2006",
      "imdbID": "tt1857839",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGFhZTE5MGItODhkMi00YTMwLTg1ZDQtNTg0MjZkN2RjYTA2XkEyXkFqcGdeQXVyNzQ5MzY0NjM@._V1_SX300.jpg"
  },
  {
      "Title": "1977",
      "Year": "2007",
      "imdbID": "tt1084943",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzllOThiODQtZTI1ZC00ZDJlLWJiOWItMTY5ZjQwNWQ0YWYwXkEyXkFqcGdeQXVyMjQ0MzgwNDc@._V1_SX300.jpg"
  },
  {
      "Title": "No Island: The Palmers Kidnapping of 1977",
      "Year": "2006",
      "imdbID": "tt0819369",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk1OTY2MzExN15BMl5BanBnXkFtZTcwMDIwMjc3OA@@._V1_SX300.jpg"
  },
  {
      "Title": "Eagles: Live at the Capital Centre (March 1977)",
      "Year": "2013",
      "imdbID": "tt11585296",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmJlNTU4ZTgtZGVjNC00NzZhLWIyZWUtYmFjZGM1YWQ5MzU3XkEyXkFqcGdeQXVyMTA5NzgwNzM1._V1_SX300.jpg"
  },
  {
      "Title": "Utopia: A Retrospective 1977-1984",
      "Year": "1985",
      "imdbID": "tt0304879",
      "Type": "movie",
      "Poster": "N/A"
  }
  ])

  return (
    <div className="App">
      <MoviesList movies={movies}/>
    </div>
  );
}

export default App;
