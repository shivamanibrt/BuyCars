import React, { useEffect } from 'react';
import { AdminLayout } from '../AdminLayout/AdminLayout';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCarAction, getAllCarsAction } from '../../Redux/Car/CarAction';
import { GrEdit } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'


export const Products = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { car } = useSelector((state) => state.car);

    useEffect(() => {
        !car.length && dispatch(getAllCarsAction());
    }, [dispatch, car]);

    const handleOnClick = () => {
        navigate('/newCar');
    };
    const handleOnDelete = id => {
        if (window.confirm('Are you sure you want to delete this item')) {
            dispatch(deleteCarAction(id));
        }
    }


    return (
        <AdminLayout>
            <Container>
                <div className='p-4 text-secondary'>
                    <h3 className='dashboard_heading'>Products</h3>
                </div>
                <div className='mb-4'>
                    <Button onClick={handleOnClick}>Add New Cars</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Thumbnail</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {car.map((item, i) => (
                            <tr key={item.id}>

                                <td>
                                    <img src={item.carImg} alt='' style={{ width: '50%', height: '100%' }} />
                                </td>
                                <td>{item.description} ${item.carPrice} {item.carMake} </td>
                                <td className='edit-column'>
                                    <p className='text-center text-secondary'>Car Number {i + 1}<hr /></p>
                                    <Row>
                                        <Col className='mb-4'>
                                            <Button variant='warning' className='p-3 fs-5 text-bg-lights' ><GrEdit /></Button>
                                        </Col>
                                        <Col>
                                            <Button variant='danger' className='p-3 fs-5' onClick={() => handleOnDelete(item.id)}>
                                                <AiFillDelete />
                                            </Button>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </AdminLayout>
    );
};
