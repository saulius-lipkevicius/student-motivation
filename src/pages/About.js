import React, { useState } from 'react'
import LanguageTopHeader from "../components/LanguageTopHeader"
import MainContent from "../components/MainContent"
import NavBar from "../components/NavBar";
import AboutBody from "../components/AboutBody"


function About() {
    const [selected, setSelected] = useState("English")
    // <LanguageTopHeader selected={selected} setSelected={setSelected}/>
    return (
        <div>
            
            <NavBar 
                navLocation={3}
            />
            <AboutBody/>
        </div>
    )
}

export default About;