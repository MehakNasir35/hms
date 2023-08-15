import { Row,Col,Button,Badge } from "reactstrap";
import { Floor } from "../components/Floor";
import { Rooms } from "../components/Rooms";

const RoomManagement = () => {
    return (
        <>
        
        <Row className="pt-2">
        <Col>
        <h4> Room Management</h4>
        </Col>
        <Col>
        <Button className="float-end themeButtons">Add Building +</Button>
        </Col>
        </Row>
        
        <p className="text-left">Building 01</p>
        
        <h5><Badge className="px-3 badgeHostel rounded-pill" >
        Hostel Room
        </Badge></h5>
        
        <div className="rounded-box my-4">
        
        <Row className="pt-2">
        <Col>
        
        <Floor />

        </Col>
        <Col>
        <Button className="float-end mt-2">Add Floor +</Button>
        </Col>
        </Row>
        
        </div>
        
        <Rooms />
        
        
        </>
        );
    };
    
    export default RoomManagement;
    