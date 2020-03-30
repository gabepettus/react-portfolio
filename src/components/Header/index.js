import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarBrand
} from 'reactstrap';

import './style.css';

const Header = (props) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(props);
    // const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            {/* <Navbar expand='md' className='header justify-content-center' fixed='top'> */}
            <Navbar expand='md' fixed='top'>
                {/* <NavbarBrand href="/" className="mr-auto navbar header">MENU</NavbarBrand> */}
                {/* <NavbarToggler onClick={toggle} /> */}
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto navbar justify-content-center fixed-top header'>
                        <NavItem>
                            <Link to='/home' className='btn m-2 btn-success'>HOME</Link>
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
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default Header;