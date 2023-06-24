import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const NavigationBar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            style={{ fontSize: '20px' }}
            className='nav-bar bg-dark'
        >
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ fontSize: '30px', marginLeft: '15px' }}>
                    BuyCars
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/">ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="/">CATEGORIES</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/search" className="icon-link"><BsSearch /></Nav.Link>
                        <Nav.Link as={Link} to="/favourite" className="icon-link"><AiOutlineHeart /></Nav.Link>
                        <Nav.Link as={Link} to="/cart" className="icon-link"><AiOutlineShoppingCart /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
