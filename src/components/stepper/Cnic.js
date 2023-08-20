import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, } from "reactstrap";
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

const Cnic = () => {
    
    const [cnicFront, setCnicFront] = useState(null);
    const [cnicBack, setCnicBack] = useState(null);
    const cnicFrontRef = useRef(null);
    const cnicBackRef = useRef(null);

    const cnicFrontUpload = (event) => {
        const file = event.target.files[0];
        setCnicFront(file);
    };

    const cnicBackUpload = (event) => {
        const file = event.target.files[0];
        setCnicBack(file);
    };
    
    
    return(
        <>
        <Card
        className="m-4 "
        >
        <CardHeader tag="h4" className="p-4">
        National Identity Card
        </CardHeader>
        <CardBody>
        <CardTitle tag="h5" className="p-4">
        
        <Row className="p-5 ">
        <Col>
        <div className="bgDiv">
        <div className="uploadDiv d-flex flex-column justify-content-center align-items-center">
        <FontAwesomeIcon icon={faFileImage} className="uploadIcon my-4" /> 
        <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={cnicFrontUpload}
        ref={cnicFrontRef}
        />
        <button className='closeButton' onClick={() => cnicFrontRef.current && cnicFrontRef.current.click()}>Upload CNIC front</button>
        {cnicFront && <p className="my-2">Selected: {cnicFront?.name}</p>}
        </div>
        </div>
        </Col>
        <Col>
        <div className="bgDiv">
        <div className="uploadDiv d-flex flex-column justify-content-center align-items-center">
        <FontAwesomeIcon icon={faFileImage} className="uploadIcon my-4" /> 
        <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={cnicBackUpload}
        ref={cnicBackRef}
        />
        <button className='closeButton' onClick={() => cnicBackRef.current && cnicBackRef.current.click()}>Upload CNIC Back</button>
        {cnicBack && <p className="my-2">Selected: {cnicBack?.name}</p>}
        </div>
        </div>
        </Col>
        </Row>
        
        
        
        
        </CardTitle>
        </CardBody>
        </Card>
        </>
        ) 
    }
    
    export default Cnic;
    