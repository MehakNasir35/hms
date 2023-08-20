import React,{useState} from 'react';
import { Row, Col, Button } from 'reactstrap';
import { TextField,Table,TableRow,TableCell,TableBody,TableHead ,InputLabel,Select,FormControl,MenuItem} from '@material-ui/core'; // Import from @mui/material
import { useBuildings } from '../hooks/building';
import { useGenerateInvoices } from '../hooks/invoice';

const GenerateInvoices = () => {
    
    const { data } = useBuildings()
    const buildings = data?.data
    
    const [building,setBuilding]=useState()
    const [toDate,setToDate]=useState()
    const [fromDate,setFromDate]=useState()
    
    const [invoice,setInvoices]=useState([])
    
    const invoiceData=useGenerateInvoices({'branch_id':building,'from_date':fromDate,'to_date':toDate})
    
    const search =async ()=>{
        await invoiceData.refetch()
        const invoices=invoiceData?.data
        setInvoices(invoices)
    }
    
    return (
        <>
        <Row className="pt-2">
        <h4>Invoices</h4>
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
            Student Id
            </TableCell>
            <TableCell  >
            Student Name
            </TableCell>
            <TableCell  >
            CNIC
            </TableCell>
            <TableCell  >
            Primary Contact
            </TableCell>
            <TableCell  >
            Invoice Status
            </TableCell>
            <TableCell className='text-center' >
            Action
            </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            
            {invoice?.map((invoice, index) => (
                <TableRow hover  >
                
                <TableCell >
                {invoice.student_id}
                </TableCell>
                <TableCell >
                {invoice.student_name}
                </TableCell>
                <TableCell >
                {invoice.identity_number}
                </TableCell>
                <TableCell >
                {invoice.primary_contact}
                </TableCell>
                <TableCell >
                {invoice.invoice_info[0]?.invoice_status}
                </TableCell>
                <TableCell  className='text-center' >
                
                <Button
                disabled={invoice.invoice_info.length === 0}
                color={invoice.invoice_info.length === 0 ? 'secondary':'success'}
                >
                Generate
                </Button>
                
                <Button
                disabled={invoice.invoice_info.length === 0 || invoice.invoice_info[0]?.invoice_status === 'Paid'}
                color={invoice.invoice_info.length === 0 || invoice.invoice_info[0]?.invoice_status === 'Paid' ? 'secondary' : 'danger'}
                className='mx-2'
                >
                Pay
                </Button>
                
                </TableCell>
                </TableRow>
                ))}
                
                </TableBody>
                </Table>
                
                </>
                );
            };
            
            export default GenerateInvoices;
            