import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../Components/ReusableComponent/CustomInput'

import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { updateCarDetail } from '../../Redux/Car/CarAction'

export const EditCar = ({ selectedCar }) => {
    const [editCar, setEditCar] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        setEditCar(selectedCar)
    }, [selectedCar])

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setEditCar(
            {
                ...editCar,
                [name]: value
            });
    };

    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault();
            dispatch(updateCarDetail(selectedCar.id, editCar))

        } catch (error) {
            toast.error(error.message);
        }
    };



    const inputs = [
        {
            label: 'Car Model',
            name: 'carMake',
            type: 'text',
            placeholder: 'Toyota Camry',
            required: true,
            value: editCar.carMake || ''
        },
        {
            label: 'Car Price',
            name: 'carPrice',
            type: 'number',
            placeholder: '$20000',
            required: true,
            value: editCar.carPrice || ''
        },
        {
            label: 'Car Type',
            name: 'carType',
            type: 'select', // Changed type to 'select'
            options: ['Sports Car', 'HatchBack', 'SUV', 'Sedan'],
            required: true,
            description: 'Porsche Boxster - Sports Car',
            value: editCar.carType || ''
        },
        {
            label: 'Car Image URL',
            name: 'carImg',
            type: 'url',
            placeholder: 'http://image-url.com',
            required: true,
            value: editCar.carImg || ''
        },
        {
            label: 'Description',
            name: 'description',
            type: 'text',
            as: 'textarea',
            placeholder: 'Write Car description',
            style: { height: '200px', resize: 'none' },
            required: true,
            value: editCar.description || ''
        },
    ];

    return (

        <Container>
            <Form className="p-1 m-auto" style={{ maxWidth: '100%' }} onSubmit={handleOnSubmit}>
                <div className="mt">
                    {inputs.map((item, i) => (
                        <CustomInput key={i} {...item} onChange={handleOnChange} value={item.value} />
                    ))}
                </div>
                <div className="d-grid">
                    <Button className='btn-all' variant="primary" type="submit">
                        Update Detail
                    </Button>
                </div>
            </Form>
        </Container>

    )
}
