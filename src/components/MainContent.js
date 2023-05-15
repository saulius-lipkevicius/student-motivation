import React from "react"
import headerLogo from "../images/homegood.png"
import style from "../css/Home.css"
import { useTranslation } from 'react-i18next'
import i18n from '../i18n.js'


export default function MainContent() {
    const { t, i18next } = useTranslation('translation', { keyPrefix: 'Home' });
    const text = t('Moto'); // "here"
    console.log(text);
    return (

        <section className='about'>
            <div className='row'>
                <div className='column-text'>
                    <div className='tab-content'>
                        <h2 className="item1">{text}aaa</h2>
                        <p className="item2">
                            Automate pupil development feedback, eliminate the back-and-forth
                            information summarization and guide students with new ideas </p>
                    </div>
                    <div class="item4">
                        <form className="form">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="form--input"
                            />
                            <button className="form--button">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div class="item5">We will let you know when product advances</div>
                </div>
                <div className='column'>
                    <div className='home-image'>
                        <img src={headerLogo} className='about-img'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}