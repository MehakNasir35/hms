import {Table,TableRow,TableCell,TableBody,TableHead } from '@material-ui/core'; // Import from @mui/material
import { Col, Row } from 'reactstrap';
import { updateVisitorInfo } from './reducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AddVisitor } from '../modals/AddVisitor';


const VisitorInfo = () => {
    const visitorInfo = useSelector((state) => state.reducers1.visitors_info);
    const editStudent = useSelector((state) => state.reducers1.student_id);    
    return(
        <>
        
        <Row className="pt-2">
        <Col>
        <h4>Visitor Information</h4>
        </Col>
        <Col>

        {editStudent ?  "" : <AddVisitor /> }
        
        </Col>
        </Row>
        
        <Table stickyHeader aria-label="sticky table" className='mt-5 themeTable'>
        <TableHead>
        <TableRow>
        <TableCell  >
        Name
        </TableCell>
        <TableCell  >
        Relation
        </TableCell>
        <TableCell  >
        CNIC
        </TableCell>
        <TableCell  >
        Contact No
        </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        
        {visitorInfo?.map((visitor, index) => (
            <TableRow hover  >
            <TableCell >
            {visitor.visitor_name}
            </TableCell>
            <TableCell >
            {visitor.visitor_relation}
            </TableCell>
            <TableCell >
            {visitor.visitor_identity_number}
            </TableCell>
            <TableCell >
            {visitor.visitor_primary_contact}
            </TableCell>
            </TableRow>
            ))}
            
            </TableBody>
            </Table>
            </>
            ) 
        }
        
        export default VisitorInfo;
        