import React from "react";
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <div>
      <nav className="flex flex-col gap-5">
        <p className="text-2xl">
          <NavLink to="/users">Users</NavLink>
        </p>
        <p className="text-2xl">
          <NavLink to="/posts">Posts</NavLink>
        </p>
        <p className="text-2xl">
          <NavLink to="/countries">Countries</NavLink>
        </p>
        <p className="text-2xl">
          <NavLink to="products">Products</NavLink>
        </p>
      </nav>
    </div>
  );
};

export default SideBar;
