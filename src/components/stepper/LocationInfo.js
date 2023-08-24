import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import React,{useEffect, useState} from 'react';
import { InputLabel,Select,FormControl,MenuItem} from '@material-ui/core'; // Import from @mui/material
import { useBuildings } from "../../hooks/building";
import { useFloors } from "../../hooks/floor";
import { useRoom, useRooms } from "../../hooks/room";
import { useDispatch, useSelector } from "react-redux";
import { updateLocationInfo } from "./reducer/actions";

const LocationInfo = () => {
    const dispatch = useDispatch();
    const locationInfo = useSelector((state) => state.reducers1.location_info);
    console.log(locationInfo)
    const { data } = useBuildings()
    const buildings = data?.data 
    
    const floorsData = useFloors(locationInfo.branch_id)
    const floors = floorsData?.data?.data
    
    const roomsData=useRooms(locationInfo.floor_id)
    const rooms=roomsData?.data?.data[0]?.rooms
    
    const bedsData=useRoom(locationInfo.room_id)
    const beds=bedsData?.data?.data[0]?.beds
 
    const filteredBeds = beds?.filter((bed) => {
        // Filter available beds within the selected room
        return bed?.status === 'Available';
      });

    const handleLocationInfoChange = (field, value) => {
        // Create an object with the field you want to update
        const updateLocation = {
            [field]: value,
        };
        // Dispatch the action to update personal info in the Redux store
        dispatch(updateLocationInfo(updateLocation));
    };
    
    
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
        value={locationInfo.branch_id}
        onChange={(e) => handleLocationInfoChange('branch_id', e.target.value)}
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        {buildings?.map((building, index) => (
            <MenuItem value={building.branch_id}>{building.branch_name}</MenuItem>
            ))}
            </Select></FormControl>
            </Col>
            
            <Col sm={6} lg={6} md={6} xs={6}>
            <FormControl
            variant="outlined"
            className='w-100'>
            <InputLabel id="demo-simple-select-outlined-label">Floor Name</InputLabel>
            <Select
            value={locationInfo.floor_id}
            onChange={(e) => handleLocationInfoChange('floor_id', e.target.value)}
            
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            {floors?.map((floor, index) => (
                <MenuItem value={floor.floor_id}>{floor.floor_name}</MenuItem>
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
                value={locationInfo.room_id}
                onChange={(e)=> handleLocationInfoChange('room_id', e.target.value)}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {rooms?.map((room, index) => (
                    <MenuItem value={room.room_id}>{room.room_name}</MenuItem>
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
                    onChange={(e) => handleLocationInfoChange('seat_id', e.target.value)}
                    value={locationInfo.seat_id}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    {filteredBeds?.map((bed, index) => (
                        <MenuItem value={bed.bed_id}>{bed.bed_id} </MenuItem>
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
                    