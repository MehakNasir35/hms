import React, { useState } from 'react';
import { Modal, Typography, TextField, Grid } from '@material-ui/core';
import '../../assets/modal.css';
import { Button, Col, Row } from "reactstrap";
import { useAddBuilding } from '../../hooks/building';


export function AddBuilding() {
    const building = useAddBuilding();
    const [modalOpen, setModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    
    const handleOpen = () => {
        setModalOpen(true);
    };
    
    const handleClose = () => {
        setModalOpen(false);
    };
    
    const addBuilding = async () => {
        const add = await building.mutateAsync({ name, address });
        console.log(add.message);
        handleClose();
    };
    
    return (
        <>
        <Button className="float-end themeButtons" onClick={handleOpen}>Add Building +</Button>
        <Modal
        open={modalOpen}
        onClose={handleClose}
        className="modall"
        >
        <div className="custom-modal-body ">
        <div className="custom-modal-header">
        <Typography variant="h6" className="modalHeader">
        Add Building
        </Typography>
        <span className="modal-close-button" onClick={handleClose}>X</span>
        </div>
        <div className="line-divider"></div>
        <div className="custom-modal-content">
        
        <Row>
        <Col>
        <TextField
        label="Building Name"
        name={name}
        value={name}
        onChange={(e) => { setName(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        />
        </Col>
        <Col>
        <TextField
        label="Building Address"
        name={address}
        value={address}
        onChange={(e) => { setAddress(e.target.value) }}
        id="outlined-basic"
        className='my-2 w-100'
        variant="outlined"
        
        />
        </Col>
        </Row>
        
        
        <div className="button-group">
        <Button onClick={handleClose} className='closeButton'>Close</Button>
        <Button onClick={addBuilding} className="themeButtons">Add Building</Button>
        </div>
        </div>
        </div>
        </Modal>
        </>
        );
    }
    