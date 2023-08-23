import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LocationInfo from "../components/stepper/LocationInfo";
import PersonalInfo from "../components/stepper/PersonalInfo";
import VisitorInfo from "../components/stepper/VisitorInfo";
import Cnic from "../components/stepper/Cnic";

import { faLocationDot, faUser, faUserPen, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { useAddStudent } from "../hooks/student";

const steps = [
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

const Registration = () => {
  
  const register = useAddStudent()
  
  const [activeStep, setActiveStep] = useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const locationInfo = useSelector((state) => state.reducers1.location_info);
  
  const personalInfo = useSelector((state) => state.reducers1.personal_info);
  
  const guardianInfo = useSelector((state) => state.reducers1.guardian_info);
  
  const visitorInfo = useSelector((state) => state.reducers1.visitors_info);
  
  const cnicFront = useSelector((state) => state.reducers1.idFrontImage);
  
  const cnicBack = useSelector((state) => state.reducers1.idBackImage);
  
  const submit=async()=>{
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

    const add = await register.mutateAsync(formData);}
  
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
      {getStepContent(activeStep)}
      <div className="step-buttons float-end">
      
      {activeStep >= steps.length-1 ? ' ' : <Button className="my-3 themeButtons" variant="contained" color="primary" onClick={handleNext}>
      Next  </Button>} 
      
      {activeStep === steps.length - 1 ? <Button className="my-3 themeButtons" disabled={activeStep === steps.length} variant="contained" color="primary" onClick={submit}>Finish
      </Button> : ' '}
      
      </div>
      </div>
      </div>
      );
    }
    
    export default Registration;
    