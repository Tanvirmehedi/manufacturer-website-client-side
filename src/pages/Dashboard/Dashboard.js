import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center relative ">
        <h1 className="bg-secondary px-3 w-full text-center sticky top-0 z-50 text-xl">
          Dashboard
        </h1>
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 lg:w-60 bg-secondary text-base-content ">
          {/* <!-- Sidebar content here --> */}
          {admin && (
            <div className="collapse bg-accent rounded-lg my-2 ">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Menage Product</div>
              <div className="collapse-content bg-accent">
                <li>
                  <Link to="addproduct">Add Product</Link>
                </li>
              </div>
            </div>
          )}
          {/* ------------------------------------------------ */}
          <div className="collapse bg-accent rounded-lg my-2 ">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Profile</div>
            <div className="collapse-content bg-accent">
              <li>
                <Link to="myprofile">Update profile</Link>
              </li>
              <li>
                <Link to="profile">Profile Details</Link>
              </li>
            </div>
          </div>
          {/* -------------------------------------------------- */}

          {/* ------------------------------------------------ */}
          {!admin && (
            <div className="collapse bg-accent rounded-lg my-2 ">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Order</div>
              <div className="collapse-content bg-accent">
                <li>
                  <Link to="myorder">My Order</Link>
                </li>
              </div>
            </div>
          )}
          {/* -------------------------------------------------- */}
          {/* ------------------------------------------------ */}
          {admin && (
            <div className="collapse bg-accent rounded-lg my-2 ">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Users</div>
              <div className="collapse-content bg-accent">
                <li>
                  <Link to="allusers">All Users</Link>
                </li>
              </div>
            </div>
          )}
          {/* -------------------------------------------------- */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
