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

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchCarbyId(id));
        dispatch(getAllCarsAction(filterSelectedCar));
    }, [dispatch, id,]);

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
                quantity: quantity
            };
            console.log(cartObj);
            dispatch(createNewCartAction(cartObj));
        } else {
            toast.error('Please login first');
            navigate('/login');
        }
    };

    return (
        <div>
            <Container className="mt-5 mb-5 shadow p-5">
                <div>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} lg={4}>
                            <Image
                                src={selectedCar.carImg}
                                alt={selectedCar.carModal}
                                style={{ width: '100%' }}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={8} className="d-flex align-items-center mt-3">
                            <div className="p-4 border">
                                <p>{selectedCar.carMake}</p>
                                <p>$ {selectedCar.carPrice}</p>
                                <p>{selectedCar.description}</p>
                                <div className="d-flex flex-wrap align-items-center justify-content-start ">
                                    <div className="d-flex border gap-2" >
                                        <div className="border-end p-2 btn-decrease" onClick={handleDecrease}>-</div>
                                        <div className="p-2">{quantity}</div>
                                        <div className="border-start p-2 btn-increase" onClick={handleIncrease}>+</div>
                                    </div>
                                    {" "}
                                    <div className='ms-2 '>
                                        <Button onClick={handleCheckout}>
                                            <AiOutlineShoppingCart size={25} /> Add to cart
                                        </Button>
                                    </div>
                                </div>

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
                <h4 className="mb-4 h4">Similar Products</h4>
                <Row className="text-align-right d-flex flex-wrap">
                    {filterSelectedCar.map((item, i) => (
                        <Col key={item.id} sm={6} md={4} lg={3} className="d-flex flex-wrap mt-4">
                            <CardComponent
                                carId={item.id}
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
