import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import React,{useState} from 'react';
import { TextField} from '@material-ui/core'; // Import from @mui/material

const PersonalInfo = () => {
    
    
    return(
        <>
        <Card
        className="m-4 "
        >
        <CardHeader tag="h4" className="p-4">
        Personal Information
        </CardHeader>
        <CardBody>
        <CardTitle tag="h5" className="p-4">
        
        <Row>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Student Name"
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        />
        </Col>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="CNIC"
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        />
        </Col>
        </Row>
        
        <Row className="my-4">
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Contact No"
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        />
        </Col>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Designation"
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        />
        </Col>
        </Row>
        
        <Row>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Emergency Contact No."
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        />
        </Col>
        </Row>
        
        
        </CardTitle>
        </CardBody>
        </Card>
        
        <Card
        className="m-4 "
        >
        <CardHeader tag="h4" className="p-4">
        Guardian Information
        </CardHeader>
        <CardBody>
        <CardTitle tag="h5" className="p-4">
        
        <Row>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Guardian Name"
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        />
        </Col>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Guardian Relation"
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        />
        </Col>
        </Row>
        
        <Row className="my-4">
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Guardian CNIC"
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        />
        </Col>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Guardian Contact No."
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        />
        </Col>
        </Row>
        
        
        </CardTitle>
        </CardBody>
        </Card>
        </>
        ) 
    }
    
    export default PersonalInfo;
    