import React,{useState} from 'react';
import { Badge } from "reactstrap";
import { Floor } from "../components/Floor";
import { useBuildings } from '../hooks/building';
import { InputLabel,Select,FormControl,MenuItem} from '@material-ui/core'; // Import from @mui/material

const BuildingMap = () => {
  
  const { data } = useBuildings()
  const buildings = data?.data
  
  const [building,setBuilding]=useState()
  
  return (
    <>
    
    <h4> Building Map</h4>
    
    <FormControl
    variant="outlined"
    className='w-25 my-2'>
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

      <h5><Badge className="px-3 mt-2 badgeHostel rounded-pill" >
    Hostel Room
    </Badge></h5>
      
      <Floor branchId={building} pageName="BuildingMap" />
      
      
      </>
      
      );
    };
    
    export default BuildingMap;
    