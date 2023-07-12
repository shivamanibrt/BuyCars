import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCartAction } from '../../Redux/Cart/CartAction';
import { motion } from 'framer-motion';



export const Cart = ({ isOpen, toggleCart }) => {
    const { cart } = useSelector(state => state.cart);
    // const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

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
    }, [dispatch, cart]); // Add cart as a dependency

    const cartVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        exit: { opacity: 0, x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
    };

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
            <Container className="cart-content mt-4">
                <h3>Items in Cart</h3>
                <ul className="list-unstyled">
                    {cart.map((item, i) => (
                        <li key={i}>
                            <Row>
                                <Col>{item.carPrice}</Col>
                                <Col>{item.carId}</Col>
                            </Row>
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-3">
                    <Button variant="outline-success" className="col-10">
                        Checkout <MdOutlineShoppingCartCheckout style={{ fontSize: '25' }} />
                    </Button>
                </div>
            </Container>

        </motion.div>
    );
};
