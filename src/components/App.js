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
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/product" element={<Product/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    )
}

export default App;
