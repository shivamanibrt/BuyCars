import React, { useState } from 'react';
import { AdminLayout } from '../AdminLayout/AdminLayout';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

export const AdminCatagories = () => {
    const { car } = useSelector(state => state.car);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const sortedCar = [...car].sort((a, b) => {
        const columnA = a.carType.toLowerCase();
        const columnB = b.carType.toLowerCase();

        if (columnA < columnB) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (columnA > columnB) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return (
        <AdminLayout>
            <div className='p-4 text-secondary'>
                <h3>Categories</h3>

                <Button onClick={handleSort} variant='warning' className='mb-3'>
                    Filter by Type {sortOrder === 'asc' ? '▲' : '▼'}
                </Button>

                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Car Type</th>
                                <th>Car Make</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedCar.map((item, i) => (
                                <tr key={item.id}>
                                    <td>{i + 1}</td>
                                    <td>{item.carType}</td>
                                    <td>{item.carMake}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </AdminLayout>
    );
};

