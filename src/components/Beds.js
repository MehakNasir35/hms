import React from 'react';
import { Col, Row } from 'reactstrap';
import { useRooms } from '../hooks/room';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

export function Beds(props) {
        
        const floor_id = props.floorId
        
        const {data}=useRooms(floor_id)
        const rooms=data?.data[0]?.rooms
        
        return(
                <>
                <Row className="p-3">
                {rooms?.map((room, index) => (
                        <Col sm={1} md={1} lg={1} xs={1} className="rounded-box m-2 py-5 text-center " key={index}>
                        <h6 className="my-2">{room.room_number}</h6>
                        
                        <Row className="">
                        {room.beds?.map((bed, index) => (             
                                
                                <Col sm={1} md={1} lg={1} xs={1}>
                                <FontAwesomeIcon className='bed-icon' icon={faBed}
                                color={bed.status == 'Available' ? 'red':'green'} />
                                </Col>
                                ))}
                                
                                </Row>
                                
                                
                                </Col>
                                ))}
                                </Row>
                                </>
                                )
                                
                                
                        }