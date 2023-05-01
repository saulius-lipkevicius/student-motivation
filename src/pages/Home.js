import React, { useState } from 'react'
import LanguageTopHeader from "../components/LanguageTopHeader"
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import Button from '@mui/material/Button';


function Home() {
    const [selected, setSelected] = useState("English")

    return (
            <div>
                <LanguageTopHeader selected={selected} setSelected={setSelected}/>
                <Header />
                <MainContent />
                <Button variant="contained">Contained</Button>
            </div>
            
    )
}

export default Home;