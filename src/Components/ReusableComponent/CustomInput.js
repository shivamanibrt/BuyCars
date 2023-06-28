import React from 'react';
import { Form } from 'react-bootstrap';

export const CustomInput = ({ label, ...rest }) => {
    return (
        <Form.Group className="mb-3">
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control {...rest} className="border-0" style={{ maxWidth: '100%' }} />
        </Form.Group>
    );
};
