import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users =useLoaderData();
    return (
        <>
            <h1  className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold my-10 underline">Users: {users.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-10">
                {
                    users.map(user=> 
                        <User
                            key={user.id}
                            user={user}
                        />
                    )
                }
            </div>
        </>
    );
};

export default Users;