import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Col } from 'reactstrap';

function Sidebar() {
    return (
        <Col md="2" className={`sidebar`}>
            <Nav vertical>
                <NavItem>
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </NavItem>
                <NavItem>
                    <Link to="/product" className="nav-link">Product</Link>
                </NavItem>
                <NavItem>
                    <Link to="/setting" className="nav-link">Setting</Link>
                </NavItem>
                <NavItem>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </NavItem>
            </Nav>
        </Col>
    );
}

export default Sidebar;
