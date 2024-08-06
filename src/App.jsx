
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/styles.css';
import Calendar from './components/Calendar';
import Login from "./components/Login.jsx";
import RedirectPage from "./components/RedirectPage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import './App.css'
import WinRate from './components/WinRate'
import ProfilePage from './components/ProfilePage.jsx';
import TermPage from './components/TermPage.jsx';
// import TermonePage from './components/TermonePage.jsx';
// import TermtwoPage from './components/TermtwoPage.jsx';
// import TermthreePage from './components/TermthreePage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/term" element={<TermPage />} />
        {/* <Route path="/termone" element={<TermonePage />} />
        <Route path="/termtwo" element={<TermtwoPage />} />
        <Route path="/termthree" element={<TermthreePage />} /> */} 
        <Route path="/oauth/callback/kakao" element={<RedirectPage />} />
        <Route path="/winrate" element={<WinRate/>}/>
        <Route path="/calendar" element = {<Calendar/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}


export default App;
