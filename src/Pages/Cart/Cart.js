import { useEffect } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
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
    const backgroundColor = '#F0F0F0';

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

    const handelOnCheckout = () => {
        navigate('./checkout');
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
            <div className='cart-content'>
                <Row>
                    <Col><strong>SHOPPING CART</strong></Col>
                    <Col>
                        <div onClick={toggleCart} className="btn-toggle text-secondary">
                            <div style={{ fontSize: '16px' }} >
                                <AiOutlineClose className="btn-close me-2 p-2 border-0" />CLOSE
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                {user?.uid ? (
                    <Container>
                        {userCart.length > 0 ? (
                            <ul className="list-unstyled">
                                {userCart.map((item, i) => (
                                    <li key={i}>
                                        <Col className='me-2' style={{ minWidth: '150px' }}>
                                            <div className="d-flex align-items-center">
                                                <div style={{ background: backgroundColor, padding: '5px' }}>
                                                    <Image src={item.carImg} alt='Car' fluid style={{ width: '100%', maxWidth: '50px' }} />
                                                </div>
                                                <div className="ms-2">
                                                    <div>{item.carMake}</div>
                                                    <div style={{ color: '#4e4feb' }}>$ {item.carPrice}</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <Button variant="warning" onClick={() => handleOnDelete(item.id)} style={{ borderRadius: '0' }}>
                                                        <AiFillDelete />
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>

                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Item in cart is blank</p>
                        )}

                        <div className="btn-checkout ">
                            <hr />
                            <Row className='mb-3'>
                                <Col><strong>SUBTOTAL :</strong> </Col>
                                <Col style={{ color: '#4e4feb' }}>${totalPrice}</Col>
                            </Row>
                            <hr />
                            <Row>
                                <Button style={{ background: '#4e4feb', borderRadius: '0' }} onClick={handelOnCheckout}>
                                    Checkout
                                </Button>
                            </Row>
                        </div>
                    </Container>
                ) : (
                    <div className="mt-4 p-2">
                        <h4><strong> No user found</strong></h4>
                        <p>Please login to view the cart and order cars.</p>
                        <Row>
                            <Button onClick={handleOnLogin} className="p-2 mt-5 btn-login" style={{ background: '#4e4feb' }}>
                                Login
                            </Button>
                        </Row>

                    </div>
                )}
            </div>
        </motion.div >
    );
};
