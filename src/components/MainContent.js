import React from "react"
import headerLogo from "../images/homegood.png"
import style from "../css/Home.css"
import { useTranslation } from 'react-i18next'


export default function MainContent() {
    const { t } = useTranslation('translation', { keyPrefix: 'Home' });
    
    return (
        <section className='about'>
            <div className='row'>
                <div className='column-text'>
                    <div className='tab-content'>
                        <h2 className="item1">{t('Moto')}</h2>
                        <p className="item2">{t('Description')}</p>
                    </div>
                    <div class="item4">
                        <form className="form">
                            <input
                                type="text"
                                placeholder={t('Email')}
                                className="form--input"
                            />
                            <button className="form--button">
                                {t('Button')}
                            </button>
                        </form>
                    </div>
                    <div class="item5">{t('Notice')}</div>
                </div>
                <div className='column'>
                    <div className='home-image'>
                        <img src={headerLogo} className='about-img' alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    )
}