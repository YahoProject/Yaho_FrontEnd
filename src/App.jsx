import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedirectPage from "./components/RedirectPage.jsx";
import "./App.css";
import WinRate from "./components/WinRate";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<RedirectPage />} />
        <Route path="/winrate" element={<WinRate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
