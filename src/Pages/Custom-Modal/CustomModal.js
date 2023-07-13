import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../Redux/Modal/modalSlice';


export const CustomModal = ({ heading, children }) => {
    // const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();
    const { modalShow } = useSelector((state) => state.modal)
    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => dispatch(setShowModal(false))}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                        {heading}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    );
}
