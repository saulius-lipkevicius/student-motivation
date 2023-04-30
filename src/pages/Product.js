import React, { useState } from 'react'
import LanguageTopHeader from "../components/LanguageTopHeader"
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import ProductUserInput from '../components/ProductUserInput'

function Product() {
    const [selected, setSelected] = useState("English")

    return (
        <div>
            <LanguageTopHeader selected={selected} setSelected={setSelected}/>
            <Header />
            <ProductUserInput />
        </div>
    )
}

export default Product;