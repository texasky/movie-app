import reducer from './moviesReducer';

const initialState = {
    movies: [],
    searchQuery: '',
    isMovieOpened: false,
    openedMovieId: '',
    openedMovieData: {}
  };

const simpleMovieObject = {
    Poster: "https://m.media-amazon.com/images/M/MV5BNWQzMDA3YzUtZTFkYS00NGUwLThiZDgtMGM5NjllN2ZiYzIzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYzNDA5NTU@._V1_SX300.jpg",
    Title: "Star Wars: Despecialized Edition Remastered V2.5, Introducing the Sources",
    Type: "movie",
    Year: "2013",
    imdbID: "tt5639360",
    totalResults: "1"
}
  
describe('Movies reducer tests', () => {
    it('returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('update state with a movie', () => {
        expect(reducer(initialState, { type: "UPDATE_MOVIES", payload: [simpleMovieObject] })).toEqual({
            ...initialState,
            movies: [simpleMovieObject]
        });
    });

    it('update search query', () => {
        expect(reducer(initialState, { type: "UPDATE_SEARCH_QUERY", payload: 'harry' })).toEqual({
            ...initialState,
            searchQuery: 'harry'
        });
    });

    it('set movie open state to false', () => {
        expect(reducer(initialState, { type: "SET_MOVIE_OPEN_TO_FALSE", payload: false })).toEqual({
            ...initialState,
            isMovieOpened: false,
        });
    });

    it('set movie open state to true', () => {
        expect(reducer(initialState, { type: "SET_MOVIE_OPEN_TO_TRUE", payload: true })).toEqual({
            ...initialState,
            isMovieOpened: true,
        });
    });

    it('update openMovieId', () => {
        expect(reducer(initialState, { type: "SET_OPEN_MOVIE_ID", payload: "tt5639360" })).toEqual({
            ...initialState,
            openedMovieId: "tt5639360",
        });
    });

    it('update openMovieId', () => {
        expect(reducer(initialState, { type: "FETCH_MOVIE_DATA", payload: simpleMovieObject })).toEqual({
            ...initialState,
            openedMovieData: simpleMovieObject,
        });
    });
});