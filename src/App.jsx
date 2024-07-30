import "./App.css";
import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedirectPage from "./components/RedirectPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
