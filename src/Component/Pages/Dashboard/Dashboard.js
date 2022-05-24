import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <div className="flex justify-between px-6">
            <h1 className="text-2xl text-blue-500 font-bold">Dashboard</h1>
            <label for="my-drawer-2" class=" drawer-button lg:hidden text-2xl">
              <GiHamburgerMenu />
            </label>
          </div>
          <Outlet />
        </div>
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-70 text-base-content bg-slate-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className="text-xl font-bold text-gray-500" to="/dashboard">
                My Profile
              </Link>
            </li>
            {!admin && (
              <>
                <li>
                  <NavLink
                    className="text-xl font-bold text-gray-500"
                    to="myOrder"
                  >
                    My Order
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-xl font-bold text-gray-500"
                    to="addReview"
                  >
                    Add Review
                  </NavLink>
                </li>
              </>
            )}

            {admin && (
              <>
                <li>
                  <NavLink
                    className="text-xl font-bold text-gray-500"
                    to="allOrders"
                  >
                    Manage All Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-xl font-bold text-gray-500"
                    to="addProduct"
                  >
                    Add A Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-xl font-bold text-gray-500"
                    to="manageProduct"
                  >
                    Manage Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-xl font-bold text-gray-500"
                    to="makeAdmin"
                  >
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
