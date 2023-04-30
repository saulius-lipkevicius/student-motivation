import React from "react"
import headerLogo from "../images/testas.png"
import LanguageTopHeader from "./LanguageTopHeader"

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={headerLogo} className="nav-logo"/>
                <h3 className="nav-name">Name</h3>
                <ul className="nav-items">
                    <li><Link to="/" className="header-item">Home</Link></li>
                    <li><Link to="/product" className="header-item">Product</Link></li>
                    <li><Link to="/about" className="header-item">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}