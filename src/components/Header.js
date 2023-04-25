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
                    <li>About us</li>
                    <li>How it works</li>
                    <li>FAQs</li>
                </ul>
            </nav>
        </header>
    )
}