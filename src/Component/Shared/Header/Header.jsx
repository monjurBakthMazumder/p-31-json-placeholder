import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar border-b-4 sticky top-0 bg-white z-40">
            <div className="mr-auto">
                <h1 className="btn btn-ghost normal-case text-xl">Json Placeholder</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={''}>Posts</NavLink></li>
                    <li><NavLink to={'/comments'}>Comments</NavLink></li>
                    <li><NavLink to={'/albums'}>Albums</NavLink></li>
                    <li><NavLink to={'/photos'}>Photos</NavLink></li>
                    <li><NavLink to={'/todos'}>Todos</NavLink></li>
                    <li><NavLink to={'/users'}>Users</NavLink></li>
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to={''}>Posts</NavLink></li>
                    <li><NavLink to={'/comments'}>Comments</NavLink></li>
                    <li><NavLink to={'/albums'}>Albums</NavLink></li>
                    <li><NavLink to={'/photos'}>Photos</NavLink></li>
                    <li><NavLink to={'/todos'}>Todos</NavLink></li>
                    <li><NavLink to={'/users'}>Users</NavLink></li>
                </ul>
                </div>
        </div>
    );
};

export default Header;