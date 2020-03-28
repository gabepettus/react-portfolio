import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar expand='md'>
            {/* <a className='navbar-brand' >Gabe</a> */}
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <Link to='/home' className='btn m-2 btn-success'>GABE</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/about' className='btn m-2 btn-success'>ABOUT</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/portfolio' className='btn m-2 btn-success'>PORTFOLIO</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/resume' className='btn m-2 btn-success'>RESUME</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/contact' className='btn m-2 btn-success'>CONTACT</Link>
                        </NavItem>
                        {/* <NavItem> <NavLink className='m-2' href='https://github.com/gabepettus' target='_blank'><FontAwesomeIcon icon={faGithub} /></NavLink> </NavItem> */}
                        {/* <NavItem> <NavLink className='m-2' href='https://www.linkedin.com/in/gabe-p-b11016189/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></NavLink> </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;