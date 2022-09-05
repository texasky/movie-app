import axios from 'axios';

import { fetchMovies, updateSearchQuery, openMovie, setMovieOpenToFalse, setMovieOpenToTrue, fetchOpenedMovieData } from './index';

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

const setMovieOpenToFalseExpected = {
    type: 'SET_MOVIE_OPEN_TO_FALSE', payload: false
}

const setMovieOpenToTrueExpected  = {
    type: 'SET_MOVIE_OPEN_TO_TRUE', payload: true
}

const openMovieEspected = {
    type: 'SET_OPEN_MOVIE_ID', payload: 'tt5639360'
}

const silgleMovieObjectExpected = {
    type: 'FETCH_MOVIE_DATA', 
    payload: {
        Title:"Harry Potter and the Sorcerer's Stone",
        Year:"2001",
        Rated:"PG",
        Released:"16 Nov 2001",
        Runtime:"152 min",
        Genre:"Adventure, Family, Fantasy",
        Director:"Chris Columbus",
        Writer:"J.K. Rowling, Steve Kloves",
        Actors:"Daniel Radcliffe, Rupert Grint, Richard Harris",
        Plot:"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        Language:"English, Latin",
        Country:"United Kingdom, United States",
        Awards:"Nominated for 3 Oscars. 17 wins & 69 nominations total",
        Poster:"https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg",
        Ratings:[{Source:"Internet Movie Database",Value:"7.6/10"},{Source:"Rotten Tomatoes",Value:"81%"},{Source:"Metacritic",Value:"65/100"}],
        Metascore:"65","imdbRating":"7.6",
        imdbVotes:"764,377",
        imdbID:"tt0241527",
        Type:"movie",
        DVD:"28 May 2002",
        BoxOffice:"$318,886,962",
        Production:"N/A",
        Website:"N/A",
        Response:"True"
    }
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
        
        expect(dispatch.mock.calls[0][0]).toEqual(setMovieOpenToTrueExpected);
        expect(dispatch.mock.calls[1][0]).toEqual(openMovieEspected);
    })

    it('set open movie state to false', () => {
        const dispatch = jest.fn();

        setMovieOpenToFalse()(dispatch);
        
        expect(dispatch.mock.calls[0][0]).toEqual(setMovieOpenToFalseExpected);
    })

    it('set open movie state to true', () => {
        const dispatch = jest.fn();

        setMovieOpenToTrue()(dispatch);
        
        expect(dispatch.mock.calls[0][0]).toEqual(setMovieOpenToTrueExpected);
    })

    it('fetch single movie data', async () => {
        axios.post = jest.fn(query => {
            return Promise.resolve();
        });

        const dispatch = jest.fn();

        await fetchOpenedMovieData('tt0241527')(dispatch);
        
        expect(dispatch.mock.calls[0][0]).toEqual(silgleMovieObjectExpected);
    })
});