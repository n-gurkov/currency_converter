
import React, { useRef, Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../index.css'

export default function BasicTextFields(props) {
  
  const handleChange = (event) => {
    props.counter(event.target.value, props.flag)
    //setField(event.target.value);
    //console.log(event.target.value)
   
  };

  
  return (
    
    <Box className="App-inputs" >

      <TextField onChange={handleChange} 
      
      value = {props.value}  
      />
      
    </Box>
  );
}