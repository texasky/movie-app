import './MovieAppLogo.css';

const MovieAppLogo = (props) => {
    const logo = require('../../assets/movie-app-icon.jpeg');

    return (
        <div className='movie-app-logo' data-testid="movie-app-logo">
            <img src={logo} width={40} height={40} alt='MOVIE APP'/>
            <span>MOVIE APP. TYPE AND SEARCH :)</span>
        </div>
    )
}

export default MovieAppLogo;