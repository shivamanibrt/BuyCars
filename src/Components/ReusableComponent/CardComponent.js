import React from 'react';
import { Card } from 'react-bootstrap';

export const CardComponent = ({ carModal, carImg, description, backgroundColor, price }) => {
    return (
        <>
            <Card className="text-center border p-3" style={{ backgroundColor }}>
                <Card.Img src={carImg} className="card-img-filter" />
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-dark">{carModal}</Card.Title>
                </Card.Body>
            </Card>
            <div>
                <p>{description} </p>
                <p>{price}</p>
            </div>

        </>
    );
};
