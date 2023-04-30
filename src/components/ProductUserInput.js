import React from "react"

export default function ProductUserInput() {
    return (
        <div>
            <div class="grid-container-product">
                <div class="product-input">
                    <form className="form--product">
                        <input 
                            type="text"
                            placeholder="Enter your email"
                            className="form--input--product"
                        />
                        
                    </form>
                </div>
                <div class="product--input--description">
                    <span>
                        <pre>
                            - describe thing I
                            - describe thing II
                        </pre>

                        <pre>
                            - describe thing I
                            - describe thing II
                        </pre>

                        <pre>
                            - describe thing I
                            - describe thing II
                        </pre>

                    </span>
                        
             
                </div>
            </div>
            <button
                            className="form--button"
                            //</div>onClick={submitEmail}
                        >
                            Submit
                </button>
        </div>
            
    )
}