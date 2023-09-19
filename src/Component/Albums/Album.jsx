import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Album = ({album}) => {
    const {id, title}= album;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/albums/${id}`)
    }
    return (
        <div className="card card-compact border-2 shadow-xl">
        <div className="card-body flex flex-col">
            <h2 className="card-title">{id}.</h2>
            <span className='flex-grow'>{title}</span>
            <div className="card-actions justify-end">
            <button 
                    onClick={handleClick}
                    className="btn "
                >Details</button>
            </div>
        </div>
        </div>
    );
};

Album.propTypes = {
    album : PropTypes.object,
};

export default Album;