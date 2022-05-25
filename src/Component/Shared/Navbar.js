import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.ico';

const Navbar = () => {
  const [user]=useAuthState(auth)

  const handleSignOut = () => {
    localStorage.removeItem("Token");
    signOut(auth);
  };
    return (
      <div className="navbar bg-slate-100">
        <div className="navbar-start ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-5"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              )}
              <li>
                {user?.uid ? (
                  <>
                    <button onClick={handleSignOut} className="btn btn-ghost">
                      Log Out
                    </button>
                    <span className="text-white bg-orange-500 px-3 py-1 font-mono rounded-full font-bold  ml-4">
                      {user.displayName}
                    </span>
                  </>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <div className="flex items-center">
              <img className="w-[70px]" src={logo} alt="" />
              <span>AutoParts</span>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden  lg:flex px-20">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                className="btn btn-ghost btn-md font-bold text-md"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn btn-ghost btn-md font-bold text-md"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn btn-ghost btn-md font-bold text-md"
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  className="btn btn-ghost btn-md font-bold text-md"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            <li className="flex-nowrap">
              {user?.uid ? (
                <span
                  onClick={handleSignOut}
                  className="btn btn-ghost btn-md font-bold text-md"
                >
                  Log Out
                  <span className="text-gray-500 font-serif font-bold">
                    {user.displayName.split(" ")[0]}
                  </span>
                </span>
              ) : (
                <NavLink
                  className="btn btn-ghost btn-md font-bold text-md"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;