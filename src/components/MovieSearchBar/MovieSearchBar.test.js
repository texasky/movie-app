import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './../../state/store'
import MovieSearchBar from './MovieSearchBar';

test('Movie search bar component tests', () => {
    const utils = render(<Provider store={store}><MovieSearchBar /></Provider>);
    const input = utils.getByTestId('movie-search-input');

    expect(input).toBeInTheDocument();

    fireEvent.change(input, {target: {value: 'Star Wars'}})
    expect(input.value).toBe('Star Wars')

    fireEvent.change(input, {target: {value: '123'}})
    expect(input.value).toBe('123')

    fireEvent.change(input, {target: {value: ''}})
    expect(input.value).toBe('')
});

test('Movie search bar component matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><MovieSearchBar /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});