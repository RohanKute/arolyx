
import './App.css'
import AdminMaster from './components/Admin/admin-master/AdminMaster';
import MasterPage from './components/master/MasterPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  if (window.location.pathname === '/admin') {
    return (
      <>
        <div>
          <Router>
            <Routes>
              <Route path="/admin/*" element={<AdminMaster />} />
            </Routes>
          </Router>
        </div>
      </>
    )
  }

  return (
    <>
       <MasterPage />
    </>
  )
}

export default App
