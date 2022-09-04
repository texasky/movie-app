import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MovieHeader from './MovieHeader';
import { Provider } from 'react-redux';
import store from './../../state/store'

test('Movi header component tests', () => {
    const utils = render(<Provider store={store}><MovieHeader /></Provider>);

    const movieHeader = utils.getByTestId('movie-header');

    expect(movieHeader).toBeInTheDocument();
});

test('Movi header component matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><MovieHeader /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});