import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { Provider } from 'react-redux';
import store from './state/store'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('App component tests', () => {
  const mockStore = configureMockStore([thunk])

  test('MovieHeader component render', () => {
    render(<Provider store={store}><App/></Provider>);

    const movieRenderElement = screen.getByTestId('movie-header')

    expect(movieRenderElement).toBeInTheDocument();
  });

  describe('Empty component text', () => {
    test('Type to search a movie', () => {
      const store = mockStore({
        moviesStore: {
          searchQuery: '',
          isMovieOpened: false,
          openedMovieId: '',
        }
      })

      render(<Provider store={store}><App/></Provider>);
      const linkElement = screen.queryByTestId('empty-component');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent('Type to search a movie');
    })

    test('Sorry, nothing found', () => {
      const store = mockStore({
        moviesStore: {
          searchQuery: 'abc',
          isMovieOpened: false,
          openedMovieId: '',
        }
      })

      render(<Provider store={store}><App/></Provider>);
      const linkElement = screen.queryByTestId('empty-component');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent('Sorry, nothing found');
    })

    test('Enter at least 3 letters to search', () => {
      const store = mockStore({
        moviesStore: {
          searchQuery: 'ab',
          isMovieOpened: false,
          openedMovieId: '',
        }
      })

      render(<Provider store={store}><App/></Provider>);

      const linkElement = screen.queryByTestId('empty-component');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent('Enter at least 3 letters to search');
    })

    test('No empty text should be rendered', () => {
      const store = mockStore({
        moviesStore: {
          movies: [{
            Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            Title: "Harry Potter and the Deathly Hallows: Part 2",
            Type: "movie",
            Year: "2011",
            imdbID: "tt1201607"
          }],
          searchQuery: '',
          isMovieOpened: false,
          openedMovieId: '',
        }
      })

      render(<Provider store={store}><App/></Provider>);

      const linkElement = screen.queryByTestId('empty-component');
      const movieListElement = screen.queryByTestId('movie-list');

      expect(linkElement).not.toBeInTheDocument();
      expect(movieListElement).toBeInTheDocument();
    })
  })

  test('App component matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><App/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});