import { useLoaderData, useNavigate } from "react-router-dom";

const TodoDetails = () => {
    const navigate= useNavigate();
    const todo = useLoaderData();
    const{id, title , completed} = todo;
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <div className="card card-compact border-2 shadow-xl my-10 sm:w-3/4 md:w-1/2 mx-auto" style={{'min-height':'50vh'}}>
        <div className="card-body flex flex-col">
        <span className=''>{id}. {title}</span>
            <h2 className="card-title flex-grow">Completed: {completed ? 'Done' : 'Doing'}</h2>
            <div className="card-actions justify-center">
            <button className="btn" onClick={handleClick}>go back</button>
            </div>
        </div>
        </div>
    );
};

export default TodoDetails;