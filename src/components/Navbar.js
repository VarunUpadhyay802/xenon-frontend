import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Link, useLocation
} from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (

        <div class="navbar bg-white shadow-lg top-0 z-50 bg-transparent">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" role="button" >Home</Link></li>
                  
                        <li><Link to="/about" role="button">About</Link></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Xenon</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><Link to="/" role="button" class="mx-2">Home</Link></li>
                   
                    <li><Link to="/about" role="button" class="mx-2">About</Link></li>
                </ul>
            </div>
            {!localStorage.getItem('token') ? <div class="navbar-end">
                <Link className="btn btn-primary " to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link></div>
                : <div className="navbar-end">

                    <button type="button" className="btn btn-primary mx-5" onClick={handleLogout}>Logout</button>

                </div>}
        </div>

    )
}

export default Navbar
