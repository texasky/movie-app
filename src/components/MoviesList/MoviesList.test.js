import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './../../state/store'
import MoviesList from './MoviesList';
import { BrowserRouter as Router } from 'react-router-dom';

const movies = [{
        Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        Title: "Harry Potter and the Deathly Hallows: Part 2",
        Type: "movie",
        Year: "2011",
        imdbID: "tt1201607"
    },{
        Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        Title: "Harry Potter and the Deathly Hallows: Part 3",
        Type: "movie",
        Year: "2011",
        imdbID: "tt12016072"
    }];

test('Movies list component tests', () => {
    const utils = render(<Provider store={store}><Router><MoviesList movies={movies}/></Router></Provider>);
    const input = utils.getByTestId('movie-list');
    const movieItems = utils.getAllByTestId('movie-item');

    expect(movieItems.length).toBe(2);
    expect(input).toBeInTheDocument();
});

test('Movies list component matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Router><MoviesList movies={movies}/></Router></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});