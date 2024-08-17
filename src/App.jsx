import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './styles/styles.css';
import Calendar from './components/Calendar';
import Login from "./components/Login.jsx";
import RedirectPage from "./components/RedirectPage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import './App.css';
import WinRate from './components/WinRate';
import ProfilePage from './components/ProfilePage.jsx';
import TermPage from './components/TermPage.jsx';
import KiaUnderbar from './components/KiaUnderbar.jsx';
import KiaFood from './components/KiaFood.jsx';

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

const MainContent = () => {
  const location = useLocation();
  const showKiaUnderbar = location.pathname.startsWith('/food/kia');

  return (
    <>
      {showKiaUnderbar && <KiaUnderbar />}
      <Sidebar />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/term" element={<TermPage />} />
        <Route path="/oauth/callback/kakao" element={<RedirectPage />} />
        <Route path="/winrate" element={<WinRate />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/food/kia" element={<KiaFood />} />

      </Routes>
    </>
  );
}

export default App;