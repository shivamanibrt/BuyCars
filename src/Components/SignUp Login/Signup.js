import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../ReusableComponent/CustomInput'

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../Firebase/firebase-config'
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';


export const Signup = () => {

    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handelOnchange = e => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handelOnSubmit = async (e) => {
        try {
            e.preventDefault();
            const { confirmPassword, password, ...rest } = form;


            if (confirmPassword !== password) {
                toast.error('Password not matched')
                return;
            }
            //Register user by creating a new account
            const pendingUser = createUserWithEmailAndPassword(auth, rest.email, password)


            const { user } = await pendingUser;
            if (user?.uid) {
                //store aditional user data in the firestore databse
                await setDoc(doc(db, 'users', user.uid), rest)
                toast.success("Account Created")
                navigate('/')
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const inputs = [
        {
            label: 'First Name',
            name: 'fName',
            type: 'text',
            placeholder: 'Doe',
            required: true
        },
        {
            label: 'Last Name',
            name: 'lName',
            type: 'text',
            placeholder: 'Doe',
            required: true
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'johnDoe@email.com',
            required: true
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: '******',
            required: true
        },
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password',
            placeholder: '******',
            required: true
        },
    ]
    return (
        <div className='signUp-page'>
            <Container className='d-flex align-items-center text-secondary justify-content-center p-5' >
                <Form className='p-5 shadow-lg m-auto login-form'
                    style={{ width: '450px', backgroundColor: 'white' }} onSubmit={handelOnSubmit}>
                    <h4 className='text-dark fw-bolder mb-3 text-center'>Join BuyCars</h4>
                    <Form.Text>
                        Anyone can create admin or user account for expirement purpose.
                        Once you are registered, you will be redirected to Dashboard automatically.
                    </Form.Text>
                    <div className='mt-2' >
                        <Form.Group className="mb-3" controlId='formBasicElement'>
                            <Form.Label>Account Type</Form.Label>
                            <Form.Select name='role' onChange={handelOnchange} >
                                <option value=''>Select user</option>
                                <option value='admin'>Admin</option>
                                <option value='user'>User</option>
                            </Form.Select>
                        </Form.Group>
                        {
                            inputs.map((item, i) => (
                                <CustomInput key={i} {...item} onChange={handelOnchange} />
                            ))
                        }
                    </div>
                    <div className='d-grid'>
                        <Button variant='primary' type='submit'> Sign Up</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}
