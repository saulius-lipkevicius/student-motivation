import React, { useState } from 'react'
import LanguageTopHeader from "../components/LanguageTopHeader"
import Header from "../components/Header"
import MainContent from "../components/MainContent"

function Home() {
    const [selected, setSelected] = useState("English")

    return (
            <div>
                <LanguageTopHeader selected={selected} setSelected={setSelected}/>
                <Header />
                <MainContent />
            </div>
            
    )
}

export default Home;