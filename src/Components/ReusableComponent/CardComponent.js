import React from 'react';
import { Card } from 'react-bootstrap';

export const CardComponent = ({ carModal, carImg, description, backgroundColor, price }) => {
    return (
        <>
            <Card className="text-center border p-3" style={{ backgroundColor }}>
                <Card.Img src={carImg} className="card-img-filter" width={100} />
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-dark">{carModal}</Card.Title>
                </Card.Body>
            </Card >
            <Card.Text className="text-dark">{description?.slice(0, 50)}</Card.Text>
            <Card.Text className="text-dark">{price?.slice(0, 50)}</Card.Text>
        </>
    );
};
