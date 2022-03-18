import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.scss";

// import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<span> 404 </span>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
