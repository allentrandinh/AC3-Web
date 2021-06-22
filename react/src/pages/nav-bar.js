import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='navbar'>
        <nav>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='./data'>Collected Data</Link>
                </li>
                <li>
                    <Link to='./baseranking'>Base Ranking</Link>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default NavBar;