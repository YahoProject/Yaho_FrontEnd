import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage.jsx';
import TermPage from './components/TermPage.jsx';
// import TermonePage from './components/TermonePage.jsx';
// import TermtwoPage from './components/TermtwoPage.jsx';
// import TermthreePage from './components/TermthreePage.jsx';import './App.css'

function App() {

  return (
    <Browserrouter>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/term" element={<TermPage />} />
        {/* <Route path="/termone" element={<TermonePage />} />
        <Route path="/termtwo" element={<TermtwoPage />} />
        <Route path="/termthree" element={<TermthreePage />} /> */}      
      </Routes>
    </Browserrouter>
  )
}

export default App