import React from 'react';
import Card from 'react-bootstrap/Card';

export const CardComponent = ({ carModal, carImg, description }) => {
    return (
        <Card className="text-center border-0 p-3" style={{ height: '150px', width: '200px', margin: '4px' }}>
            <Card.Img src={carImg} className="card-img-filter" width={100} />
            <Card.Body>
                <Card.Title className="text-dark">{carModal}</Card.Title>
                <Card.Text className="text-light">{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};
