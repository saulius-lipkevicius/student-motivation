import React, { useState } from 'react'
import ProductUserInput from '../components/ProductUserInput'
import NavBar from "../components/NavBar";

function Product() {
    const [selected, setSelected] = useState("English")
    // <LanguageTopHeader selected={selected} setSelected={setSelected}/>
    return (
        <div>
            <NavBar 
                navLocation={2}
            />
            <ProductUserInput />
            
        </div>
    )
}

export default Product;