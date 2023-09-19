import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, username, email, address} = user;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/users/${id}`)
    }
    return (
        <div className="card card-compact border-2 shadow-xl">
        <div className="card-body flex flex-col">
            <h2 className="card-title">{id}. {name}</h2>
            <span>username: {username}</span>
            <span>Email: {email}</span>
            <span>Zip code: {address?.zipcode}</span>
            <span className='flex-grow'>Address: {address?.suite}, {address?.street}, {address?.city}</span>
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

User.propTypes = {
    user : PropTypes.object,
};

export default User;