import axios from 'axios';

import { fetchMovies, updateSearchQuery, openMovie, toggleOpenMovie } from './index';

const updateMoviesExpected = { 
    type: 'UPDATE_MOVIES', payload: [{
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWQzMDA3YzUtZTFkYS00NGUwLThiZDgtMGM5NjllN2ZiYzIzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYzNDA5NTU@._V1_SX300.jpg",
    "Title": "Star Wars: Despecialized Edition Remastered V2.5, Introducing the Sources",
    "Type": "movie",
    "Year": "2013",
    "imdbID": "tt5639360",
    }] 
}

const updateSearchQueryExpected = {
    type: 'UPDATE_SEARCH_QUERY', payload: 'abc'
}

const toggleMovieOpenExpected = {
    type: 'TOGGLE_MOVIE_OPEN'
}

const openMovieEspected = {
    type: 'SET_OPEN_MOVIE_ID', payload: 'tt5639360'
}

describe('Action creators test', () => {
    it('fetchMovies successful', async () => {
        axios.post = jest.fn(query => {
            return Promise.resolve();
        });
        
        const dispatch = jest.fn();

        await fetchMovies('star wars 5')(dispatch);

        expect(dispatch.mock.calls[0][0]).toEqual(updateMoviesExpected);
    });

    it('update search query', () => {
        const dispatch = jest.fn();

        updateSearchQuery('abc')(dispatch);
        expect(dispatch.mock.calls[0][0]).toEqual(updateSearchQueryExpected);
    })

    it('open movie', () => {
        const dispatch = jest.fn();

        openMovie('tt5639360')(dispatch);
        
        expect(dispatch.mock.calls[0][0]).toEqual(toggleMovieOpenExpected);
        expect(dispatch.mock.calls[1][0]).toEqual(openMovieEspected);
    })

    it('toggle open movie', () => {
        const dispatch = jest.fn();

        toggleOpenMovie()(dispatch);
        
        expect(dispatch.mock.calls[0][0]).toEqual(toggleMovieOpenExpected);
    })
});