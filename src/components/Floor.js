import React, { useState,useEffect } from 'react';
import { Button, Nav, NavItem, NavLink, Row,Col } from 'reactstrap';
import { useFloors } from '../hooks/floor';
import { Rooms } from './Rooms';
import { AddFloor } from './modals/AddFloor';
import { Beds } from './Beds';

export function Floor(props) {
  
  const branchId = props.branchId
  const pageName = props.pageName
  
  const [floorIndex, setFloorIndex] = useState(0);
  
  const {data} = useFloors(branchId)
  const floors = data?.data
 
  let hasFloors = true;

  if (pageName === "BuildingMap" && floors?.length === 0 ) {
    hasFloors = false;
  }

  useEffect(() => {
    setFloorIndex(0)
  }, [branchId]);
  
  return (
    <>
    
    {hasFloors && (
      <>
      <div className="rounded-box my-4">
      
      <Row className="pt-2">
      <Col md={10} lg={10} sm={10} xs={10}>
      
      <Nav className="nav-pills-custom">
      
      {floors?.map((floor, index) => (
        <NavItem  key={floor.floor_id}>
        
        <NavLink
        onClick={() =>  setFloorIndex(floor.floor_id)}
        active={floorIndex === floor.floor_id}
        >
        {floor.floor_name}
        </NavLink>
        </NavItem>
        
        ))}
        </Nav>
        
        </Col>
        <Col md={2} lg={2} sm={2} xs={2}>
        
        {pageName == "RoomManagement" ? <AddFloor branchId={branchId} /> : ""}
        
        </Col>
        </Row>
        
        </div>
        
        {pageName == "RoomManagement" ? <Rooms floorId={floorIndex} /> : ""}
        
        {pageName == "BuildingMap" ? <Beds floorId={floorIndex} /> : ""}
        </> )}
        </>
        );
      }
      