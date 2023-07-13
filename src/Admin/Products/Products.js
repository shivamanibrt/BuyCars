import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../AdminLayout/AdminLayout';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCarAction, getAllCarsAction } from '../../Redux/Car/CarAction';
import { GrEdit } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import { CustomModal } from '../../Pages/Custom-Modal/CustomModal';
import { EditCar } from '../../Components/Edit-Car/EditCar';
import { setShowModal } from '../../Redux/Modal/modalSlice';


export const Products = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { car } = useSelector((state) => state.car);

    const [selectedCar, setSelectedCar] = useState({})

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
    const handleOnEdit = (obj) => {
        setSelectedCar(obj)
        dispatch(setShowModal(true));
        console.log(obj)
    }

    return (
        <div>
            <AdminLayout>
                <CustomModal heading="Edit book">
                    <EditCar selectedCar={selectedCar} />
                </CustomModal>
                <Container>
                    <div className='p-4 text-secondary'>
                        <h3 className='dashboard_heading'>Products</h3>
                    </div>
                    <div className='mb-4'>
                        <Button onClick={handleOnClick}>Add New Cars</Button>
                    </div>
                    <div className='align-items-center'>
                        <Table striped bordered hover >
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

                                        <td style={{ width: '20%', maxWidth: '100%', height: 'auto' }}>
                                            <img src={item.carImg} alt='' style={{ width: '100%', height: '100%' }} />
                                        </td>
                                        <td>{item.description} ${item.carPrice} {item.carMake} </td>
                                        <td className='edit-column'>
                                            <p className='text-center text-secondary'>Car Number {i + 1}<hr /></p>
                                            <Row>
                                                <Col className='mb-4'>
                                                    <Button variant='warning' className='p-3 fs-5 text-bg-lights' onClick={() => handleOnEdit(item)}><GrEdit /></Button>
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
                    </div>
                </Container>
            </AdminLayout>
        </div>
    );
};
