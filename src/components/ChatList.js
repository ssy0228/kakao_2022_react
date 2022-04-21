import React from "react";
import { NavLink } from "react-router-dom";
export default function ChatList({ id, name, email, comment, img, bg }) {
  return (
    <NavLink to="/Chat" key={id} state={{ id, name, img, comment, email, bg }}>
      <div className="blind background" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className=""></div>
      <span className="chats_img" style={{ backgroundImage: `url(${img})` }}></span>
      <span className="chats_cont">
        <span className="chats_name">{name}</span>
        <span className="chats_latest">{comment}</span>
      </span>
      <span className="chats_time">
        <span>17</span>:<span>33</span>
      </span>
    </NavLink>
  );
}
