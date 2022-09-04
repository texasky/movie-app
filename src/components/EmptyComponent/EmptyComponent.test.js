import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import EmptyComponent from './EmptyComponent';

test('Empty component tests', () => {
    const utils = render(<EmptyComponent text="Some text to test"/>);

    const emptyComponent = utils.getByTestId('empty-component');

    expect(emptyComponent).toBeInTheDocument();
    expect(emptyComponent).toHaveTextContent('Some text to test');
});

test('Back button component matches snapshot', () => {
    const tree = renderer.create(<EmptyComponent text="Some text to test"/>).toJSON();
    expect(tree).toMatchSnapshot();
});