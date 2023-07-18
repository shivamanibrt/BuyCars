import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config';
import { setUser } from '../Redux/User/userSlice';
import { toast } from 'react-toastify';
import { Cart } from '../Pages/Cart/Cart'

export const NavigationBar = () => {

    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isCartOpen, setCartOpen] = useState(false);
    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

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
                                <Nav.Link className="icon-link" onClick={() => setCartOpen(!isCartOpen)}>
                                    <AiOutlineShoppingCart />
                                </Nav.Link>
                                {isCartOpen && <Cart isOpen={isCartOpen} toggleCart={toggleCart} />}
                                {user?.role === 'admin' && (
                                    <Nav.Link as={Link} to="/dashboard" className="icon-link">
                                        <Button variant="outline-light" style={{ borderRadius: '0' }}>Dashboard</Button>
                                    </Nav.Link>
                                )}

                                <Nav.Link as={Link} to="/" className="icon-link">
                                    <Button variant="outline" style={{ borderRadius: '0' }} className='btn btn-danger' onClick={handleOnLogout}>Log Out</Button>
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link className="icon-link" onClick={() => setCartOpen(!isCartOpen)}>
                                    <AiOutlineShoppingCart />
                                </Nav.Link>
                                {isCartOpen && <Cart isOpen={isCartOpen} toggleCart={toggleCart} />}

                                <Nav.Link as={Link} to="/login" style={{ borderRadius: '0' }} className="icon-link" >
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
