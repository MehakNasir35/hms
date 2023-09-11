import React , {useState} from 'react';
import { Row, Col, Button, Alert } from 'reactstrap';
import { TextField,Table,TableRow,TableCell,TableBody,TableHead,InputLabel,Select,FormControl,MenuItem } from '@material-ui/core'; // Import from @mui/material
import { useStudents } from '../hooks/student';

import { useBuildings } from '../hooks/building';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare , faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateCnicBack, updateCnicFront, updateGuardianInfo, updateLocationInfo, updatePersonalInfo, updateStatus, updateStudentId, updateVisitorArray } from '../components/stepper/reducer/actions';
import { useNavigate } from 'react-router-dom';

const StudentInformation = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10; // Adjust this number as needed
  
  const navigate= useNavigate()
  
  const dispatch = useDispatch();
  const { data } = useBuildings()
  const buildings = data?.data
  
  const [building,setBuilding]=useState('')
  const [cnic,setCnic]=useState('')
  const [status,setStatus]=useState('')
  const [students,setStudents]=useState([])
  const [error,setError]=useState(false)
  
  const list = useStudents()
  
  const search = async () => {
    try {
      setError(false)
      
      const response = await list.mutateAsync({
        branch_id: building,
        identity_number: cnic,
        status,
      });
      
      if(response)
      setStudents(response?.students); // Set the students array
      setCurrentPage(1)
      
    } catch (error) {
      setError(true)
    }
  };
  
  const Edit=(student)=>{

    let status_value = 3

    dispatch(updateStudentId(student.student_id));

    if(student.student_status == 'Joined')
    status_value = 1
    else if(student.student_status == 'Active')
    status_value = 2

    dispatch(updateStatus(status_value));
    
    dispatch(updateLocationInfo(student.location_info));

    dispatch(updateGuardianInfo(student.guardian_info));

    dispatch(updateVisitorArray(student.visitors_info));

    dispatch(updateCnicBack(student.identity_images_info.id_image_back));
    dispatch(updateCnicFront(student.identity_images_info.id_image_front));

    const personal_info ={
      student_name:student.student_name,
      identity_number:student.identity_number,
      primary_contact:student.primary_contact,
      designation:student.designation,
      emergency_contact_number:student.emergency_contact
    }

    dispatch(updatePersonalInfo(personal_info));

   
    
    navigate('/home/registration')
    
  }
  
  // Calculate the index range for the current page
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const studentsToShow = students.slice(indexOfFirstStudent, indexOfLastStudent);
  
  // Pagination controls
  const totalPages = Math.ceil(students.length / studentsPerPage);
  
  return (
    <>
    
    {list.isLoading && <p>Loading Data...</p>}
    {error && <Alert color="danger">{list.error.response.data.error}</Alert>}
    
    <Row className="pt-2">
    <Col>
    <h4>Student Information</h4>
    </Col>
    </Row>
    
    <div className='m-3'>
    
    <FormControl
    variant="outlined"
    className='w-25'>
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
      
      <TextField
      required
      name={cnic}
      value={cnic}
      onChange={(e)=>setCnic(e.target.value)}
      id="outlined-required"
      label="Search By CNIC"
      placeholder="CNIC"
      className='mx-3 w-25'
      variant='outlined'        
      />
      
      <FormControl
      variant="outlined"
      className='w-25'>
      <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
      <Select
      value={status}
      onChange={(e)=>{setStatus(e.target.value)}}
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      >
      <MenuItem value={1}>Joined</MenuItem>
      <MenuItem value={2}>Active</MenuItem>
      <MenuItem value={3}>Left</MenuItem>
      </Select>
      </FormControl>
      
      <Button className="themeButtons m-2" onClick={()=>search()}>Search</Button>
      </div>
      
      <Table stickyHeader aria-label="sticky table" className='mt-5 themeTable'>
      <TableHead>
      <TableRow>
      <TableCell  >
      Student ID
      </TableCell>
      <TableCell  >
      Student Name
      </TableCell>
      <TableCell  >
      Contact No
      </TableCell>
      <TableCell  >
      CNIC
      </TableCell>
      <TableCell  >
      Status
      </TableCell>
      <TableCell  >
      Monthly Charges
      </TableCell>
      <TableCell  >
      Edit
      </TableCell>
      
      </TableRow>
      </TableHead>
      <TableBody>
      
      {studentsToShow?.map((student, index) => (
        
        <TableRow hover  >
        
        <TableCell >
        {student.student_id}
        </TableCell>
        <TableCell >
        {student.student_name}
        
        </TableCell>
        <TableCell >
        {student.primary_contact}
        </TableCell>
        <TableCell >
        {student.identity_number}
        </TableCell>
        <TableCell >            
        <Button color={student.student_status == 'Left' ? 'danger':'success'}>{student.student_status}</Button>
        </TableCell>
        <TableCell >
        {student.student_charges}
        </TableCell>
        <TableCell >
        
        <FontAwesomeIcon onClick={()=>Edit(student)}  icon={faPenToSquare}/>
        </TableCell>
        </TableRow>
        ))}
        </TableBody>
        </Table>
        
        
        {/* Centered pagination controls */}
        <div className="pagination-container">
        <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <span className="page-number">{currentPage}</span>
        <Button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={indexOfLastStudent >= students.length}
        >
        <FontAwesomeIcon icon={faArrowRight} />
        </Button>
        </div>
        
        </>
        );
      };
      
      export default StudentInformation;
      