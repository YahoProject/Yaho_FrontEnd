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
import Food from './components/Food.jsx';
import KiaUnderbar from './components/KiaUnderbar.jsx';
import KiaFood from './components/KiaFood.jsx';
import LG_DSUnderbar from './lg&ds/LG_DSUnderbar.jsx';
import LG_DSFood from './lg&ds/LG_DSFood.jsx';
import KiwoomUnderbar from './kiwoom/KiwoomUnderbar.jsx';
import SamsungUnderbar from './samsung/SamsungUnderbar.jsx';
import SSGUnderbar from './ssg/SSGUnderbar.jsx';
import HanhwaUnderbar from './hanhwa/HanhwaUnderbar.jsx';
import NCUnderbar from './nc/NCUnderbar.jsx';
import LotteUnderbar from './lotte/LotteUnderbar.jsx';
import KTUnderbar from './kt/KTUnderbar.jsx';
import HanhwaFood from './hanhwa/HanhwaFood.jsx';
import KiwoomFood from './kiwoom/KiwoomFood.jsx';
import KTFood from './kt/KTFood.jsx';
import LotteFood from './lotte/LotteFood.jsx';
import NCFood from './nc/NCFood.jsx';
import SamsungFood from './samsung/SamsungFood.jsx';
import SSGFood from './ssg/SSGFood.jsx';
import Home from './components/Home.jsx';

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
  const showLGDSUnderbar=location.pathname.startsWith('/food/jamsil');
  const showKiwoomUnderbar=location.pathname.startsWith('/food/kiwoom');
  const showSSGUnderbar=location.pathname.startsWith('/food/ssg');
  const showKTUnderbar=location.pathname.startsWith('/food/kt');
  const showLotteUnderbar=location.pathname.startsWith('/food/lotte');
  const showSamsungUnderbar=location.pathname.startsWith('/food/samsung');
  const showNCUnderbar=location.pathname.startsWith('/food/nc');
  const showHanhwaUnderbar=location.pathname.startsWith('/food/hanhwa');

  return (
    <>
      {showKiaUnderbar && <KiaUnderbar />}
      {showLGDSUnderbar && <LG_DSUnderbar />}
      {showSSGUnderbar && <SSGUnderbar />}
      {showKTUnderbar && <KTUnderbar />}
      {showSamsungUnderbar && <SamsungUnderbar />}
      {showKiwoomUnderbar && <KiwoomUnderbar />}
      {showNCUnderbar && <NCUnderbar />}
      {showHanhwaUnderbar && <HanhwaUnderbar />}
      {showLotteUnderbar && <LotteUnderbar />}
      <Sidebar />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/oauth/callback/kakao" element={<RedirectPage />} />
        <Route path="/winrate" element={<WinRate />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/food" element={<Food/>}/>
        <Route path="/food/kia" element={<KiaFood />} />
        <Route path="/food/jamsil" element={<LG_DSFood/>}/>
        <Route path="/food/hanhwa" element={<HanhwaFood />} />
        <Route path="/food/kiwoom" element={<KiwoomFood />} />
        <Route path="/food/kt" element={<KTFood />} />
        <Route path="/food/lotte" element={<LotteFood />} />
        <Route path="/food/nc" element={<NCFood />} />
        <Route path="/food/samsung" element={<SamsungFood />} />
        <Route path="/food/ssg" element={<SSGFood/>} />
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
