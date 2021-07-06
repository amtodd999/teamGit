import React from 'react';
import logo from './assets/defenders-brain-hurt-api-logo.png'

const Header = () => {
    return(
        <div className="headerBg">
            <img src={logo} alt="Logo" className="headerLogo" style={{width: "15%", height: "auto"}}/>
        </div>
    )
}

export default Header;