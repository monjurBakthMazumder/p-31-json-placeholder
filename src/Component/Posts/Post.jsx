import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${id}`)
    }
    return (
        <div className="card card-compact border-2 shadow-xl">
        <div className="card-body flex flex-col">
            <h2 className="card-title">{id}. {title}</h2>
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

Post.propTypes = {
    post: PropTypes.object,
};

export default Post;