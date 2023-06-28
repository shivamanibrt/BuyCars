import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from './CustomInput'

export const Signup = () => {
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
        },]
    return (
        <div className='signUp-page'>
            <Container className='d-flex align-items-center text-secondary justify-content-center' style={{ height: '90vh' }}>
                <Form className='p-5 shadow-lg  m-auto login-form'
                    style={{ width: '450px', backgroundColor: 'white' }}>
                    <h4 className='text-dark fw-bolder mb-3 text-center'>Join BuyCars</h4>
                    <Form.Text>
                        Anyone can create admin or user account for expirement purpose.
                        Once you are registered, you will be redirected to Dashboard automatically.
                    </Form.Text>
                    <div className='mt-2' >
                        <Form.Group className="mb-3" controlId='formBasicElement'>
                            <Form.Label>Account Type</Form.Label>
                            <Form.Select name='role' >
                                <option value=''>Select user</option>
                                <option value='admin'>Admin</option>
                                <option value='user'>User</option>
                            </Form.Select>
                        </Form.Group>
                        {
                            inputs.map((item, i) => (
                                <CustomInput key={i} {...item} />
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
