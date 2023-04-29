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
                    <li><Link to="/">Home</Link></li>
                
                    <li><Link to="/product">Product</Link></li>
                
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}