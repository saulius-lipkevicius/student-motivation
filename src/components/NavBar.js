import React, { useState } from "react"
import styles from "../css/NavBarStyles.css"
import { Link } from "react-router-dom";
import logo from "../images/logo2.png" 
import { useTranslation } from 'react-i18next'

function NavBar(props) {
    const { t } = useTranslation('translation', { keyPrefix: 'Nav' });

    const [ toggleNav, setToggleNav ] = useState(false)
    
        return(
            <div>
                <nav className={styles.nav}>
                    <a href="/">
                        <img id="logo-img" src={logo} alt=""/>
                    </a>
                    <div>
                        <ul id="navbar" className={toggleNav ? "#navbar active" : "#navbar"} onClick={ () => setToggleNav(!toggleNav)}>
                            <li><Link to="/" className={props.navLocation === 1 ? "active" : "header-item"}>{t('Home')}</Link></li>
                            <li><Link to="/product" className={props.navLocation === 2 ? "active" : "header-item"} >{t('Product')}</Link></li>
                            <li><Link to="/about" className={props.navLocation === 3 ? "active" : "header-item"} >{t('About')}</Link></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={ () => setToggleNav(!toggleNav)}>
                        <i id="bar" className={toggleNav ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </div>
        )
    }


export default NavBar;