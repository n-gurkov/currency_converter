import React, {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import BasicSelect from './components/BasicSelect';
import BasicTextFields from './components/BasicTextFields'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import './index.css'
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/400.css';




function App(props) {

  const [value, setValue] = useState('Txt')
  const [allValues, setAllValues] = useState([]);
  const [allKeys, setAllKeys] = useState([]);
  

  useEffect(() => {
    axios.get('https://api.currencyfreaks.com/latest?apikey=f69289ef015844e9b512d536114acc62').then(({data}) =>{
      
      const values = Object.values(data.rates);
      const keys = Object.keys(data.rates);
      //console.log(values);
      //console.log(keys);
      setAllValues(values);
      setAllKeys(keys);
    })
  }, []);

  //console.log({allValues})
  return (
  
    <Container className="root" maxWidth="sm">
      <Box >
        <Grid container spacing={2}>

          <Grid item xs={5}></Grid>

          <Grid item xs={7}>
            <div className="AppHeader"> 
              Конвертер валют
            </div>
          </Grid>


          <Grid  container  alignItems="center">

            <Grid item xs={5}>
              <div className="AppText">
                Вы переводите из
              </div> 
            </Grid>

            <Grid item xs={3.2}>
              <BasicSelect items={allValues}/>
            </Grid>

            <Grid item xs={0.5}>
              <div className="AppText2">в {allKeys[0]}</div>
            </Grid>

            <Grid item xs={3}>
              <div><BasicSelect items={allValues}/></div>       
            </Grid>
                
            <Grid item xs={5}></Grid>

            <Grid item xs={3.2}>
              <BasicTextFields/>
            </Grid>

            <Grid item xs={0.5}>
              <div className="AppText2">=</div>
            </Grid>

            <Grid item xs={3}>
              <BasicTextFields />
              
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
    </Container>    
  );
  console.log({allValues})
 
}

export default App;


/* logic
    firstSumm = inputValue1 / json.data.rates.{валюта} // кол-во долларов за первую валюту
    inputValue2 = firstSumm  * json.data.rates.{валюта2} //ответ                                   

*/