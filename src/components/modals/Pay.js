import React,{useState} from 'react';

import { Modal,Typography,TextField } from '@material-ui/core'; // Import from @mui/material
import '../../assets/modal.css';
import { Alert, Button, Col, Row, } from "reactstrap";
import {  usePayInvoice } from '../../hooks/invoice';


export function Pay(props) {
    
    const invoice = props.info
    
    const invoicePay=usePayInvoice()
    
    const [modalOpen, setModalOpen] = useState(false);
    
    const [invoiceId, setInvoiceId] = useState(invoice?.invoice_info[0]?.invoice_id);
    const [amount, setAmount] = useState('');
    
    const handleOpen = () => {
        setModalOpen(true);
    };
    
    const handleClose = () => {
        setModalOpen(false);
    };
    
    const payInvoice =async() => {
    
        try{
            let add = await invoicePay.mutateAsync({'invoice_id':invoiceId,'amount':amount})


            if(add)
            {
                handleClose()
                setAmount('')
            }
            
        }catch(e){
            console.error('API call error:', e);
        }

    }
    
    return(
        <>
        <Button
        onClick={handleOpen}
        disabled={invoice?.invoice_info?.length === 0 || invoice?.invoice_info[0]?.invoice_status === 'Paid'}
        color={invoice?.invoice_info?.length === 0 || invoice?.invoice_info[0]?.invoice_status === 'Paid' ? 'secondary' : 'danger'}
        className='mx-2'
        >
        Pay
        </Button>
        
        <Modal
        open={modalOpen}
        onClose={handleClose}
        className="modall"
        >
        <div className="custom-modal-body ">
        <div className="custom-modal-header">
        <Typography variant="h6" className="modalHeader">
        Pay
        </Typography>
        <span className="modal-close-button" onClick={handleClose}>X</span>
        </div>
        <div className="line-divider"></div>
        <div className="custom-modal-content">
        

        {invoicePay.isError && <Alert color='danger' className='my-4'>Error: {invoicePay.error.response.data.error}</Alert>}

        <Row>
        <Col>
        <TextField
        label="Invoice Id"
        name={invoiceId}
        value={invoiceId}
        disabled
        onChange={(e) => { setInvoiceId(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        />
        </Col>
        <Col>
        <TextField
        label="Amount"
        name={amount}
        value={amount}
        onChange={(e) => { setAmount(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        type='number'
        />
        </Col>
        </Row>
        
        
        <div className="button-group">
        <Button onClick={handleClose} className='closeButton'>Close</Button>
        <Button onClick={payInvoice} className="themeButtons">Pay</Button>
        </div>
        </div>
        </div>
        </Modal>
        
        </>
        )
        
    }