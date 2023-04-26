import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

function MainNavbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand>Chat App</NavbarBrand>
                <NavbarToggler onClick={toggleSidebar} />
                <Collapse isOpen={isSidebarOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="#" className="nav-link">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="#" className="nav-link">Services</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="#" className="nav-link">About</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavbar;
