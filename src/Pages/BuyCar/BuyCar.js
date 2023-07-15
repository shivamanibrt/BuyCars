import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CardComponent } from '../../Components/ReusableComponent/CardComponent';
import { fetchCarbyId, getAllCarsAction } from '../../Redux/Car/CarAction';
import { useNavigate, useParams } from 'react-router-dom';
import { createNewCartAction } from '../../Redux/Cart/CartAction';
import { toast } from 'react-toastify';
import { Icons } from '../../Icons/Icons';

export const BuyCar = () => {
    const { id } = useParams();
    const { selectedCar } = useSelector((state) => state.car);
    const { car } = useSelector((state) => state.car);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const backgroundColor = '#F0F0F0';


    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchCarbyId(id));
        dispatch(getAllCarsAction(filterSelectedCar));
    },);


    // Filter similar cars based on selected car model
    const filterSelectedCar = car.filter(
        (carItem) => carItem.carType === selectedCar.carType
    );

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleCheckout = () => {
        if (user?.uid) {
            const cartObj = {
                userId: user.uid,
                carId: selectedCar.id,
                firstName: user.fName,
                lastName: user?.lName,
                carPrice: Number(selectedCar.carPrice * quantity),
                carMake: selectedCar.carMake,
                quantity: quantity,
                carImg: selectedCar.carImg
            };

            dispatch(createNewCartAction(cartObj));
        } else {
            toast.error('Please login first');
            navigate('/login');
        }
    };

    return (
        <div>
            <Container className="mt-5 mb-5 p-5">
                <div>

                    <Row className="align-items-center">
                        <Col xs={12} md={6} lg={4} >
                            <div style={{ background: backgroundColor, height: '350px' }}>
                                <Image
                                    className='buycar-img'
                                    src={selectedCar.carImg}
                                    alt={selectedCar.carModal}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </Col>
                        <Col xs={10} md={6} lg={6} className="d-flex align-items-center mt-3">
                            <div className="p-2 ">
                                <p><strong>{selectedCar.carMake}</strong></p>
                                <p style={{ color: '#4e4feb' }}><strong>$ {selectedCar.carPrice}</strong></p>
                                <p>{selectedCar.description}</p>
                                <div className="d-flex flex-wrap align-items-center justify-content-start ">
                                    <div className="d-flex border me-2 gap-2">
                                        <div className="border-end p-2 btn-decrease" onClick={handleDecrease}>-</div>
                                        <div className="p-2">{quantity}</div>
                                        <div className="border-start p-2 btn-increase" onClick={handleIncrease}>+</div>
                                    </div>
                                    {" "}
                                    <div>
                                        <Button onClick={handleCheckout} style={{ background: '#4e4feb' }}>
                                            <AiOutlineShoppingCart size={25} /> Add to cart
                                        </Button>
                                    </div>
                                </div>
                                <hr />

                                <p className='mt-2' ><strong>Category: </strong>{selectedCar.carType}</p>
                                <div>
                                    <Row>
                                        <p style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ marginRight: '5px' }}><strong>Share</strong>:</span>
                                            <Icons />
                                        </p>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <h4 className="mb-4 h4">Related Products</h4>
                <Row className="text-align-right d-flex flex-wrap">
                    {filterSelectedCar.map((item, i) => (
                        <Col key={item.id} sm={6} md={4} lg={3} className="d-flex flex-wrap mt-4">
                            <CardComponent
                                carId={item.id}
                                backgroundColor={backgroundColor}
                                carImg={item.carImg}
                                carType={item.carType}
                                price={item.carPrice}
                                carMake={item.carMake}
                                description={item.description}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
