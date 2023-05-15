import React, { useState } from "react"
import headerLogo from "../images/world.png"
import { useTranslation } from 'react-i18next'
import i18n from '../i18n.js'


export default function LanguageTopHeader({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ["English", "Lithuanian"]
    
    const { t, i18next } = useTranslation('translation', { keyPrefix: 'Nav.LanguageBar' });
    const text = t('English'); // "here"

    function handleLanguage(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="language-nav">
            <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                    <img className="btnimg" src={headerLogo} alt="" />
                    <div className="text-arrow">
                        {selected}
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((option) => (
                            <div onClick={(e) => {
                                setSelected (option) 
                                setIsActive(false)
                                
                                option == 'English' ? handleLanguage('en') : handleLanguage('lt')
                            }
                        }className="dropdown-item">
                        {option} 
                    </div>
                    ))}
                </div>
                )}
            </div>
        </div>
        
    );
}