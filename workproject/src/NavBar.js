import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <li><Link to="/Party">Search by Participants</Link></li>
            <li><Link to="/ByKey">Search by Key</Link></li>
            <li><Link to="/Act">Print 10 Activity</Link></li>

        </ul>
    )
}

export default NavBar;