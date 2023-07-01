import React, { useEffect, useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { CustomInput } from '../ReusableComponent/CustomInput';
import { useNavigate } from 'react-router-dom';

import { Icons } from '../../Icons/Icons';
import { loginUser } from '../../Redux/User/UserAction';

import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({});
    const { user } = useSelector(state => state.user);


    useEffect(() => {
        user?.uid && navigate('/')
    })


    const signUpFunciton = () => {
        navigate('/signUp')
    }

    const handelOnChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    const handelOnSubmit = async (e) => {
        e.preventDefault();

        dispatch(loginUser(form))
    }
    const inputs = [
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'johnDoe@gmail.com',
            required: true
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: '******',
            required: true
        },
    ];

    return (
        <div className='login-page'>
            <Container className='d-flex align-items-center text-secondary justify-content-center' style={{ height: '80vh' }}>
                <Form className='p-5 shadow-lg m-auto login-form'
                    style={{ width: '450px', backgroundColor: 'white' }}
                    onSubmit={handelOnSubmit}>
                    <h4 className='text-dark fw-bolder mb-3 text-center'>Login</h4>
                    <div className='mt-2'>
                        {inputs.map((item, i) => (
                            <CustomInput key={i} {...item} onchange={handelOnChange} />
                        ))}
                    </div>
                    <div className='d-grid'>
                        <Button variant='primary' className='login-page-button border-0' type='submit'>Login</Button>
                    </div>
                    <div className='text-center mt-4'>
                        <p>Or Sign Up using</p>
                        <Icons />
                        <p>Or Sign Up using</p>
                        <p className='text-secondary signUp-btn' onClick={signUpFunciton}>SIGN UP</p>
                    </div>
                </Form>
            </Container>

        </div>
    );
};
