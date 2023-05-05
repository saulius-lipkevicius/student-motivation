import React, { useState } from "react"
import styles from "../css/ProductUserForms.css"


export default function ProductUserInput() {
    const [topInput, setTopInput] = useState('')
    const [midInput, setMidInput] = useState('')
    const [lowInput, setLowInput] = useState('mario')
 
    return (
        <div className="create">   
            <h2>Generate students motivation abstract</h2>
            <from>
                <label>Main motive of summary</label>
                <input
                    type="text"
                    required
                    onChange={ (e) => setTopInput(e.target.value)}
                />
                <label>Give us some clues about the student</label>
                <textarea
                    required
                    onChange={ (e) => setMidInput(e.target.value)}
                />
                <label>How strict you want to sound</label>
                <select
                    onChange={ (e) => setLowInput(e.target.value)}
                >
                    <option value="Strict">Strict</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Friendly">Friendly</option>
                </select>
                <button>Finish</button>
            </from>
        </div>
    )
}