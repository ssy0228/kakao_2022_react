import React, { useEffect, useState } from "react";
import Axios from "axios";
import Nav from "../components/Nav";
import Header from "../components/Header";
import MemberList from "../components/MemberList";
import profiles from "../data/memberList.json";
import "../styles/Friends.scss";

export default function Friends() {
  const myProfile = profiles[0];
  const [userNames, setUserNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getUserName() {
      try {
        setError(null);
        setUserNames(null);
        setLoading(true);
        const response = await Axios.get("https://jsonplaceholder.typicode.com/users");
        setUserNames(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }
    getUserName();
  }, []);
  const frienditem = profiles.map((profile, idx) => {
    if (profile.id > 0) {
      return (
        <li key={idx}>
          <MemberList id={profile.id} name={profile.name} email={profile.email} img={profile.profileImg} text={profile.profileMsg} bg={profile.backgroundImg} />
        </li>
      );
    } else return null;
  });
  return (
    <>
      <Header tab_name="Friends" friend_num="10" left_btn="Manage" right_btn="fas fa-cog" />
      <main id="Friends">
        <div className="search_box">
          <div className="search_inner">
            <i className="fas fa-search"></i>
            <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends" />
          </div>
        </div>
        <section className="main_section">
          <header>
            <h2>My Profile</h2>
          </header>
          <ul>
            <li>
              <MemberList id={myProfile.id} name={myProfile.name} email={myProfile.email} text={myProfile.profileMsg} img={myProfile.profileImg} bg={myProfile.backgroundImg} />
            </li>
          </ul>
        </section>
        <section className="main_section">
          <header>
            <h2>Friends</h2>
          </header>
          <ul>{frienditem}</ul>
        </section>
      </main>
      <Nav />
    </>
  );
}
