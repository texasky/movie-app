import { useDispatch } from 'react-redux';
import { toggleOpenMovie } from '../../state/action-creator';
import './BackButton.css'

const BackButton = (props) => {
    const dispatch = useDispatch();

    const getBackButtonHadler = () => {
        dispatch(toggleOpenMovie())
    }

    return (
        <div className='back-button' onClick={getBackButtonHadler}></div>
    )
}

export default BackButton;