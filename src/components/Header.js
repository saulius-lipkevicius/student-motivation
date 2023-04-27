import React from "react"
import headerLogo from "../images/testas.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={headerLogo} width="60px" />
                <h3 className="nav-name">Name</h3>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Product</li>
                    <li>About us</li>
                </ul>
            </nav>
        </header>
    )
}