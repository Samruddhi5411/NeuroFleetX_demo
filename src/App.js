
import './App.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import Navbar from './layout/Navbar.js';
import Homepage from './pages/Homepage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddingUser from './users/AddingUser.js'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/adduser" element={<AddingUser />} />
        </Routes>

      </Router>


    </div>
  );
}

export default App;
