import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import App from '../App'
import '../index.css'



//App();
export default function BasicSelect(props, items) {
  //const classes = useStyles();
  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //console.log(this.items)
  return (
    <Box >
      <FormControl >
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          className="App-inputs"
        
          value={this.props.items[0]}
          onChange={handleChange}
        >
          {
            items.map(values =>  <MenuItem value = {values}>{values}</MenuItem>)
          }
          <MenuItem value = {1}>1</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
  );
  
}