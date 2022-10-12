import { ClassNames } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header=()=>{
    return(
        <div>
            <ul className="header-ul">
                <li><Link to="/homepage">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
            </ul>
        </div>
    )
}
export default Header;