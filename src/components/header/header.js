import React from 'react'
import './header.scss';
import {
    Link
} from 'react-router-dom'
const Header = () => {
    return (
        <header className="header" >
            <section className="header-logo-links" >
                <div className="header-width" >
                    <div className="logo-wrapper" >
                        <div className="logo-container" >
                            <div className="logo"> </div>
                            <div className="image-container" >
                                <a href="#" >
                                    <img className="company-logo" src={require('../../cs/cop/assets/images/avaya_logo_onecare_@2.png')}
                                        alt="AMSP & CVT REPORT UI" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header >
    )
}

export default Header;