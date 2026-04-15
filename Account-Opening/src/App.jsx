import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IdEntryPage from './pages/IdEntryPage'
import CustomerDataPage from './pages/CustomerDataPage'
import logo from './assets/no_bg_image.png'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <header className="app-header">
          <div className="header-content">
            <div className="logo-area">
              <img src={logo} alt="Bank Logo" className="logo-img" />
              <span className="logo-text">Account Opening Portal</span>
            </div>
          </div>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<IdEntryPage />} />
            <Route path="/customer-data" element={<CustomerDataPage />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Foreigner Account Opening System</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
