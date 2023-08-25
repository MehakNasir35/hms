import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LocationInfo from "../components/stepper/LocationInfo";
import PersonalInfo from "../components/stepper/PersonalInfo";
import VisitorInfo from "../components/stepper/VisitorInfo";
import Cnic from "../components/stepper/Cnic";

import { faLocationDot, faUser, faUserPen, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { useAddStudent, useUpdateStudent } from "../hooks/student";
import { Alert } from "reactstrap";
import { resetState } from "../components/stepper/reducer/actions";


const Registration = () => {

  const dispatch = useDispatch()
  
  const register = useAddStudent()
  const updateStudent = useUpdateStudent()
  
  const [activeStep, setActiveStep] = useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const editStudent = useSelector((state) => state.reducers1.student_id);
  console.log('edit student',editStudent)
  
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
  
  
  let modifiedSteps = [...steps]; // Create a copy of the original steps array
  
  if (editStudent) {
    // If editStudent has a value, keep only the first two steps
    modifiedSteps = modifiedSteps.slice(0, 2);
    steps = modifiedSteps
  }
  
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
        console.log("Something went wrong during the mutation");
      }
    } catch (error) {
      console.error("An error occurred during the mutation:", error);
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
        console.log("Something went wrong during the mutation");
      }
    } catch (error) {
      console.error("An error occurred during the mutation:", error);
      // Handle the error, show an error message, etc.
    }
    
  }
  
  return (
    
    <div > {/* Wrap the content in a container */}
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
      