import React, { useState } from "react"
import LanguageTopHeader from "./LanguageTopHeader"
import Header from "./Header"
import MainContent from "./MainContent"

export default function App() {
    const [selected, setSelected] = useState("English")

    return (
        <div>
            <LanguageTopHeader selected={selected} setSelected={setSelected}/>
            <Header />
            <MainContent />
        </div>
    )
}