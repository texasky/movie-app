import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MovieAppLogo from './MovieAppLogo';

test('Movi app logo component tests', () => {
    const utils = render(<MovieAppLogo />);

    const movieAppLogo = utils.getByTestId('movie-app-logo');

    expect(movieAppLogo).toBeInTheDocument();
});

test('Movi app logo component matches snapshot', () => {
    const tree = renderer.create(<MovieAppLogo />).toJSON();
    expect(tree).toMatchSnapshot();
});