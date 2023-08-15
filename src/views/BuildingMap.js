import { Row,Badge } from "reactstrap";
import { Floor } from "../components/Floor";
import { Beds } from "../components/Beds";

const BuildingMap = () => {
    return (
        <>
        
        <h4> Building Map</h4>

        <h5><Badge className="px-3 badgeHostel rounded-pill" >
        Hostel Room
        </Badge></h5>
        
        <div className="rounded-box my-4">
            <Row className="pt-2">
            <Floor />
            </Row>
        </div>

          <Beds />
        
        </>
        
        );
    };
    
    export default BuildingMap;
    