import React from 'react';
import { Link } from "react-router-dom";
import { txtNav, txtHeader } from '../../../../constants/header';

import './index.scss';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <h1>
                        <Link className="navItem"  to="/">
                            { txtHeader }
                        </Link>
                    </h1>
                </li>
                <li>
                    <Link className="navItem"  to='/Login-signu'>
                        { txtNav.txtNavUser }
                    </Link>        
                </li>

                <li>
                    <Link className="navItem"  to="/how-it-work">
                        { txtNav.txtNavItem2 }
                    </Link>
                </li>

                <li>
                    <Link className="navItem"  to="/past-trial">
                        { txtNav.txtNavItem1 }
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;