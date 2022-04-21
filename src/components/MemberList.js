import React from "react";
import { NavLink } from "react-router-dom";

function MemberList({ id, name, email, img, text, bg }) {
  return (
    <NavLink to="/Profile" key={id} state={{ id, name, email, img, bg }}>
      <span className="profile_img" style={{ backgroundImage: `url(${img})` }}></span>
      <span className="profile_name">{name}</span>
      <span className="profile_messages">{text}</span>
    </NavLink>
  );
}

export default MemberList;
