import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCarbyId } from '../../Redux/Car/CarAction';

export const CardComponent = ({ carId, carImg, description, backgroundColor, price, carMake, carModel }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(fetchCarbyId(carId));
        navigate(`/buyCar/${carId}`);
    };

    return (
        <div>
            <Card className="text-center border p-3" style={{ backgroundColor, height: '300px' }}>
                <Card.Img src={carImg} className="card-img-filter" onClick={handleOnClick} />
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-dark">{carModel}</Card.Title>
                </Card.Body>
            </Card>
            <div className='mb-4'>
                <p>{carMake}{description?.slice(0, 42)}</p>
                {price && <p>$ {price}</p>}
            </div>
        </div>
    );
};
