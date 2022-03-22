import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../index.css'




export default function BasicSelect(props) {
 
  const items = props.items
  const values = Object.values(items)
  //const keys = Object.keys(items)
  const handleChange = (event) => {
    props.setSelect(event.target.value);
    //console.log(event.target.value)
   
  };
 //console.log(rate)
  return (
    <Box >
      <FormControl >
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          className="App-inputs"
          onChange={handleChange}
        >
          {
           Object.keys(items).map(key =>  <MenuItem key={key} value = {items[key]}>{key}</MenuItem>)
          }
         {/*  <MenuItem value = {1}>{items[0]}</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
    
  );
  
}