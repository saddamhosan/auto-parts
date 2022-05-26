import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from 'react-helmet-async';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <Helmet>
        <title>Dashboard - AutoParts</title>
      </Helmet>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <div className="flex justify-between px-6">
            <h1 className="text-2xl text-blue-500 font-bold">Dashboard</h1>
            <label
              htmlFor="my-drawer-2"
              className=" drawer-button lg:hidden text-2xl"
            >
              <GiHamburgerMenu />
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side w-3/5 md:w-full">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto text-base-content bg-slate-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className="text-xl font-semibold" to="/dashboard">
                My Profile
              </Link>
            </li>
            {!admin && (
              <>
                <li>
                  <NavLink className="text-xl font-semibold" to="myOrder">
                    My Order
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-xl font-semibold" to="addReview">
                    Add Review
                  </NavLink>
                </li>
              </>
            )}

            {admin && (
              <>
                <li>
                  <NavLink className="text-xl font-semibold" to="allOrders">
                    Manage All Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-xl font-semibold" to="addProduct">
                    Add A Product
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-xl font-semibold" to="manageProduct">
                    Manage Product
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-xl font-semibold" to="makeAdmin">
                    Make Admin
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
