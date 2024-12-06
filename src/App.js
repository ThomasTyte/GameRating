import React, { useState } from 'react';
import './index.css'; 
import Navbar from './component/navbar/Navbar';
import Contact from './component/contactpage/Contact';
import Home from './component/Homepage/Home';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <HashRouter> {/* Use HashRouter here */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
