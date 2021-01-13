import React from 'react'
import logo from "./images/H - logo.png";
import './footer.css'

function Footer() {
    return (
        <div className = "footer__main">
            <img alt="logo" src={logo} className ="footerimg"/>
            <p>made with ❤ by <a href="https://www.instagram.com/creative__programmer" target = "_blank">creative__programmer</a> </p>
            <p>© 2021 creativeprogrammer. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
