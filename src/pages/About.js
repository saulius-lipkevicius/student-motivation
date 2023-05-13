import React, { useState } from 'react'
import NavBar from "../components/NavBar";
import AboutBody from "../components/AboutBody"
import LanguageBar from "../components/LanguageTopHeader"

function About() {
    const [selected, setSelected] = useState("English")
    
    return (
        <div>
            <LanguageBar selected={selected} setSelected={setSelected}/>
            <NavBar 
                navLocation={3}
            />
            <AboutBody/>
        </div>
    )
}

export default About;