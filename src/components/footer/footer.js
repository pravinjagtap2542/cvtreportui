import React from 'react';
import '../footer/footer.scss'

import { Link } from 'react-router-dom'
 const Footer = ()=>{
    return(
        <footer className="footer">
        <div className="footer-links">
            <div className="logo"></div>
            <div className="links">
                <p>
                    <a href="/">Terms of Use</a>
                </p>
                <p>
                    <a href="/">Cookies</a>
                </p>
    
                <p>
                    <a href="/">Privacy</a>
                </p>
                <p>
                    <a href="/">Accessibility</a>
                </p>
    
            </div>
            <div className="copyright">
                <p> © 2020 Avaya Inc. </p>
            </div>
        </div>
    </footer>
   
        
    )
}

export default Footer;