import React, { Fragment, useState } from 'react'
import styles from "../css/About.css"
import mainImage from "../images/about-1.jpg"

function AboutBody() {
    const [ toggleTab, setToggleTab ] = useState(1)

    return (
        <Fragment>
            <section className='about'>
                <div className='row'>
                    <div className='column'>
                        <div className='about-img-div'>
                            <img src={mainImage} className='about-img'></img>
                        </div>
                    </div>
                    <div className='column2'>

                        <div className='tabs'>
                            <div className={toggleTab === 1 ? 'single-tab-active' : 'single-tab'} onClick={ () => setToggleTab(1)}>                
                                <h2>About</h2>
                            </div>
                            <div className={toggleTab === 2 ? 'single-tab-active' : 'single-tab'} onClick={ () => setToggleTab(2)}>
                                <h2>Idea</h2>
                            </div>
                            <div className={toggleTab === 3 ? 'single-tab-active' : 'single-tab'} onClick={ () => setToggleTab(3)}>
                                <h2>Contacts</h2>
                            </div>
                        </div>

                        <div className='tab-content'>
                            <div className={toggleTab === 1 ? 'content active' : 'content'} onClick={ () => setToggleTab(1)}>
                                <h2>title</h2>
                                <p>lorem3zx\acasd asd asd a0</p>
                            </div>
                        </div>

                        <div className='tab-content'>
                            <div className={toggleTab === 2 ? 'content active' : 'content'} onClick={ () => setToggleTab(2)}>
                                <h2>title2</h2>
                                <p>lorem30 asd asda ear acfd  ad </p>
                            </div>
                        </div>

                        <div className='tab-content'>
                            <div className={toggleTab === 3 ? 'content active' : 'content'} onClick={ () => setToggleTab(3)}>
                                <h2>title3</h2>
                                <p>lorem30 asd   asdasdafd asccafgnhgnmghujkmj lorem30 asd  </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutBody;