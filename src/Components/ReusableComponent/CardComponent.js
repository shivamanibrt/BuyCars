import React from 'react';
import Card from 'react-bootstrap/Card';

export const CardComponent = ({ carModal, carImg }) => {
    return (
        <Card className="text-center border-1" style={{ height: '150px' }}>
            <Card.Img src={carImg} className="card-img-filter" style={{ filter: 'brightness(50%)', opacity: '1' }} />
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Text className="text-light"><h2>{carModal}</h2></Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};
