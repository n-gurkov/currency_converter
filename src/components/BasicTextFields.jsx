
import React, { useRef, Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../index.css'

export default function BasicTextFields(props) {
  const [field, setField] = React.useState('');
  const valueRef = useRef('')
  const handleChange = (event) => {
    setField(event.target.value);
    console.log(event.target.value)
   
  };
  const rate = 2
  let newField = field * rate
  return (
    
    <Box className="App-inputs"
    onChange={handleChange}
    >

      <TextField value = {newField} inputRef={valueRef}  />
      
    </Box>
  );
}