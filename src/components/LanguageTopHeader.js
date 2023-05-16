import React, { useState } from "react"
import headerLogo from "../images/world.png"
import { useTranslation } from 'react-i18next'
import i18n from '../i18n.js'


export default function LanguageTopHeader({selected, setSelected}) {
    const { t} = useTranslation('translation', { keyPrefix: 'Nav.LanguageBar' });

    const [isActive, setIsActive] = useState(false);
    const options = [t('English'), t('Lithuanian')]

    function handleLanguage(lang) {
        i18n.changeLanguage(lang);
        options.foo = [t('English'), t('Lithuanian')]
    }

    return (
        <div className="language-nav">
            <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                    <img className="btnimg" src={headerLogo} alt="" />
                    <div className="text-arrow">
                        {t(selected)}
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((option) => (
                            <div onClick={(e) => {
                                setIsActive(false)
                                setSelected(option) 
                                option === 'English' || option === 'Anglų' ? handleLanguage('en') : handleLanguage('lt')
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