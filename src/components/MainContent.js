import React from "react"
import headerLogo from "../images/testas.png"

export default function MainContent() {
    return (
            <div class="grid-container">
                <div class="grid-item item1">Easy feedback ahead</div>
                <div class="grid-item item2">
                    <h3>
                        NAME is your feedback automation platform for elimination the back-and-forth summarization for finding the perfect info - and so more
                    </h3>
                </div>
                <div class="grid-item item3">
                    <img src={headerLogo} className="grid-item img"></img>
                </div>  
                <div class="grid-item item4">
                    <form className="form">
                        <input 
                            type="text"
                            placeholder="Enter your email"
                            className="form--input"
                        />
                        <button
                            className="form--button"
                            //</div>onClick={submitEmail}
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div class="grid-item item5">We will let you know when product advances</div>

            </div>

        
        
    )
}