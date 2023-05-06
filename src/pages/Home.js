import React, { useState } from 'react'
import MainContent from "../components/MainContent"
import NavBar from "../components/NavBar";


function Home() {
    const [selected, setSelected] = useState("English")
    // <LanguageTopHeader selected={selected} setSelected={setSelected}/>
    return (
            <div>
                <NavBar 
                    navLocation={1}
                />
                <MainContent />
            </div>
    )
}

export default Home;