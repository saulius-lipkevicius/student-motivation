import React from 'react'
import MainContent from "../components/MainContent"
import NavBar from "../components/NavBar";
import LanguageBar from "../components/LanguageTopHeader"

function Home({selected, setSelected}) {
    
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