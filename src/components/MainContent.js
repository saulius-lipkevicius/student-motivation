import React from "react"
import headerLogo from "../images/homegood.png"
import style from "../css/Home.css"

export default function MainContent() {
    return (

        <section className='about'>
            <div className='row'>
                <div className='column-text'>
                    <div className='tab-content'>
                        <h2 className="item1">Easy feedback ahead</h2>
                        <p className="item2">NAME is your feedback automation platform for elimination the back-and-forth summarization for finding the perfect info - and so more</p>
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