import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const NavigationBar = () => {
    const user = !true;
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            style={{ fontSize: '20px' }}
            className="nav-bar bg-dark"
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className="text-center d-lg-block">
                    BuyCars
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/about" >
                            ABOUT
                        </Nav.Link>
                        <Nav.Link as={Link} to="/catagories" >
                            CATAGORIES
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/search" className="icon-link">
                                    <BsSearch />
                                </Nav.Link>
                                <Nav.Link as={Link} to="/favourite" className="icon-link">
                                    <AiOutlineHeart />
                                </Nav.Link>
                                <Nav.Link as={Link} to="/cart" className="icon-link">
                                    <AiOutlineShoppingCart />
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login" className="icon-link">
                                    <Button variant="outline-light">Login / SignUp</Button>
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/search" className="icon-link">
                                    <BsSearch />
                                </Nav.Link>
                                <Nav.Link as={Link} to="/adminLayout" className="icon-link">
                                    <Button variant="outline-light">Dashboard </Button>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};
