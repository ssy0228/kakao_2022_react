import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Friends from "./routes/Friends";
import More from "./routes/More";
import Chats from "./routes/Chats";
import Find from "./routes/Find";
import Profile from "./routes/Profile";
import Chat from "./routes/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/Profile" element={<Profile />} />        
        <Route path="/Chats" element={<Chats />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Find" element={<Find />} />
        <Route path="/More" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
