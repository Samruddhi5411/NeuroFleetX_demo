
import './App.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import Navbar from './layout/Navbar.js';
import Homepage from './pages/Homepage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddingUser from './users/AddingUser.js';
import EditUser from './users/EditUser.js';
import ViewwwUsers from './users/ViewwwUsers.js';







function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/adduser" element={<AddingUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewwwUsers />} />
        </Routes>

      </Router>


    </div>
  );
}

export default App;
