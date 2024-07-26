import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/SignupPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import TermPage from './components/TermPage.jsx';
import TermdetailPage from './components/TermdetailPage.jsx';
import './App.css'

function App() {

  return (
    <Browserrouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/term" element={<TermPage />} />
          <Route path="/termdetail" element={<TermdetailPage />} />
        </Routes>
      </div>
    </Browserrouter>
  )
}

export default App