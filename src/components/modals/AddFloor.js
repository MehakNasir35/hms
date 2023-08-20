import React,{useState} from 'react';

import { Modal,Typography,TextField } from '@material-ui/core'; // Import from @mui/material
import '../../assets/modal.css';
import { Button, } from "reactstrap";
import { useAddFloor } from '../../hooks/floor';


export function AddFloor(props) {

    const branch_id = props.branchId
    
    const floor=useAddFloor()
    
    const [modalOpen, setModalOpen] = useState(false);
    const [name, setName] = useState('');
    
    const handleOpen = () => {
        setModalOpen(true);
    };
    
    const handleClose = () => {
        setModalOpen(false);
    };
    
    const addFloor =async() => {
        let add = await floor.mutateAsync({name,branch_id})
        handleClose()
    }
    
    return(
        <>
        
        <Button className="float-end my-2  themeButtons"  onClick={handleOpen}>Add Floor +</Button>
        <Modal
        open={modalOpen}
        onClose={handleClose}
        className="modall"
        >
        <div className="custom-modal-body2 ">
        <div className="custom-modal-header">
        <Typography variant="h6" className="modalHeader">
        Add Floor
        </Typography>
        <span className="modal-close-button" onClick={handleClose}>X</span>
        </div>
        <div className="line-divider"></div>
        <div className="custom-modal-content">
        <TextField
        label="Floor Name"
        name={name}
        value={name}
        onChange={(e) => { setName(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        />
        <div className="button-group">
        <Button onClick={handleClose} className='closeButton'>Close</Button>
        <Button onClick={addFloor} className="themeButtons">Add Floor</Button>
        </div>
        </div>
        </div>
        </Modal>
        
        </>
        )
        
    }