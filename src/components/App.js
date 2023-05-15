import React, { useState } from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Home from '../pages/Home'
import Product from '../pages/Product'
import About from '../pages/About'


function App() {
    const [selected, setSelected] = useState("English")

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home selected={selected} setSelected={setSelected}/>} />
                    <Route path="/product" element={<Product selected={selected} setSelected={setSelected}/>}/>
                    <Route path="/about" element={<About selected={selected} setSelected={setSelected}/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
