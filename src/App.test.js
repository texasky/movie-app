import { render, screen } from '@testing-library/react';
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
      const movieListElement = screen.queryByTestId('movie-list');
      expect(movieListElement).not.toBeInTheDocument();
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
      const movieListElement = screen.queryByTestId('movie-list');

      expect(movieListElement).not.toBeInTheDocument();
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
      const movieListElement = screen.queryByTestId('movie-list');

      expect(movieListElement).not.toBeInTheDocument();
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

  describe('Is MoviePreview component renders', () => {
    const store = mockStore({
      moviesStore: {
        movies: [{
          Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
          Title: "Harry Potter and the Deathly Hallows: Part 2",
          Type: "movie",
          Year: "2011",
          imdbID: "tt1201607"
        }],
        searchQuery: 'Harry',
        isMovieOpened: true,
        openedMovieId: 'tt1201607',
      }
    })

    test('Render MoviePreview component', () => {
      render(<Provider store={store}><App/></Provider>);

      const movieListElement = screen.queryByTestId('movie-list');
      const linkElement = screen.getByTestId('movie-preview')

      expect(movieListElement).not.toBeInTheDocument();
      expect(linkElement).toBeInTheDocument();
    });

    // test("If ParentComponent is passed open and has data, ChildComponent is called with prop open and data", () => {
    //   // Render the ParentComponent with the props wanting to
    //   // be tested.
    //   // render(<ParentComponent open data="some data" />);
    //   render(<Provider store={store}><App/></Provider>);
    
    //   // Check that the Jest mock function is called with an object.
    //   // Use 'expect.objectContaining' to make sure any other default
    //   // React props are ignored.
    //   expect(mockChildComponent).toHaveBeenCalledWith(
    //     expect.objectContaining({
    //       open: true,
    //       data: "some data",
    //     })
    //   );
    // });
  })

});