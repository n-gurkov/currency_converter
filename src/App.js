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
  const [select1, setSelect1] = useState('')
  const [select2, setSelect2] = useState('')
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  

  const [field, setField] = React.useState('');
  const counter = (event, flag) => {
    console.log(flag)
    if (flag == true) {
      setValue1(event)
      setValue2(event /select1 *select2)}
    else {
      setValue2(event)
      setValue1(event /select2 *select1)
    }
    };

 // console.log(event);

  const [allValues, setAllValues] = useState([]);

  useEffect(() => {
    axios.get('https://api.currencyfreaks.com/latest?apikey=f69289ef015844e9b512d536114acc62').then(({data}) =>{     
      const values = data.rates;
      console.log(data)
      setAllValues(values);
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
              <BasicSelect items={allValues} setSelect = {setSelect1}/>
            </Grid>

            <Grid item xs={0.5}>
              <div className="AppText2">в </div>
            </Grid>

            <Grid item xs={3}>
              <div><BasicSelect items={allValues} setSelect = {setSelect2}/></div>       
            </Grid>
                
            <Grid item xs={5}></Grid>

            <Grid item xs={3.2}>
              <BasicTextFields counter={counter} value={value1} flag = {true}/>
            </Grid>

            <Grid item xs={0.5}>
              <div className="AppText2">=</div>
            </Grid>

            <Grid item xs={3}>
              <BasicTextFields counter={counter} value={value2} flag = {false}/>
              
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