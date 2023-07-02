import React from 'react';
import { Form } from 'react-bootstrap';

export const CustomInput = ({ label, type, options, ...rest }) => {
    if (type === 'select') {
        return (
            <Form.Group className="mb-3">
                {label && <Form.Label>{label}</Form.Label>}
                <Form.Select {...rest} className="border-0" style={{ maxWidth: '100%' }}>
                    <option value="">Select {label}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        );
    }

    return (
        <Form.Group className="mb-3">
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control {...rest} className="border-0" style={{ maxWidth: '100%' }} />
        </Form.Group>
    );
};
