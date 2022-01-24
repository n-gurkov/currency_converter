import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import BasicSelect from './components/BasicSelect';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './index.css'
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/400.css';








function App() {

  const [value, setValue] = useState('Txt')


  return (
  
    <Container className="root" maxWidth="sm">

<Box className="AppText">
      <Grid container spacing={2}>
        <Grid item xs={5}>
        </Grid>
        <Grid item xs={7}>
          <div className="AppHeader"> 
          Конвертер валют</div>
         
        </Grid>
        <Grid container alignItems="center">
        <Grid item xs={5}>
          <div className="AppText">Вы переводите из</div>
          
        </Grid>
        <Grid item xs={3}>
          <BasicSelect/>
        </Grid>
        <Grid item xs={1}>
          <div className="AppText2">в</div>
          
        </Grid>
        <Grid item xs={3}>
        <BasicSelect/>
        </Grid>
        
        <Grid item xs={5}>
        </Grid>
        <Grid item xs={3}>
        <TextField id="outlined-basic" variant="outlined" />
        </Grid>
        <Grid item xs={1}>
          <div className="AppText2">=</div>
        
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-basic" variant="outlined" />
        </Grid>
        </Grid>
        <Grid container className="App-bottom">
        <Grid item xs={5}></Grid>
        <Grid item xs={7}>
          <div className="App-bottom"><Button>поменять валюты местами</Button></div>
        
        </Grid>
        </Grid>
      </Grid>
    </Box>

     
      
      {/* <div className="App-govno">
        <Counter/>
        <h2>{value}</h2>

        <input 
          type="text" 
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </div> */}
    </Container>    
  );
}

export default App;
