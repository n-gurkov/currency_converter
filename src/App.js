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




function App() {

  const [value, setValue] = useState('Txt')
  const [allCoins, setAllCoins] = useState([]);
  export default allCoins;

  useEffect(() => {
    axios.get('https://api.currencyfreaks.com/latest?apikey=f69289ef015844e9b512d536114acc62').then(({data}) =>{
      const coins = data.rates;
      console.log(coins);
      setAllCoins(coins);
    })
  }, []);


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
              <BasicSelect/>
            </Grid>

            <Grid item xs={0.5}>
              <div className="AppText2">в {allCoins[1]}</div>
            </Grid>

            <Grid item xs={3}>
              <BasicSelect/>
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
}

export default App;


/* logic
    firstSumm = inputValue1 / json.data.rates.{валюта} // кол-во долларов за первую валюту
    inputValue2 = firstSumm  * json.data.rates.{валюта2} //ответ                                   

*/