import React,{useState} from 'react';

import { Modal,Typography,TextField } from '@material-ui/core'; // Import from @mui/material
import '../../assets/modal.css';
import { Button, Col, Row, } from "reactstrap";
import { updateVisitorInfo } from '../stepper/reducer/actions';
import { useDispatch, useSelector } from 'react-redux';


export function AddVisitor() {
    const dispatch = useDispatch();
        
    const [modalOpen, setModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [relation, setRelation] = useState('');
    const [cnic, setCNIC] = useState('');
    const [contactNo, setContactNo] = useState('');
    
    const handleOpen = () => {
        setModalOpen(true);
    };
    
    const handleClose = () => {
        setModalOpen(false);
    };
    
    const addVisitor =async() => {
        
        const value = {'visitor_name':name,'visitor_relation':relation,'visitor_identity_number':cnic,'visitor_primary_contact':contactNo}
        dispatch(updateVisitorInfo(value));
        
        handleClose()
        setName('')
        setRelation('')
        setCNIC('')
        setContactNo('')
    }
    
    return(
        <>
        
        <Button className="float-end my-2  themeButtons"  onClick={handleOpen}>Add Visitor +</Button>
        <Modal
        open={modalOpen}
        onClose={handleClose}
        className="modall"
        >
        <div className="custom-modal-body ">
        <div className="custom-modal-header">
        <Typography variant="h6" className="modalHeader">
        Add Visitor
        </Typography>
        <span className="modal-close-button" onClick={handleClose}>X</span>
        </div>
        <div className="line-divider"></div>
        <div className="custom-modal-content">
        
        <Row>
        <Col>
        <TextField
        label="Visitor's Name"
        type='text'
        name={name}
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className='my-2 w-100'
        variant="outlined"
        />
        </Col>
        <Col>
        <TextField
        label="Visitor's Relation"
        className='my-2 w-100'
        variant="outlined"
        name={relation}
        value={relation}
        onChange={(e)=>setRelation(e.target.value)}
        />
        </Col>
        </Row>
        
        <Row>
        <Col>
        <TextField
        label="Visitor's CNIC"
        type='text'
        name={cnic}
        value={cnic}
        onChange={(e)=>setCNIC(e.target.value)}
        className='my-2 w-100'
        variant="outlined"
        />
        </Col>
        <Col>
        <TextField
        label="Visitor's Contact Number"
        className='my-2 w-100'
        variant="outlined"
        name={contactNo}
        value={contactNo}
        onChange={(e)=>setContactNo(e.target.value)}
        />
        </Col>
        </Row>
        
        <div className="button-group">
        <Button onClick={handleClose} className='closeButton'>Close</Button>
        <Button onClick={addVisitor} className="themeButtons">Add Visitor</Button>
        </div>
        </div>
        </div>
        </Modal>
        
        </>
        )
        
    }