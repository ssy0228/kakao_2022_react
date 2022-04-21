import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Nav.scss";
export default function Nav() {
  return (
    <nav className="tab_bar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} style={({ isActive }) => ({ color: isActive ? "#532727" : "#c1c1c1" })} end>
            <i className="fas fa-user"></i>Friends
          </NavLink>
        </li>
        <li>
          <NavLink to="/Chats" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} style={({ isActive }) => ({ color: isActive ? "#532727" : "#c1c1c1" })}>
            <i className="fas fa-comment"></i>Chats
          </NavLink>
        </li>
        <li>
          <NavLink to="/Find" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} style={({ isActive }) => ({ color: isActive ? "#532727" : "#c1c1c1" })}>
            <i className="fas fa-search"></i>Find
          </NavLink>
        </li>
        <li>
          <NavLink to="/More" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} style={({ isActive }) => ({ color: isActive ? "#532727" : "#c1c1c1" })}>
            <i className="fas fa-ellipsis-h"></i>More
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
