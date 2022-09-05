import { useDispatch } from 'react-redux';
import { setMovieOpenToFalse } from '../../state/action-creator';
import { Link } from "react-router-dom";
import './BackButton.css'

const BackButton = (props) => {
    const dispatch = useDispatch();

    const getBackButtonHadler = () => {
        dispatch(setMovieOpenToFalse())
    }

    return (
        <Link to='/'><div className='back-button' data-testid="back-button" onClick={getBackButtonHadler}></div></Link>
    )
}

export default BackButton;