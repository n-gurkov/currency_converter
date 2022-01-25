import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {allCoins, setAllCoins} from '../App.js'
import '../index.css'

//import { makeStyles } from '@mui/styles';

/* const useStyles = makeStyles ({
  appInputs: {
    borderRadius: 0,
     height: 35,
    width: 150,
    border: 1, 
    },
});  */
export default function BasicSelect() {
  //const classes = useStyles();
  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box >
      <FormControl >
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          className="App-inputs"
        
         value={allCoins[0]}
          /*  {
            coins.map( => <MenuItem value={name}>{name}</MenuItem>)
          }  */
          onChange={handleChange}
        >
          
          <MenuItem value={1}>{allCoins}</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}