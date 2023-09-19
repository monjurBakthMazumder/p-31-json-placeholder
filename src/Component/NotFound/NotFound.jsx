import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    const handleClick =()=> {
        navigate(-1)
    }
    return (
        <div>
            <h1>{error.status || error.message}</h1>
            {
                error.status === 404 && 
                <h1>Not Found</h1>
            }
            <button className="btn" onClick={handleClick}>Go Back</button>
        </div>
    );
};

export default NotFound;