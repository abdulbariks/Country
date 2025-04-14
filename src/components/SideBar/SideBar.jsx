import React from "react";
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <div>
      <nav className="flex flex-col gap-5">
        <a className="text-2xl">
          <NavLink to="/users">Users</NavLink>
        </a>
        <a className="text-2xl">
          <NavLink to="/posts">Posts</NavLink>
        </a>
        <a className="text-2xl">
          <NavLink to="/countries">Countries</NavLink>
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
