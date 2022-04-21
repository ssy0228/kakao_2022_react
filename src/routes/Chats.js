import React from "react";
import ChatList from "../components/ChatList";
import Nav from "../components/Nav";
import Header from "../components/Header";
import profiles from "../data/memberList.json";
import "../styles/Chats.scss";
export function Chats() {
  const chatItem = profiles.map((profile, idx) => {
    if (profile.id > 0) {
      return (
        <li key={idx}>
          <ChatList id={profile.id} name={profile.name} email={profile.email} comment={profile.lastMsg} img={profile.profileImg} bg={ profile.backgroundImg}/>
        </li>
      );
    } else return null;
  });
  return (
    <>
      <Header tab_name="Chats" left_btn="Edit" header_icon="fas fa-caret-down" />
      <main id="Chats">
        <div className="search_box">
          <div className="search_inner">
            <i className="fas fa-search"></i>
            <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends" />
          </div>
        </div>
        <section className="main_section">
          <ul>
            {chatItem}
          </ul>
        </section>
        <div className="chat_btn">
          <a href="#">
            <i className="fas fa-comment"></i>
          </a>
        </div>
      </main>
      <Nav />
    </>
  );
}

export default Chats;
