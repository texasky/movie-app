import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MovieItem from './MovieItem';
import { Provider } from 'react-redux';
import store from './../../state/store'

test('Movie item component tests', () => {
    const clickFn = jest.fn();
    const utils = render(<Provider store={store}><MovieItem onClick={clickFn()}/></Provider>);

    const movieComponent = utils.getByTestId('movie-item');
    fireEvent.click(movieComponent)

    expect(clickFn).toBeCalled();
});

test('Movie item component matches snapshot', () => {
    const clickFn = jest.fn();
    const tree = renderer.create(<Provider store={store}><MovieItem onClick={clickFn()}/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});