import React from 'react';


import { Row,Col,Button,Badge, } from "reactstrap";
import { Floor } from "../components/Floor";
import { Rooms } from "../components/Rooms";
import { AddBuilding } from '../components/modals/AddBuilding';
import { useBuildings } from '../hooks/building';

const RoomManagement = () => {
    
    const { data } = useBuildings()
    const buildings = data?.data
    
    return (
        <>
        
        <Row className="pt-2">
        <Col>
        <h4> Room Management</h4>
        </Col>
        <Col>
        <AddBuilding />
        </Col>
        </Row>
        
        
        {buildings?.map((building, index) => (
            <> 
            <p className="text-left">{building.branch_name}</p>
            
            <h5><Badge className="px-3 badgeHostel rounded-pill" >
            Hostel Room
            </Badge></h5>
            
            
            <Floor branchId={building.branch_id} pageName="RoomManagement" />
            
            </> 
            ))}
            
            
            
            </>
            );
        };
        
        export default RoomManagement;
        