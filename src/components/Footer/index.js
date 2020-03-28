import React from 'react';
import {
    Navbar,
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './style.css';


const Footer = () => {
    return (
        <Navbar expand='md' className="footer">

            <Nav className='mr-auto' navbar>
                <NavItem> 
                    <NavLink className='m-2' href='https://github.com/gabepettus' target='_blank'><FontAwesomeIcon icon={faGithub} /></NavLink>
                </NavItem>
                <NavItem> 
                    <NavLink className='m-2' href='https://www.linkedin.com/in/gabe-p-b11016189/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Footer;