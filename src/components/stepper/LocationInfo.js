import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import React,{useEffect, useState} from 'react';
import { InputLabel,Select,FormControl,MenuItem} from '@material-ui/core'; // Import from @mui/material
import { useBuildings } from "../../hooks/building";
import { useFloors } from "../../hooks/floor";
import { useRooms } from "../../hooks/room";
import { useDispatch } from "react-redux";
import { updateLocationInfo } from "./reducer/actions";

const LocationInfo = () => {
    
    const dispatch = useDispatch();
    
    const handleLocationInfoChange = (field, value) => {
        // Create an object with the field you want to update
        const updateLocation = {
            [field]: value,
        };
        // Dispatch the action to update personal info in the Redux store
        dispatch(updateLocationInfo(updateLocation));
    };
    
    const { data } = useBuildings()
    const buildings = data?.data
    
    const [branchId,setBuilding]=useState(1)
    const [floorId,setFloor]=useState(1)
    const [roomId,setRoom]=useState(1)
    const [bedId,setBed]=useState(1)
    
    const [selectedRoom,setSelectedRoom]=useState(1)
    
    const [availableBeds,setAvailableBed]=useState([])
    
    const floorsData = useFloors(branchId)
    const floors = floorsData?.data?.data
    
    const roomsData=useRooms(floorId)
    const rooms=roomsData?.data?.data[0]?.rooms
    
    const set =(e) =>{
        setSelectedRoom(e)
        setRoom(e.room_id)
        handleLocationInfoChange('room_id',e.room_id)
    }
    
    useEffect(() => {
        floorsData.refetch();
        roomsData.refetch();
    }, [branchId, floorsData, roomsData]); // Include 'branchId', 'floorsData', and 'roomsData' in the dependency array
    
    useEffect(() => {
        roomsData.refetch();
    }, [floorId, roomsData]); // Include 'floorId' and 'roomsData' in the dependency array
    
    useEffect(() => {
        let availableBed = selectedRoom?.beds?.filter(bed => bed?.status === 'Available');
        setAvailableBed(availableBed);
    }, [roomId]); // Include 'roomId' and 'roomsData' in the dependency array
    
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
                value={selectedRoom}
                onChange={(e)=>{set(e.target.value)}}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {rooms?.map((room, index) => (
                    <MenuItem value={room}>{room.room_name}</MenuItem>
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
                    
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    {availableBeds?.map((bed, index) => (
                        <MenuItem value={bed.bed_id}>{bed.bed_id}</MenuItem>
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
                    