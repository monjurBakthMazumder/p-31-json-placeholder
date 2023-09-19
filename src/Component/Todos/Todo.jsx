import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Todo = ({todo}) => {
    const{id, title , completed} = todo;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/todos/${id}`)
    }
    return (
        <div className="card card-compact border-2 shadow-xl">
        <div className="card-body flex flex-col">
            <span className=''>{id}. {title}</span>
            <h2 className="card-title flex-grow">Completed: {completed ? 'Done' : 'Doing'}</h2>
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

Todo.propTypes = {
    todo : PropTypes.object,
};

export default Todo;