import React, { Fragment, useState } from 'react'
import styles from "../css/About.css"
import mainImage from "../images/about-1.jpg"

function AboutBody() {
    const [toggleTab, setToggleTab] = useState(2)

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
                            <div className={toggleTab === 1 ? 'single-tab-active' : 'single-tab'} onClick={() => setToggleTab(1)}>
                                <h2>About</h2>
                            </div>
                            <div className={toggleTab === 2 ? 'single-tab-active' : 'single-tab'} onClick={() => setToggleTab(2)}>
                                <h2>Idea</h2>
                            </div>
                            <div className={toggleTab === 3 ? 'single-tab-active' : 'single-tab'} onClick={() => setToggleTab(3)}>
                                <h2>Contacts</h2>
                            </div>
                        </div>

                        <div className='tab-content'>
                            <div className={toggleTab === 1 ? 'content active' : 'content'} onClick={() => setToggleTab(1)}>
                                <p>This is Beta version. Check out for new features soon.
                                </p>
                            </div>
                        </div>

                        <div className='tab-content'>
                            <div className={toggleTab === 2 ? 'content active' : 'content'} onClick={() => setToggleTab(2)}>
                                <p>Website is created for students and teachers to collaborate to generate short, concise abstracts about
                                    studying problems and development. Our platform is designed to promote learning and foster
                                    creativity by providing ideas and insights that would take long time to research for a teacher himself.
                                    However, be careful and always double check information that is given to you, every case is different.
                                </p>
                            </div>
                        </div>

                        <div className='tab-content'>
                            <div className={toggleTab === 3 ? 'content active' : 'content'} onClick={() => setToggleTab(3)}>
                                <p>Email to reach out: saulius43@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutBody;