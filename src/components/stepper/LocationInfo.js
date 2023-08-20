import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import React,{useState} from 'react';
import { InputLabel,Select,FormControl,MenuItem} from '@material-ui/core'; // Import from @mui/material
import { useBuildings } from "../../hooks/building";

const LocationInfo = () => {
    
    const { data } = useBuildings()
    const buildings = data?.data
    
    const [building,setBuilding]=useState()
    
    return(
        <>
        <Card
        className="m-4 "
        >
        <CardHeader tag="h4" className="p-4">
        Location Information
        </CardHeader>
        <CardBody>
        <CardTitle tag="h5" className="p-4">
        
        <Row>
        <Col sm={6} lg={6} md={6} xs={6}>
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
            <Col sm={6} lg={6} md={6} xs={6}>
            <FormControl
            variant="outlined"
            className='w-100'>
            <InputLabel id="demo-simple-select-outlined-label">Floor Name</InputLabel>
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
                </Row>
                
                <Row className="my-4">
                <Col sm={6} lg={6} md={6} xs={6}>
                <FormControl
                variant="outlined"
                className='w-100'>
                <InputLabel id="demo-simple-select-outlined-label">Room No</InputLabel>
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
                    <Col sm={6} lg={6} md={6} xs={6}>
                    <FormControl
                    variant="outlined"
                    className='w-100'>
                    <InputLabel id="demo-simple-select-outlined-label">Bed No</InputLabel>
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
                        </Row>
                        
                        
                        </CardTitle>
                        </CardBody>
                        </Card>

</>
                        ) 
                    }
                    
                    export default LocationInfo;
                    