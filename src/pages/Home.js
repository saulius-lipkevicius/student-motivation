import React, { useState } from 'react'
import LanguageTopHeader from "../components/LanguageTopHeader"
import MainContent from "../components/MainContent"
import NavBar from "../components/NavBar";


function Home() {
    const [selected, setSelected] = useState("English")

    return (
            <div>
                <LanguageTopHeader selected={selected} setSelected={setSelected}/>
                <NavBar 
                    navLocation={1}
                />
                <MainContent />
            </div>
    )
}

export default Home;