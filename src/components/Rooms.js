import React from 'react';
import { Col, Row } from 'reactstrap';
import { useRooms } from '../hooks/room';
import { AddRoom } from './modals/AddRoom';

export function Rooms(props) {
        
        const floor_id = props.floorId
        
        const {data}=useRooms(floor_id)
        const rooms=data?.data[0]?.rooms
        
        return(
                <>
                <Row className="p-3">
                 {floor_id != 0 && (
                        <AddRoom  floor_id={floor_id}/>
                 )}       
               
                
                {rooms?.map((room, index) => (
                        <Col sm={1} md={1} lg={1} xs={1} className="rounded-box p-3 m-2 d-flex flex-column align-items-center justify-content-center">
                        {/* <center> */}
                        Room no.
                        <h4 className="my-2">{room.room_number}</h4>
                        <hr className="w-100" />
                        {room.room_name}
                        {/* </center> */}
                        </Col>
                        ))}
                        </Row>
                        
                        
                        </>
                        )
                        
                        
                }