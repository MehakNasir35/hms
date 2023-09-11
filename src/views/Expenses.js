import React,{useState} from 'react';
import { Row, Col, Button, Alert } from 'reactstrap';
import { TextField,Table,TableRow,TableCell,TableBody,TableHead ,InputLabel,Select,FormControl,MenuItem} from '@material-ui/core'; // Import from @mui/material
import { useBuildings } from '../hooks/building';
import { useExpenses } from '../hooks/expenses';
import { AddExpense } from '../components/modals/AddExpense';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Expenses = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const expensesPerPage = 10; // Adjust this number as needed
    
    const { data } = useBuildings()
    const buildings = data?.data
    
    
    const [building,setBuilding]=useState()
    const [toDate,setToDate]=useState()
    const [fromDate,setFromDate]=useState()
    const [expense,setExpenses]=useState([])
    const [error,setError]=useState(false)
    
    const expenseData=useExpenses()
    
    const search =async ()=>{
        try{
            setError(false)
            const expenses = await expenseData.mutateAsync({'branch_id':building,'from_date':fromDate,'to_date':toDate})
            // const expenses=expenseData?.data?.data
            setExpenses(expenses)
            setCurrentPage(1)
        }catch(error){
            setError(true)
        }
        
    }
    
    
    // Calculate the index range for the current page
    const indexOfLastExpense = currentPage * expensesPerPage;
    const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
    const expensesToShow = expense.slice(indexOfFirstExpense, indexOfLastExpense);
    
    // Pagination controls
    const totalPages = Math.ceil(expense.length / expensesPerPage);
    
    return (
        <>
        
        {error && <Alert color="danger">{expenseData.error.response.data.error}</Alert>}
        <Row className="pt-2">
        <Col>
        <h4>Expenses</h4>
        </Col>
        <Col>
        <AddExpense />
        </Col>
        </Row>
        
        <Row>
        <Col md={3} sm={3} lg={3}>
        <TextField
        label="Select From Date"
        type="date"
        value={fromDate}
        className='mb-4 w-100'
        id="outlined-start-adornment"
        onChange={(e)=>{setFromDate(e.target.value)}}
        InputLabelProps={{
            shrink: true,
        }}
        variant="outlined"
        />
        </Col>
        <Col md={3} sm={3} lg={3}>
        <TextField
        label="Select To Date"
        type="date"
        value={toDate}
        className='mb-4 w-100'
        id="outlined-start-adornment"
        onChange={(e)=>{setToDate(e.target.value)}}
        InputLabelProps={{
            shrink: true,
        }}
        variant="outlined"
        />
        </Col>
        
        <Col md={3} sm={3} lg={3}>
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
            </Col>
            <Col md={3} sm={3} lg={3}>
            <Button className="mt-2 themeButtons" onClick={search}>Search</Button>
            
            </Col>
            </Row>
            
            <Table stickyHeader aria-label="sticky table" className='mt-5 themeTable'>
            <TableHead>
            <TableRow>
            <TableCell  >
            Building
            </TableCell>
            <TableCell  >
            Expense Type
            </TableCell>
            <TableCell  >
            Charges
            </TableCell>
            <TableCell  >
            Expense Detail
            </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {expensesToShow?.map((expense, index) => (
                
                <TableRow hover  >
                
                <TableCell >
                {expense.branch_name}
                </TableCell>
                <TableCell >
                {expense.expense_type_name}
                
                </TableCell>
                <TableCell >
                {expense.charges}
                
                </TableCell>
                <TableCell >
                {expense.expense_detail}
                
                </TableCell>
                </TableRow>
                ))}
                </TableBody>
                </Table>
                
                
                {/* Centered pagination controls */}
                <div className="pagination-container">
                <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
                <span className="page-number">{currentPage}</span>
                <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={indexOfLastExpense >= expense.length}
                >
                <FontAwesomeIcon icon={faArrowRight} />
                </Button>
                </div>
                
                </>
                );
            };
            
            export default Expenses;
            