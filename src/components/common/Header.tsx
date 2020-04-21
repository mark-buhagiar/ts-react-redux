import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
    const activeStyle = { color: 'orange' };

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Home
            </NavLink>
            {' | '}
            <NavLink to="/courses" activeStyle={activeStyle} exact>
                Courses
            </NavLink>
            {' | '}
            <NavLink to="/about" activeStyle={activeStyle}>
                About
            </NavLink>
        </nav>
    );
};

export default Header;
