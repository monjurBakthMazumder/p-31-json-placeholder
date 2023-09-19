import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/comments/${id}`)
    }
    return (
        <div className="card card-compact border-2 shadow-xl">
        <div className="card-body flex flex-col">
            <h2 className="card-title">{id}. {name}</h2>
            <span>{email}</span>
            <span className='flex-grow'>{body}</span>
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

Comment.propTypes = {
    comment: PropTypes.object,
};

export default Comment;