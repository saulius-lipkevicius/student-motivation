import React, { Fragment, useState } from 'react'
import styles from "../css/About.css"
import mainImage from "../images/about-1.jpg"
import { useTranslation } from 'react-i18next'

function AboutBody() {
    const [toggleTab, setToggleTab] = useState(2)

    const { t } = useTranslation('translation', { keyPrefix: 'About' });

    return (
        <Fragment>
            <section className='about'>
                <div className='row'>
                    <div className='column'>
                        <div className='about-img-div'>
                            <img src={mainImage} className='about-img' alt=""></img>
                        </div>
                    </div>
                    <div className='column2'>

                        <div className='tabs'>
                            <div className={toggleTab === 1 ? 'single-tab-active' : 'single-tab'} onClick={() => setToggleTab(1)}>
                                <h2>{t('About.Title')}</h2>
                            </div>
                            <div className={toggleTab === 2 ? 'single-tab-active' : 'single-tab'} onClick={() => setToggleTab(2)}>
                                <h2>{t('Idea.Title')}</h2>
                            </div>
                            <div className={toggleTab === 3 ? 'single-tab-active' : 'single-tab'} onClick={() => setToggleTab(3)}>
                                <h2>{t('Contacts.Title')}</h2>
                            </div>
                        </div>

                        <div className='tab-content'>
                            <div className={toggleTab === 1 ? 'content active' : 'content'} onClick={() => setToggleTab(1)}>
                                <p>{t('About.Text')}
                                </p>
                            </div>
                        </div>

                        <div className='tab-content'>
                            <div className={toggleTab === 2 ? 'content active' : 'content'} onClick={() => setToggleTab(2)}>
                                <p>{t('Idea.Text')}</p>
                            </div>
                        </div>

                        <div className='tab-content'>
                            <div className={toggleTab === 3 ? 'content active' : 'content'} onClick={() => setToggleTab(3)}>
                                <p>{t('Contacts.Text')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutBody;