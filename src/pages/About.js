import React, { useState } from 'react'
import LanguageTopHeader from "../components/LanguageTopHeader"
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import TextField from '@mui/material/TextField';

function About() {
    const [selected, setSelected] = useState("English")

    return (
        <div>
            <LanguageTopHeader selected={selected} setSelected={setSelected}/>
            <Header />
            <div>
                <TextField
                        id="filled-multiline-static"
                        label="Student Motivation"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="filled"
                        />

            </div>
            
        </div>
    )
}

export default About;