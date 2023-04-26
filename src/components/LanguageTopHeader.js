import React, { useState } from "react"

export default function LanguageTopHeader({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ["English", "Lithuanian"]
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <i class="fa-solid fa-caret-down"></i>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div onClick={(e) => {
                            setSelected (option) 
                            setIsActive(false)
                        }
                    }className="dropdown-item">
                    {option}
                </div>
                ))}
            </div>
            )}
        </div>
    );
}