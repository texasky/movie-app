import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import BackButton from './BackButton';
import { Provider } from 'react-redux';
import store from './../../state/store'
import { BrowserRouter as Router } from 'react-router-dom';

test('Back button component tests', () => {
    const clickFn = jest.fn();
    const utils = render(<Provider store={store}><Router><BackButton onClick={clickFn()}/></Router></Provider>);

    const movieComponent = utils.getByTestId('back-button');
    fireEvent.click(movieComponent)

    expect(clickFn).toBeCalled();
});

test('Back button component matches snapshot', () => {
    const clickFn = jest.fn();
    const tree = renderer.create(<Provider store={store}><Router><BackButton onClick={clickFn()}/></Router></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});