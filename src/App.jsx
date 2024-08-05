
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/styles.css';
import Calendar from './components/Calendar';
import Login from "./components/Login.jsx";
import RedirectPage from "./components/RedirectPage.jsx";
import './App.css'
import WinRate from './components/WinRate'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<RedirectPage />} />
        <Route path="/winrate" element={<WinRate/>}/>
        <Route path="/calendar" element = {<Calendar/>}/>
        
      </Routes>
    </BrowserRouter>
  );
 

}


export default App;
