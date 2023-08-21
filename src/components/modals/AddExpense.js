import React,{useState} from 'react';

import { Modal,Typography,TextField,FormControl,InputLabel,Select,MenuItem, FormControlLabel, Checkbox, RadioGroup, Radio } from '@material-ui/core'; // Import from @mui/material
import '../../assets/modal.css';
import { Button, Col, Row, } from "reactstrap";
import { useAddExpense, useExpensesTypes } from '../../hooks/expenses';
import { useBuildings } from '../../hooks/building';


export function AddExpense() {
    
    const { data } = useBuildings()
    const buildings = data?.data
    
    const { data:types } = useExpensesTypes()
    const expenses = types?.data
    
    const expense=useAddExpense()
    
    const [modalOpen, setModalOpen] = useState(false);
    
    const [building,setBuilding]=useState()
    const [charges, setCharges] = useState('');
    const [detail, setDetails] = useState('');
    const [selectedExpenseType, setSelectedExpenseType] = useState(0);
    const [selectedExpenseSubType, setSelectedExpenseSubType] = useState('');
    
    const handleOpen = () => {
        setModalOpen(true);
    };
    
    const handleClose = () => {
        setModalOpen(false);
    };
    
    const addExpense =async() => {
        await expense.mutateAsync({'branch_id':building,'expense_type':selectedExpenseType,'expense_sub_type':selectedExpenseSubType,'expense_detail':detail,charges})
        handleClose()
    }
    
    const handleExpenseTypeChange = async(event) => {
        await setSelectedExpenseType(event.target.value);
        
    }
    
    const handleExpenseSubTypeChange = async(event) => {
        await setSelectedExpenseSubType(event.target.value);
        
    }
    
    
    return(
        <>
        
        <Button className="float-end my-2  themeButtons"  onClick={handleOpen}>Add Expense +</Button>
        <Modal
        open={modalOpen}
        onClose={handleClose}
        className="modall"
        >
        <div className="custom-modal-body ">
        <div className="custom-modal-header">
        <Typography variant="h6" className="modalHeader">
        Add Expense
        </Typography>
        <span className="modal-close-button" onClick={handleClose}>X</span>
        </div>
        <div className="line-divider"></div>
        <div className="custom-modal-content">
        <Row>
        <Col>
        <FormControl
        variant="outlined"
        className='w-100'>
        <InputLabel id="demo-simple-select-outlined-label">Building / Branch</InputLabel>
        <Select
        value={building}
        onChange={(e)=>{setBuilding(e.target.value)}}
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        {buildings?.map((building, index) => (
            <MenuItem value={building.branch_id}>{building.branch_name}</MenuItem>
            ))}
            </Select>
            </FormControl>
            
            <TextField
            label="Charges"
            type='number'
            name={charges}
            value={charges}
            onChange={(e) => { setCharges(e.target.value) }}
            className='my-4 w-100'
            variant="outlined"
            />
            
            <TextField
            id="outlined-multiline-static"
            label="Expense Detail"
            value={detail}
            name={detail}
            onChange={(e) => { setDetails(e.target.value) }}
            className='w-100'
            multiline
            rows={4}
            variant="outlined"
            />
            
            </Col>
            <Col>
            
            <h6>Expense Type</h6>
            
            {selectedExpenseType}
            
            <div  className='d-flex'>
            <RadioGroup
            value={selectedExpenseType}
            onChange={handleExpenseTypeChange}
            >
            {expenses?.map((expense) => (
                <FormControlLabel
                key={expense.expense_type_id}
                value={expense.expense_type_id.toString()} // Convert value to string
                control={<Radio />}
                label={expense.expense_type_name}
                checked={selectedExpenseType === expense.expense_type_id.toString()} // Compare using string
                onChange={handleExpenseTypeChange}
                />
                ))}
                </RadioGroup>
                
                </div>
                
                <h6 className='mt-4'>Expense Sub-Type</h6>
                
                <div className='d-flex'>
                
                <RadioGroup
                value={selectedExpenseSubType}
                onChange={handleExpenseSubTypeChange}
                >
                <FormControlLabel
                value="Internet"
                control={<Radio />}
                label="Internet"
                />
                <FormControlLabel
                value="Electricity"
                control={<Radio />}
                label="Electricity"
                />
                <FormControlLabel
                value="Gas"
                control={<Radio />}
                label="Gas"
                />
                </RadioGroup>
                
                </div>
                
                
                </Col>
                </Row>
                
                <div className="button-group">
                <Button onClick={handleClose} className='closeButton'>Close</Button>
                <Button onClick={addExpense} className="themeButtons">Add Expense</Button>
                </div>
                </div>
                </div>
                </Modal>
                
                </>
                )
                
            }