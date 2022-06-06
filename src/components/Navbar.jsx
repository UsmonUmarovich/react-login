import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = ({ setLoggedin, user }) => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div>
          <span className="uppercase">{user.name}</span>{" "}
          <span className="uppercase">{user.surname}</span>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </NavLink>
            </li>
            <li>
              <button onClick={() => setLoggedin(false)}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
