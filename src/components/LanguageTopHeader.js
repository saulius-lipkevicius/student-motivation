import React, { useState } from "react"
import headerLogo from "../images/world.png"
import { useTranslation } from 'react-i18next'
import i18next from "../i18next.js";


export default function LanguageTopHeader({selected, setSelected}) {
    //const { t, i18n } = useTranslation('translation', {keyPrefix: 'Thanks'});
    //i18next.changeLanguage('lt');
    const [isActive, setIsActive] = useState(false);
    const options = ["English", "Lithuanian"]

    function handleLanguage(lang) {
        i18next.changeLanguage(lang)
    }
    
    const { t, i18next } = useTranslation('translation', { keyPrefix: 'very.deeply.nested' });
    
    const text = t('key'); // "here"
    //i18next.changeLanguage('en-US')
    console.log(text);

    return (
        <div className="language-nav">
            <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                    <img class="btnimg" src={headerLogo} alt="" />
                    <div class="text-arrow">
                        {selected}
                        <i class="fa-solid fa-caret-down"></i>
                        
                    </div>
                    
                </div>
                <p>{t("key")}</p>
                        {text}
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((option) => (
                            <div onClick={(e) => {
                                setSelected (option) 
                                setIsActive(false)
                                handleLanguage('lt')
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