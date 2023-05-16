import React from 'react'
import ProductUserInput from '../components/ProductUserInput'
import NavBar from "../components/NavBar";
import LanguageBar from "../components/LanguageTopHeader"

function Product({selected, setSelected}) {
    
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