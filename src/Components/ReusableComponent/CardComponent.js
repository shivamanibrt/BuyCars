import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CardComponent = ({ carModal, carImg, description, backgroundColor, price }) => {
    return (
        <div>
            <Card className="text-center border p-3" style={{ backgroundColor, height: '80%' }}>
                <Link to="/buyCar">
                    <Card.Img src={carImg} className="card-img-filter" />
                </Link>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-dark">{carModal}</Card.Title>
                </Card.Body>
            </Card>
            <div>
                <p>{description}</p>
                {price && <p>$ {price}</p>}
            </div>
        </div>
    );
};
