import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LocationInfo from "../components/stepper/LocationInfo";
import PersonalInfo from "../components/stepper/PersonalInfo";
import VisitorInfo from "../components/stepper/VisitorInfo";
import Cnic from "../components/stepper/Cnic";

import { faLocationDot, faUser, faUserPen, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { useAddStudent, useUpdateStudent ,useUpdateStudentStatus} from "../hooks/student";
import { Alert, Col, Row } from "reactstrap";
import { resetState } from "../components/stepper/reducer/actions";


const Registration = () => {
  
  const editStudent = useSelector((state) => state.reducers1.student_id);
  const status = useSelector((state) => state.reducers1.student_status);
  
  const dispatch = useDispatch()
  
  const register = useAddStudent()
  const updateStudent = useUpdateStudent()
  const updateStudentStatus = useUpdateStudentStatus()
  
  const [activeStep, setActiveStep] = useState(0);
  const [studentStatus, setStudentStatus] = useState(status);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  let steps = [
    { label: 'Location Info', icon: faLocationDot },
    { label: 'Personal Info', icon: faUser },
    { label: 'Visitor Info', icon: faUserPen },
    { label: 'CNIC', icon: faIdCard }
  ];
  
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
      return <LocationInfo />;
      case 1:
      return <PersonalInfo />;
      case 2:
      return <VisitorInfo />;
      case 3:
      return <Cnic />;
      default:
      return '';
    }
  };
  
  
  const locationInfo = useSelector((state) => state.reducers1.location_info);
  
  const personalInfo = useSelector((state) => state.reducers1.personal_info);
  
  const guardianInfo = useSelector((state) => state.reducers1.guardian_info);
  
  const visitorInfo = useSelector((state) => state.reducers1.visitors_info);
  
  const cnicFront = useSelector((state) => state.reducers1.idFrontImage);
  
  const cnicBack = useSelector((state) => state.reducers1.idBackImage);
  
  const update=async ()=>{
    try {
      
      const personal_info={
        'student_name':personalInfo.student_name,
        'primary_contact':personalInfo.primary_contact,
        'designation':personalInfo.designation,
        'emergency_contact_number':personalInfo.emergency_contact_number,
        
      }
      
      const uStudent = await updateStudent.mutateAsync({'location_info':locationInfo,personal_info,'student_id':editStudent});
      if (uStudent) {
        dispatch(resetState());
        
        // Reset the form or perform any other actions
        setActiveStep(0);
        
      } else {
      }
    } catch (error) {
      // Handle the error, show an error message, etc.
    }
  }
  
  const submit=async()=>{
    try {
      const formData = new FormData();
      formData.append('location_info', JSON.stringify(locationInfo));
      formData.append('personal_info', JSON.stringify(personalInfo));
      formData.append('guardian_info', JSON.stringify(guardianInfo));
      formData.append('visitors_info', JSON.stringify(visitorInfo));
      
      if (cnicFront) {
        formData.append('idFrontImage', cnicFront, cnicFront.name);
      }
      
      if (cnicBack) {
        formData.append('idBackImage', cnicBack, cnicBack.name);
      }
      
      const add = await register.mutateAsync(formData);
      
      
      if (add) {
        // Reset the form or perform any other actions
        setActiveStep(0);
        dispatch(resetState());
        
      } else {
      }
    } catch (error) {
      // Handle the error, show an error message, etc.
    }
    
  }
  
  const changeStatus = async(status) =>{
    setStudentStatus(status)

    const uStudent = await updateStudentStatus.mutateAsync({'student_id':editStudent,'status_id':status})
  }
  
  return (
    
    <div > {/* Wrap the content in a container */}
    
    
    <Row className="pt-2">
    <Col>
    <h4>Registration</h4>
    </Col>
    <Col>
    
    {(activeStep == 0 && editStudent) ? <FormControl
      variant="outlined"
      className='w-25 float-end my-2  '>
      <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
      <Select
      onChange={(e)=>changeStatus(e.target.value)}
      value={studentStatus}
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      >
      <MenuItem value={1}>Joined</MenuItem>
      <MenuItem value={2}>Active</MenuItem>
      <MenuItem value={3}>Left</MenuItem>
      </Select>
      </FormControl> : ''}
      
      
      </Col>
      </Row>
      
      
      
      <Stepper className="Stepper" activeStep={activeStep} alternativeLabel>
      
      {steps.map((step, index) => (
        <Step key={step.label}>
        <StepLabel icon={
          <div className="circle-icon">
          <FontAwesomeIcon icon={step.icon} className="stepperIcon" />
          </div>
        }>{step.label}</StepLabel>
        </Step>
        ))}
        </Stepper>
        <div className="step-content">
        
        {register.isError && <Alert color='danger' className='my-4'>Error: {register.error.response.data.error}</Alert>}
        
        {getStepContent(activeStep)}
        <div className="step-buttons float-end">
        
        {activeStep > 0 ?  <Button className="my-3 themeButtons" variant="contained" color="primary" onClick={handleBack}>
        Back  </Button> : ' '} 
        
        {activeStep >= steps.length-1 ? ' ' : <Button className="m-3 themeButtons" variant="contained" color="primary" onClick={handleNext}>
        Next  </Button>} 
        
        
        
        {activeStep === steps.length - 1 && (
          <Button
          className="m-3 themeButtons"
          variant="contained"
          color="primary"
          onClick={editStudent ? update :submit}
          >
          {editStudent ? 'Update' : 'Submit'}
          </Button>
          )}
          
          </div>
          </div>
          </div>
          );
        }
        
        export default Registration;
        