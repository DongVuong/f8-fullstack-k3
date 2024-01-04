import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const activeMenu = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };
  return (
    <div>
      <h2>Menu</h2>
      <ul className="nav flex-column">
        <li>
          <NavLink to={"/"} className={activeMenu}>
            Trang chu
          </NavLink>
        </li>
        <li>
          <NavLink to={"/gioi-thieu"} className={activeMenu}>
            Gioi thieu
          </NavLink>
        </li>
        <li>
          <NavLink to={"/san-pham"} className={activeMenu}>
            San-pham
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dat-hang"} className={activeMenu}>
            Dat hang
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
