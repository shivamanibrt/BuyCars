import React, { useState } from 'react'
import { AdminLayout } from '../AdminLayout/AdminLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CustomInput } from '../../Components/ReusableComponent/CustomInput'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createNewCarAction } from '../../Redux/Car/CarAction'



export const Products = () => {
    const [addProduct, addNewProduct] = useState({});
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        addNewProduct(
            {
                ...addProduct,
                [name]: value
            });
    };

    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault();

            dispatch(createNewCarAction(addProduct));
            navigate('/products');

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
        },
        {
            label: 'Car Price',
            name: 'carPrice',
            type: 'number',
            placeholder: '$20000',
            required: true,
        },
        {
            label: 'Car Type',
            name: 'carType',
            type: 'select', // Changed type to 'select'
            options: ['Sports Car', 'HatchBack', 'SUV', 'Sedan'],
            required: true,
        },
        {
            label: 'Car Image URL',
            name: 'carUrl',
            type: 'url',
            placeholder: 'http://image-url.com',
            required: true,
        },
    ];

    return (
        <AdminLayout>
            <Container>
                <div className='p-4 text-secondary'>
                    <h3 className='dashboard_heading'>Products</h3>
                </div>

                <Form
                    className="border p-5 mt-2 mb-3 shadow-lg rounded m-auto"
                    style={{ maxWidth: '70%' }}
                    onSubmit={handleOnSubmit}
                >
                    <h3 className="text-primary fw-bolder mb-3">Add New Car</h3>
                    <div className="mt-2">
                        {inputs.map((item, i) => (
                            <CustomInput key={i} {...item} onChange={handleOnChange} />
                        ))}
                    </div>
                    <div className="d-grid">
                        <Button variant="primary" type="submit">
                            Add Car
                        </Button>
                    </div>
                </Form>
            </Container>
        </AdminLayout>
    )
}
