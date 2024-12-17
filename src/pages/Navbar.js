import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/cats">Cats</Nav.Link>
                <Nav.Link as={NavLink} to="/homes">Homes</Nav.Link>
                <Nav.Link as={NavLink} to="/cities">Cities</Nav.Link>
                <Nav.Link as={NavLink} to="/dogs">Dogs</Nav.Link>
                <Nav.Link as={NavLink} to="/weapons">Weapons</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default AppNavbar;
