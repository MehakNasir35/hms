import {Table,TableRow,TableCell,TableBody,TableHead } from '@material-ui/core'; // Import from @mui/material
import { AddBuilding } from '../modals/AddBuilding';
import { Col, Row } from 'reactstrap';


const VisitorInfo = () => {
    return(
        <>

<Row className="pt-2">
        <Col>
        <h4>Visitor Information</h4>
        </Col>
        <Col>
        <AddBuilding />
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
        <TableRow hover  >
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        <TableCell >
        s
        </TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </>
        ) 
    }
    
    export default VisitorInfo;
    