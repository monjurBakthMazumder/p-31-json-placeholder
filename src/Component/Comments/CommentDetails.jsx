import { useLoaderData, useNavigate } from "react-router-dom";


const CommentDetails = () => {
    const navigate = useNavigate();
    const comment = useLoaderData();
    const {id, name, email, body} = comment;
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <div className="card card-compact border-2 shadow-xl my-10 sm:w-3/4 md:w-1/2 mx-auto" style={{'min-height':'50vh'}}>
        <div className="card-body flex flex-col">
        <h2 className="card-title">{id}. {name}</h2>
            <span>{email}</span>
            <span className='flex-grow'>{body}</span>
            <div className="card-actions justify-center">
            <button className="btn" onClick={handleClick}>go back</button>
            </div>
        </div>
        </div>
    );
};

export default CommentDetails;