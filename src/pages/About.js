import React, { useState } from 'react'
import LanguageTopHeader from "../components/LanguageTopHeader"
import MainContent from "../components/MainContent"
import NavBar from "../components/NavBar";
import AboutBody from "../components/AboutBody"


function About() {
    const [selected, setSelected] = useState("English")

    return (
        <div>
            <LanguageTopHeader selected={selected} setSelected={setSelected}/>
            <NavBar />
            <AboutBody/>
        </div>
    )
}

export default About;