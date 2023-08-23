import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import React,{useState} from 'react';
import { TextField} from '@material-ui/core'; // Import from @mui/material
import { updateGuardianInfo, updatePersonalInfo } from './reducer/actions';
import { useDispatch, useSelector } from "react-redux";

const PersonalInfo = () => {

    const dispatch = useDispatch();


    const handlePersonalInfoChange = (field, value) => {
        // Create an object with the field you want to update
        const updatedPersonalInfo = {
          [field]: value,
        };
        // Dispatch the action to update personal info in the Redux store
        dispatch(updatePersonalInfo(updatedPersonalInfo));
      };

      const handleGuardianInfoChange = (field, value) => {
        // Create an object with the field you want to update
        const updatedGuardian = {
          [field]: value,
        };
        // Dispatch the action to update Guardian info in the Redux store
        dispatch(updateGuardianInfo(updatedGuardian));
      };
    
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
        // value={personal_info.student_name}
        onChange={(e) => handlePersonalInfoChange('student_name', e.target.value)}
        variant="outlined"
        />
        </Col>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="CNIC"
        id="outlined-start-adornment"
        className='m-2 w-100'
        onChange={(e) => handlePersonalInfoChange('identity_number', e.target.value)}
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
        onChange={(e) => handlePersonalInfoChange('primary_contact', e.target.value)}
        variant="outlined"
        />
        </Col>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Designation"
        id="outlined-start-adornment"
        className='m-2 w-100'
        onChange={(e) => handlePersonalInfoChange('designation', e.target.value)}

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
        onChange={(e) => handlePersonalInfoChange('emergency_contact_number', e.target.value)}

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
        onChange={(e) => handleGuardianInfoChange('guardian_name', e.target.value)}
        variant="outlined"
        />
        </Col>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Guardian Relation"
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        onChange={(e) => handleGuardianInfoChange('guardian_relation', e.target.value)}
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
        onChange={(e) => handleGuardianInfoChange('guardian_identity_number', e.target.value)}
        />
        </Col>
        <Col sm={6} lg={6} md={6} xs={6}>
        <TextField
        label="Guardian Contact No."
        id="outlined-start-adornment"
        className='m-2 w-100'
        variant="outlined"
        onChange={(e) => handleGuardianInfoChange('guardian_primary_contact', e.target.value)}
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
    