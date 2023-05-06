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
                <label>Main motive of text:</label>
                <input
                    type="text"
                    placeholder="Try 'Achievement letter', 'Motivation analysis', 'Development feedback' ..."
                    required
                    onChange={(e) => setTopInput(e.target.value)}
                />
                <label>Give us some clues about the student:</label>
                <textarea
                    required
                    placeholder="Keep in mind key points:
                                    - What student did well?
                                    - Did he face problems?
                                    - How consistent he have been?
                                    - Set time period you want to describe
                                
                        
                                    Feel free, describe what is most important at the moment.
                                "
                    onChange={(e) => setMidInput(e.target.value)}
                />
                <label>How strict you want to sound:</label>
                <select
                    onChange={(e) => setLowInput(e.target.value)}
                >
                    <option value="Strict">Strict</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Friendly">Friendly</option>
                </select>
                <label>Additional information:</label>
                <div className="checkbox-grid">
                    <label class="container">Solutions
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Psychological Suggestions
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Discussion Plan
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <button>Finish</button>
            </from>
        </div>
    )
}