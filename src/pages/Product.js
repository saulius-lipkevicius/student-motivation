import React, { useState } from 'react'
import ProductUserInput from '../components/ProductUserInput'
import NavBar from "../components/NavBar";
import LanguageBar from "../components/LanguageTopHeader"

function Product() {
    const [selected, setSelected] = useState("English")
    
    return (
        <div>
            <LanguageBar selected={selected} setSelected={setSelected} sticky="top"/>
            <NavBar 
                navLocation={2}
            />
            <ProductUserInput />
            
        </div>
    )
}

export default Product;