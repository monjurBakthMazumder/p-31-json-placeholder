import { useLoaderData, useNavigate } from "react-router-dom";

const AlbumDetails = () => {
    const navigate = useNavigate();
    const album = useLoaderData();
    const {id, title}= album;
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <div className="card card-compact border-2 shadow-xl my-10 sm:w-3/4 md:w-1/2 mx-auto" style={{'min-height':'50vh'}}>
        <div className="card-body flex flex-col">
            <h2 className="card-title">{id}.</h2>
            <span className='flex-grow'>{title}</span>
            <div className="card-actions justify-center">
            <button className="btn" onClick={handleClick}>go back</button>
            </div>
        </div>
        </div>
    );
};

export default AlbumDetails;