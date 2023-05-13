import React, { useState } from 'react'
import MainContent from "../components/MainContent"
import NavBar from "../components/NavBar";
import LanguageBar from "../components/LanguageTopHeader"

function Home() {
    const [selected, setSelected] = useState("English")
    
    return (
            <div>
                <LanguageBar selected={selected} setSelected={setSelected}/>
                <NavBar 
                    navLocation={1}
                />
                <MainContent />
            </div>
    )
}

export default Home;