import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItemAction, getAllCartAction } from '../../Redux/Cart/CartAction';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Cart = ({ isOpen, toggleCart }) => {
    const { cart } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = event => {
            if (event.keyCode === 27 && isOpen) {
                toggleCart();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, toggleCart]);

    useEffect(() => {
        dispatch(getAllCartAction());
    }, [dispatch]);

    const cartVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        exit: { opacity: 0, x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
    };

    const calculateTotalPrice = () => {
        const userCart = cart.filter(item => item.userId === user?.uid);
        return userCart.reduce((total, item) => total + item.carPrice, 0);
    };

    const totalPrice = calculateTotalPrice();

    const handleOnDelete = (item) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            dispatch(deleteCartItemAction(item));
        }
    };

    const handleOnLogin = () => {
        navigate('./login');
    };

    const userCart = cart.filter(item => item.userId === user?.uid);

    return (
        <motion.div
            className={`cart-model ${isOpen ? 'open' : ''}`}
            variants={cartVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            exit="exit"
        >
            <div>
                <Button className="btn-toggle" variant="danger" onClick={toggleCart}>
                    <AiOutlineClose style={{ color: 'white', fontSize: '25' }} />
                </Button>
            </div>
            {user?.uid ? (
                <Container className="cart-content mt-4">
                    <h3>Items in Cart</h3>
                    {userCart.length > 0 ? (
                        <ul className="list-unstyled">
                            {userCart.map((item, i) => (
                                <li key={i}>
                                    <Row>
                                        <Col>{item.carMake}</Col>
                                        <Col>$ {item.carPrice}</Col>
                                        <Col>
                                            <Button variant="warning" onClick={() => handleOnDelete(item.id)}>
                                                <AiFillDelete />
                                            </Button>
                                        </Col>
                                    </Row>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Item in cart is blank</p>
                    )}
                    <div className="text-center mt-3">
                        <Row className="mb-3">
                            <Col>Total</Col>
                            <Col>${totalPrice}</Col>
                            <Col></Col>
                        </Row>
                        <Button variant="outline-dark" className="col-12 p-2">
                            Checkout <MdOutlineShoppingCartCheckout style={{ fontSize: '25' }} />
                        </Button>
                    </div>
                </Container>
            ) : (
                <Card style={{}} className="mt-4 p-2 shadow-lg">
                    <Card.Body>
                        <Card.Title>
                            <h3>No user found</h3>
                        </Card.Title>
                        <Card.Text>
                            <p>Please login to view the cart and order cars.</p>
                        </Card.Text>
                        <Row>
                            <Button onClick={handleOnLogin} className="p-2">
                                Login
                            </Button>
                        </Row>
                    </Card.Body>
                </Card>
            )}
        </motion.div>
    );
};
