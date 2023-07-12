import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CardComponent } from '../../Components/ReusableComponent/CardComponent';
import { fetchCarbyId, getAllCarsAction } from '../../Redux/Car/CarAction';
import { useParams } from 'react-router-dom';
import { createNewCartAction } from '../../Redux/Cart/CartAction';

export const BuyCar = () => {
    const { id } = useParams();
    const { selectedCar } = useSelector((state) => state.car);
    const { car } = useSelector((state) => state.car);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    // Filter similar cars based on selected car model
    const filterSelectedCar = car.filter(
        (carItem) => carItem.carType === selectedCar.carType
    );

    useEffect(() => {
        dispatch(fetchCarbyId(id));
        dispatch(getAllCarsAction(filterSelectedCar));
    }, [dispatch, filterSelectedCar, id]);

    const handleCheckout = () => {
        if (user?.uid) {
            const cartObj = {
                userId: user.uid,
                carId: selectedCar.id,
                firstName: user.fName,
                lastName: user?.lName,
                carPrice: Number(selectedCar.carPrice),
            };
            console.log(cartObj);
            dispatch(createNewCartAction(cartObj))
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
                                <p>{selectedCar.carType}</p>
                                <p>$ {selectedCar.carPrice}</p>
                                <p>{selectedCar.description}</p>
                                <Button className="w-100" onClick={handleCheckout}>
                                    <AiOutlineShoppingCart size={25} /> Add to cart
                                </Button>
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
