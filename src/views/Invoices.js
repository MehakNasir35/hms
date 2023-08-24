import React,{useState} from 'react';
import { Row, Col, Button } from 'reactstrap';
import { TextField,Table,TableRow,TableCell,TableBody,TableHead ,InputLabel,Select,FormControl,MenuItem} from '@material-ui/core'; // Import from @mui/material
import { useBuildings } from '../hooks/building';
import { useInvoices } from '../hooks/invoice';

const Invoices = () => {
    
    const { data } = useBuildings()
    const buildings = data?.data
    
    const [building,setBuilding]=useState()
    const [toDate,setToDate]=useState()
    const [fromDate,setFromDate]=useState()
    const [identity_number,setID]=useState()

    const [invoice,setInvoices]=useState([])

    const invoiceData=useInvoices()

    const search =async ()=>{
        const invoices = await invoiceData.mutateAsync({'branch_id':building,'from_date':fromDate,'to_date':toDate,identity_number})
        // const invoices=invoiceData?.data?.invoices
        setInvoices(invoices)
    }
    
    return (
        <>
        <Row className="pt-2">
        <h4>Invoices</h4>
        </Row>
        
        <Row>
        <Col md={2} sm={2} lg={2}>
        <TextField
        label="Identification No"
        type="number"
        className='mb-4 w-100'
        id="outlined-start-adornment"
        name={identity_number}
        value={identity_number}
        onChange={(e)=>setID(e.target.value)}
        variant="outlined"
        />
        </Col>
        
        <Col md={2} sm={2} lg={2}>
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
        <Col md={2} sm={2} lg={2}>
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
        <Col md={2} sm={2} lg={2}>
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
            Invoice ID
            </TableCell>
            <TableCell  >
            Student Name
            </TableCell>
            <TableCell  >
            CNIC
            </TableCell>
            <TableCell  >
            Invice Status
            </TableCell>
            <TableCell  >
            Amount
            </TableCell>
            <TableCell  >
            Monthly Fee
            </TableCell>
            <TableCell  >
            Admission Fee
            </TableCell>
            <TableCell  >
            Security Fee
            </TableCell>
            <TableCell  >
            Extra Service Fee
            </TableCell>
            <TableCell  >
            Balanced Amount
            </TableCell>
            <TableCell  >
            Created At
            </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {invoice?.map((invoice, index) => (

            <TableRow hover  >
            
            <TableCell >
            {invoice.invoice_id}
            </TableCell>
            <TableCell >
           {invoice.student_name}

            </TableCell>
            <TableCell >
            {invoice.identity_number}

            </TableCell>
            <TableCell >
            {invoice.invoice_status_name}

            </TableCell>
            <TableCell >
            {invoice.amount}

            </TableCell>
            <TableCell >
            {invoice.monthly_fee}

            </TableCell>
            <TableCell >
            {invoice.admission_fee}

            </TableCell>
            <TableCell >
            {invoice.security_fee}

            </TableCell>
            <TableCell >
            {invoice.extra_services_fee}

            </TableCell>
            <TableCell >
            {invoice.balanced_amount}

            </TableCell>
            <TableCell >
            {invoice.created_at}

            </TableCell>
            </TableRow>
            ))}

            </TableBody>
            </Table>
            
            </>
            );
        };
        
        export default Invoices;
        