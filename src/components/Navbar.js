import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="navbar bg-white shadow-lg top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-500">
                About
              </Link>
            </li>

          </ul>
        </div>
        <Link to="/">   <a className="btn btn-ghost normal-case text-xl text-blue-600">XenonStay</a></Link>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="mx-2 text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="mx-2 text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-blue-500">
              Contact
            </Link>
          </li>

        </ul>
      </div>
      {!localStorage.getItem('token') ? (
        <div className="navbar-end">
          <Link className="btn bg-blue-500 text-white" to="/login">
            Login
          </Link>
          <Link className="btn bg-blue-500 text-white mx-2" to="/signup">
            Signup
          </Link>
        </div>
      ) : (
        <div className="navbar-end">
          <button
            type="button"
            className="btn bg-blue-500 text-white mx-5"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
