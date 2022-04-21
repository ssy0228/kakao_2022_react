import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Chat.scss";

export default function Chat() {
  const location = useLocation();
  console.log(location);
  if (location.state) {
    const { id, name, email, img, comment, bg } = location.state;
    return (
      <>
        <header className="Chat">
          <div className="status_bar">
            <div className="left_item">
              <i className="fas fa-plane"></i>
              <i className="fas fa-wifi"></i>
            </div>
            <div className="center_item">
              <span>17</span>:<span>33</span>
            </div>
            <div className="right_item">
              <i className="far fa-moon"></i>
              <i className="fab fa-bluetooth-b"></i>
              <span>
                <span>100</span>%
              </span>
              <i className="fas fa-battery-full"></i>
            </div>
          </div>
          <div className="header_inner">
            <h1>{name}</h1>
            <div className="left_item">
              <NavLink to="/Chats">
                <i className="fas fa-angle-left"></i>
              </NavLink>
            </div>
            <div className="right_item">
              <a href="#">
                <i className="fas fa-search"></i>
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
        </header>
        <main id="Chat">
          <span className="date_info">Wednesday, April 12, 2018</span>
          <div className="chat_box my">
            <span className="chat">Hello!</span>
            <span className="chat">Hello! This is a test message. Hello!</span>
            <span className="chat">This is a test message.</span>
            <span className="chat_time">
              <span>16</span>:<span>30</span>
            </span>
          </div>
          <div className="chat_box other">
            <div className="other_info">
              <NavLink to="/Profile" key={id} state={{ id, name, email, img, bg }}>
                <span className="profile_img" style={{ backgroundImage: `url(${img})` }}></span>
              </NavLink>
              <span className="profile_name">{name}</span>
            </div>
            <span className="chat">And this is an answer</span>
            <span className="chat">And this is an answer And this is an answer</span>
            <span className="chat">{comment}</span>
            <span className="chat_time">
              <span>17</span>:<span>33</span>
            </span>
          </div>
        </main>
        <footer>
          <span className="plus_btn">
            <a href="#">
              <i className="fas fa-plus"></i>
            </a>
          </span>
          <div className="text_box">
            <input type="text" className="text_field" />
            <span className="emoticon_btn">
              <a href="#">
                <i className="far fa-smile"></i>
              </a>
            </span>
            <span className="voice_btn">
              <a href="#">
                <i className="fas fa-microphone"></i>
              </a>
            </span>
          </div>
        </footer>
      </>
    );
  }
}
