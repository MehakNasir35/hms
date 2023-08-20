import React,{useState} from 'react';

import { Modal,Typography,TextField, FormControlLabel, Checkbox } from '@material-ui/core'; // Import from @mui/material
import '../../assets/modal.css';
import { Button, Col, Row } from "reactstrap";
import { useAddRoom } from '../../hooks/room';
import { useServices } from '../../hooks/services';


export function AddRoom(props) {

    const {data}=useServices()
    const extraServices=data?.data
    
    const floor_id = props.floor_id
    
    const room=useAddRoom()
    
    const [modalOpen, setModalOpen] = useState(false);
    const [room_name, setName] = useState('');
    const [room_number, setNumber] = useState('');
    const [room_charges, setCharges] = useState('');
    const [seat_capacity, setCapacity] = useState('');
    const [services, setServices] = useState([]);

    const handleCheckboxChange = (service) => (event) => {
   
        if (event.target.checked) {
          // Add the service to the services array
          setServices([...services, service]);
        } else {
          // Remove the service from the services array
          setServices(services.filter(item => item !== service));
        }
    }
    
    const handleOpen = () => {
        setModalOpen(true);
    };
    
    const handleClose = () => {
        setModalOpen(false);
    };
    
    const addRoomm =async() => {
        let add = await room.mutateAsync({room_name,room_number,room_charges,seat_capacity,services,floor_id})
        handleClose()
    }
    
    return(
        <>
        
        <Col  onClick={handleOpen} sm={1} md={1} lg={1} xs={1} className="rounded-box p-3 m-2 d-flex flex-column align-items-center justify-content-center addRoom">
        
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame" clip-path="url(#clip0_46_114)">
        <g id="Group">
        <path id="Vector" d="M8.86792 15.2458C11.5075 15.2458 14.1492 15.2664 16.7888 15.2314C17.5506 15.2211 17.8162 15.4682 17.7956 16.2363C17.7503 17.9495 17.7771 19.6648 17.7853 21.38C17.7874 21.8577 17.7544 22.1913 17.1429 22.3396C16.2679 22.5517 16.4346 23.4927 16.1978 24.1166C15.9693 24.7179 15.7263 25.0185 15.0407 24.9979C14.3942 24.9794 14.2707 24.5779 14.108 24.1063C13.3688 21.9772 13.9371 22.3437 11.594 22.319C9.46914 22.2963 7.34222 22.3416 5.21737 22.2984C4.51938 22.284 4.122 22.4672 3.98405 23.1818C3.89963 23.6162 3.69785 24.024 3.57431 24.4523C3.44254 24.9114 3.10898 24.9917 2.69925 24.9876C2.27304 24.9835 1.87566 24.9794 1.73565 24.442C1.61623 23.9786 1.4371 23.5318 1.28268 23.0767C1.15091 22.6917 1.0809 22.3066 0.510566 22.284C-0.0844762 22.2593 0.0143543 21.7301 0.0122953 21.3347C0.00611839 19.6524 0.0411209 17.9721 0.00200045 16.2919C-0.0165303 15.5074 0.212015 15.2088 1.05207 15.2253C3.65667 15.2788 6.26333 15.2458 8.86792 15.2458Z" fill="#2B467D"/>
        <path id="Vector_2" d="M15.9756 4.5568C15.9756 5.75522 15.9509 6.95569 15.9859 8.15411C16.0024 8.72038 15.8336 8.92423 15.2426 8.94482C14.277 8.97983 13.6119 8.91599 13.3834 7.67845C13.1137 6.2247 11.8721 5.40104 10.3773 5.34339C9.48783 5.31044 8.5963 5.32486 7.70476 5.33515C5.83522 5.35574 4.77279 6.20823 4.25393 8.0841C4.05627 8.79862 2.53263 9.2887 1.94789 8.83157C1.71111 8.64625 1.80582 8.39091 1.80582 8.16853C1.79964 5.77169 1.82023 3.37279 1.78935 0.973897C1.78111 0.294382 2.03436 0.0369895 2.68706 0.0719949C3.51682 0.115237 4.58954 -0.259526 4.43924 1.27041C4.40012 1.66989 4.79132 1.48662 4.97663 1.41043C7.57299 0.339683 10.1693 0.304677 12.7678 1.39602C13.1857 1.57105 13.4122 1.50516 13.404 0.990371C13.3772 -0.51486 14.5302 0.205839 15.1953 0.0946454C16.0395 -0.0474351 15.9839 0.599134 15.9798 1.1654C15.9695 2.29586 15.9756 3.42633 15.9756 4.5568Z" fill="#2B467D"/>
        <path id="Vector_3" d="M8.87607 14.2718C6.58238 14.2718 4.28868 14.2512 1.99499 14.2842C1.31965 14.2945 1.06846 14.1277 1.20641 13.4173C1.38965 12.4783 1.50702 11.5249 1.62232 10.5736C1.68203 10.0877 1.86528 9.87558 2.40061 9.8797C6.74915 9.90029 11.0977 9.89205 15.4462 9.88793C15.8189 9.88793 16.0989 9.91264 16.1525 10.3986C16.2636 11.4179 16.3831 12.4413 16.5848 13.4461C16.7413 14.2245 16.3707 14.2863 15.7613 14.2801C13.4635 14.2595 11.1698 14.2718 8.87607 14.2718Z" fill="#2B467D"/>
        <path id="Vector_4" d="M20.7814 8.01208C19.8178 8.25712 19.5934 7.70527 19.649 6.70453C19.7231 5.3455 19.6654 5.35991 18.2592 5.3249C17.8494 5.31461 17.24 5.572 17.0732 5.03457C16.8735 4.39212 16.8364 3.64259 17.102 3.01661C17.2997 2.55536 17.9009 2.7654 18.325 2.75922C19.7787 2.73451 19.6469 2.90954 19.6757 1.44343C19.684 1.02131 19.4451 0.434451 19.896 0.212064C20.5137 -0.0926883 21.2591 -0.028855 21.9076 0.162645C22.4697 0.329435 22.2309 0.924526 22.2412 1.33635C22.27 2.73863 22.2556 2.72627 23.6701 2.75716C24.086 2.76746 24.6811 2.5533 24.8396 3.11133C25.0249 3.76202 25.097 4.50949 24.7758 5.12105C24.5493 5.54935 23.9481 5.36815 23.5383 5.31667C22.4862 5.18282 22.163 5.57406 22.2288 6.62216C22.3194 8.00796 22.2474 8.01208 20.7814 8.01208Z" fill="#2B467D"/>
        <path id="Vector_5" d="M8.90322 8.91806C7.90873 8.91806 6.91219 8.88305 5.91977 8.92835C5.15383 8.96336 5.07353 8.66272 5.28355 8.02027C5.61916 6.9907 6.3048 6.38738 7.37134 6.35649C8.39877 6.3256 9.43031 6.32148 10.4577 6.35855C11.6355 6.39973 12.4899 7.28516 12.6299 8.44651C12.6917 8.95924 12.4096 8.92629 12.0905 8.92629C11.0281 8.92835 9.96358 8.92629 8.90116 8.92629C8.90322 8.92423 8.90322 8.92218 8.90322 8.91806Z" fill="#2B467D"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_46_114">
        <rect width="25" height="25" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
        Add Room 
        </Col>
         
        <Modal
        open={modalOpen}
        onClose={handleClose}
        className="modall"
        >
        <div className="custom-modal-body ">
        <div className="custom-modal-header">
        <Typography variant="h6" className="modalHeader">
        Add Room
        </Typography>
        <span className="modal-close-button" onClick={handleClose}>X</span>
        </div>
        <div className="line-divider"></div>
        <div className="custom-modal-content">
        
        <Row>
          <Col>
          <TextField
        label="Room No."
        name={room_number}
         type='number'
        value={room_number}
        onChange={(e) => { setNumber(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        />
          </Col>
          <Col>
          <TextField
        label="Room Name"
        name={room_name}
        value={room_name}
        onChange={(e) => { setName(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        />
          </Col>
        </Row>

        <Row>
          <Col>
          <TextField
        label="Bed Capacity"
        name={seat_capacity}
        value={seat_capacity}
        type='number'
        onChange={(e) => { setCapacity(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        />
          </Col>
          <Col>
          <TextField
        label="Room Charges"
        type='number'
        name={room_charges}
        value={room_charges}
        onChange={(e) => { setCharges(e.target.value) }}
        className='my-2 w-100'
        variant="outlined"
        />
          </Col>
        </Row>
       
        
       
        
      
        
     
        
        <h6>Extra Services</h6>
        
        <div className='d-flex'>

        {extraServices?.map((service, index) => (
        <FormControlLabel
          control={<Checkbox onChange={handleCheckboxChange(service.service_id)} />}
          label={service.service_name}
        />
        ))}
       
      </div>
        
        
        <div className="button-group">
        <Button onClick={handleClose} className='closeButton'>Close</Button>
        <Button onClick={addRoomm} className="themeButtons">Add Room</Button>
        </div>
        </div>
        </div>
        </Modal>
        
        </>
        )
        
    }