import './App.css'
import Loading from './components/Loading'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Loading />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
