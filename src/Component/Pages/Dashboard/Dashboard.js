import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <h1>Dashboard</h1>
          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-52 text-base-content bg-slate-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
            <li>
              <NavLink to="addReview">Add Review</NavLink>
            </li>
            <li>
              <NavLink to="myProfile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="allOrders">Manage All Orders</NavLink>
            </li>
            <li>
              <NavLink to="addProduct">Add A Product</NavLink>
            </li>
            <li>
              <NavLink to="manageProduct">Manage Product</NavLink>
            </li>
            <li>
              <NavLink to="makeAdmin">Make Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
