import React from 'react';
import { Link } from 'react-router-dom';

const Header=()=>{
    return(
        <div sx={{
            textAlign:'Right'
        }}>
            <ul className="header-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
            </ul>
        </div>
    )
}
export default Header;