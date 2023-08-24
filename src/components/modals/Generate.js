import React,{useState} from 'react';

import { Modal,Typography,TextField } from '@material-ui/core'; // Import from @mui/material
import '../../assets/modal.css';
import { Alert, Button, Col, Row, } from "reactstrap";
import { useAddInvoice } from '../../hooks/invoice';


export function Generate(props) {
    
    const invoice = props.info
    
    const invoiceAdd=useAddInvoice()
    
    const [modalOpen, setModalOpen] = useState(false);
    
    const [studentId, setStudentId] = useState(invoice.student_id);
    const [monthlyFee, setMonthlyFee] = useState('');
    const [admissionFee, setAdmissionFee] = useState('');
    const [securityFee, setSecurityFee] = useState('');
    const [extraFee, setExtraFee] = useState('');
    
    const handleOpen = () => {
        setModalOpen(true);
    };
    
    const handleClose = () => {
        setModalOpen(false);
    };
    
    const generateInvoice =async() => {
       

        try{
            let add = await invoiceAdd.mutateAsync({'student_id':studentId,'monthly_fee':monthlyFee,'admission_fee':admissionFee,'security_fee':securityFee,'extra_service_fee':extraFee})


            if(add)
            {
                handleClose()
                setMonthlyFee('')
                setAdmissionFee('')
                setExtraFee('')
                setSecurityFee('')
            }
            
        }catch(e){
            console.error('API call error:', e);
        }
    }
    
    return(
        <>
        
        {/* <Button className="float-end my-2  themeButtons"  >Add Floor +</Button> */}
        
        
        <Button
        disabled={invoice?.invoice_info?.length === 0} onClick={handleOpen}
        color={invoice?.invoice_info?.length === 0 ? 'secondary':'success'}
        >
        Generate
        </Button>
        
        <Modal
        open={modalOpen}
        onClose={handleClose}
        className="modall"
        >
        <div className="custom-modal-body ">
        <div className="custom-modal-header">
        <Typography variant="h6" className="modalHeader">
        Generate
        </Typography>
        <span className="modal-close-button" onClick={handleClose}>X</span>
        </div>
        <div className="line-divider"></div>
        <div className="custom-modal-content">


        {invoiceAdd.isError && <Alert color='danger' className='my-4'>Error: {invoiceAdd.error.response.data.error}</Alert>}

        
        <Row>
        <Col>
        <TextField
        label="Student Id"
        name={studentId}
        value={studentId}
        disabled
        onChange={(e) => { setStudentId(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        />
        </Col>
        <Col>
        <TextField
        label="Monthly Fee"
        name={monthlyFee}
        value={monthlyFee}
        onChange={(e) => { setMonthlyFee(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        type='number'
        />
        </Col>
        </Row>

            
        <Row>
        <Col>
        <TextField
        label="Admission Fee"
        name={admissionFee}
        value={admissionFee}
        onChange={(e) => { setAdmissionFee(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        type='number'
        />
        </Col>
        <Col>
        <TextField
        label="Security Fee"
        name={securityFee}
        value={securityFee}
        onChange={(e) => { setSecurityFee(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        type='number'
        />
        </Col>
        </Row>

            
        <Row>
        <Col md={6} lg={6} xs={6} sm={6}>
        <TextField
        label="Extra Service Fee"
        name={extraFee}
        value={extraFee}
        onChange={(e) => { setExtraFee(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        type='number'
        />
        </Col>
        </Row>
        
        <div className="button-group">
        <Button onClick={handleClose} className='closeButton'>Close</Button>
        <Button onClick={generateInvoice} className="themeButtons">Generate</Button>
        </div>
        </div>
        </div>
        </Modal>
        
        </>
        )
        
    }