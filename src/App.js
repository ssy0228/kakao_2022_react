import React from "react";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Friends from "./routes/Friends";
import More from "./routes/More";
import Chats from "./routes/Chats";
import Find from "./routes/Find";
import Profile from "./routes/Profile";
import Chat from "./routes/Chat";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/Profile" element={<Profile />} />        
        <Route path="/Chats" element={<Chats />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Find" element={<Find />} />
        <Route path="/More" element={<More />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
