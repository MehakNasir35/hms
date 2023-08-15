import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { TextField,Table, TableContainer,TableRow,TableCell,TableBody,TableHead } from '@material-ui/core'; // Import from @mui/material

const StudentInformation = () => {
    return (
        <>
        <Row className="pt-2">
        <Col>
        <h4>Student Information</h4>
        </Col>
        <Col>
        <Button className="float-end themeButtons">Add Student +</Button>
        </Col>
        </Row>
        
        <div className='m-3'>
        <TextField
        required
        id="outlined-required"
        label="Search By Name"
        placeholder="Name"
        style={{ marginRight: '1rem' }}
        className='themeFields'
        
        />
        <TextField
        required
        id="outlined-required"
        label="Search By CNIC"
        placeholder="CNIC"
        style={{ marginRight: '1rem' }}
        className='themeFields'
        
        />
        <TextField
        required
        id="outlined-required"
        label="Search By Contact No"
        placeholder="Contact No"
        style={{ marginRight: '1rem' }}
        className='themeFields'
        />
        <Button className="themeButtons mt-3">Search</Button>
        </div>
        
        <Table stickyHeader aria-label="sticky table" className='mt-5'>
        <TableHead>
        <TableRow>
        <TableCell  >
        Student ID
        </TableCell>
        <TableCell  >
        Student Name
        </TableCell>
        <TableCell  >
        Contact No
        </TableCell>
        <TableCell  >
        CNIC
        </TableCell>
        <TableCell  >
        Status
        </TableCell>
        <TableCell  >
        Monthly Charges
        </TableCell>
        <TableCell  >
        Edit
        </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        <TableRow hover role="checkbox" tabIndex={-1} >
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        </TableRow>
        <TableRow hover role="checkbox" tabIndex={-1} >
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        </TableRow>
        </TableBody>
        </Table>
        
        </>
        );
    };
    
    export default StudentInformation;
    