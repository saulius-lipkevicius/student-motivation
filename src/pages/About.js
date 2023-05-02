import React, { useState } from 'react'
import LanguageTopHeader from "../components/LanguageTopHeader"
import Header from "../components/Header"
import MainContent from "../components/MainContent"

function About() {
    const [selected, setSelected] = useState("English")

    return (
        <div>
            <LanguageTopHeader selected={selected} setSelected={setSelected}/>
            <Header />
            
        </div>
    )
}

export default About;