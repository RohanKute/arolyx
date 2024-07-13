import './App.css';
import AdminMaster from './components/Admin/admin-master/AdminMaster';
import MasterPage from './components/master/MasterPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminMaster />} />
        <Route path="/*" element={<MasterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
