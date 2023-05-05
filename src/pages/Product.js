import React, { useState } from 'react'
import LanguageTopHeader from "../components/LanguageTopHeader"
import MainContent from "../components/MainContent"
import ProductUserInput from '../components/ProductUserInput'
import NavBar from "../components/NavBar";

function Product() {
    const [selected, setSelected] = useState("English")

    return (
        <div>
            <LanguageTopHeader selected={selected} setSelected={setSelected}/>
            <NavBar 
                navLocation={2}
            />
            <ProductUserInput />
            
        </div>
    )
}

export default Product;