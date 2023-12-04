import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages to be used in router
import Login from "./Pages/Login"; 
import Register from "./Pages/Register"; 
import Home from "./Pages/Home";
import AboutMeditation from "./Pages/AboutMeditation";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/meditationguide" element={<AboutMeditation />} />
            </Routes>
        </Router>
    )
}

export default App;
