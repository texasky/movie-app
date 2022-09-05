import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MoviePreview from './MoviePreview';
import { Provider } from 'react-redux';
import store from './../../state/store';
import { BrowserRouter as Router } from 'react-router-dom';

test('Movi preview component tests', () => {
    const utils = render(<Provider store={store}><Router><MoviePreview /></Router></Provider>);

    const movieHeader = utils.getByTestId('movie-preview');

    expect(movieHeader).toBeInTheDocument();
});

test('Movi preview component matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Router><MoviePreview /></Router></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});