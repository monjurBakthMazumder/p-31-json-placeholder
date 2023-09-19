import { useLoaderData, useNavigate } from "react-router-dom";


const PhotoDetails = () => {
    const navigate = useNavigate();
    const photo = useLoaderData();
    const {id, title, url, thumbnailUrl} = photo;
    const handleClick =() => {
        navigate(-1)
    } 
    return (
        <div className="card card-compact border-2 shadow-xl my-10 sm:w-3/4 md:w-1/2 mx-auto" style={{'min-height':'50vh'}}>
        <div className="card-body flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 w-full">
                <img src={url} alt="" className="w-fit col-span-2"/>
                <img src={thumbnailUrl} alt="" className="w-fit " />
            </div>
            <span className='flex-grow'>{id}. {title}</span>
            <div className="card-actions justify-center">
            <button className="btn" onClick={handleClick}>go back</button>
            </div>
        </div>
        </div>
    );
};

export default PhotoDetails;