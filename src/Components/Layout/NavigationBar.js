import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { GiExpense } from 'react-icons/gi';
import { GoDashboard } from 'react-icons/go';
import { FiLogOut } from 'react-icons/fi';
import { FiLogIn } from 'react-icons/fi';
import { GiArchiveRegister } from 'react-icons/gi';

export const NavigationBar = () => {
    return (
        <>
            <Container>
                <Navbar >
                    <Container fluid>
                        <Navbar.Brand href="/login">
                            <GiExpense />Expense</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            </Nav>
                            <Nav>

                                <Nav.Link as={Link} to="/dashboard">
                                    Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/" ><FiLogOut /> Logout</Nav.Link>


                                <Nav.Link as={Link} to="/"><FiLogIn /> Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </Container>
        </>
    )
}
