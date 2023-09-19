import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Photo = ({photo}) => {
    const {id, title, url} = photo;

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/photos/${id}`)
    }

    return (
        <div className="card card-compact border-2 shadow-xl">
        <div className="card-body flex flex-col">
            <img src={url} alt="" />
            <span className='flex-grow'>{id}. {title}</span>
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

Photo.propTypes = {
    photo : PropTypes.object,
};

export default Photo;