import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const navigate =useNavigate();
    const user = useLoaderData();
    const {id, name, username, email, address} = user;
    const handleClick =() => {
        navigate(-1)
    }
    return (
        <div className="card card-compact border-2 shadow-xl my-10 sm:w-3/4 md:w-1/2 mx-auto" style={{'min-height':'50vh'}}>
        <div className="card-body flex flex-col">
        <h2 className="card-title">{id}. {name}</h2>
            <span>username: {username}</span>
            <span>Email: {email}</span>
            <span>Zip code: {address?.zipcode}</span>
            <span className='flex-grow'>Address: {address?.suite}, {address?.street}, {address?.city}</span>
            <div className="card-actions justify-center">
            <button className="btn" onClick={handleClick}>go back</button>
            </div>
        </div>
        </div>
    );
};

export default UserDetails;