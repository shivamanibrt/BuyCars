import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config';
import { setUser } from '../Redux/userSlice';
import { toast } from 'react-toastify';

export const NavigationBar = () => {

    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch(setUser({}));
                toast.success('User logged out');
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }


    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            style={{ fontSize: '20px' }}
            className="nav-bar bg-dark" a
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
                        <Nav.Link as={Link} to="/catgories" >
                            CATAGORIES
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {user?.uid ? (
                            <>
                                <Nav.Link as={Link} to="/search" className="icon-link">
                                    <BsSearch />
                                </Nav.Link>
                                {user?.role === 'admin' && (
                                    <Nav.Link as={Link} to="/dashboard" className="icon-link">
                                        <Button variant="outline-light">Dashboard</Button>
                                    </Nav.Link>
                                )}
                                <Nav.Link as={Link} to="/" className="icon-link">
                                    <Button variant="outline" className='btn btn-danger' onClick={handleOnLogout}>Log Out</Button>
                                </Nav.Link>
                            </>
                        ) : (
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
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};
